//var currentDocument = document.currentScript.ownerDocument;
import _html from "./cover-elem.js";

class coverElement extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false);
        this.setAttribute('draggable', true);
        this.actionMap = {
            'drag': (e) => {
                console.log('drag');

            },
            'parent': (e) => {
                console.log('parent');
                if (this.sourceElem.parentNode == document.body) {
                    console.log('stop');
                    return;
                };
            this.sourceElem.parentNode.removeAttribute('style');            
            this.updateElement(this.sourceElem.parentNode);
            },
            'movetoparent':(e)=>{
                if (this.sourceElem.parentNode == document.body) {
                    console.log('stop');
                    return;
                };
                this.sourceElem.parentNode.removeAttribute('style');
                this.sourceElem.parentNode.parentNode.insertBefore(this.sourceElem, this.sourceElem.parentNode.nextElementSibling);
            },
            'child': (e) => {
                if(!this.sourceElem.firstElementChild){
                    return
                }
                if (this.sourceElem.firstElementChild.tagName == "SCRIPT") {
                    return;
                }
                console.log('child', this.sourceElem.firstElementChild.tagName);
                if (this.sourceElem.firstElementChild instanceof HTMLElement) {
                    this.updateElement(this.sourceElem.firstElementChild);
                }
            },
            'up': (e) => {
                console.log('up');
                let previousSibling = this.sourceElem.previousSibling;
                if (previousSibling) {
                    this.sourceElem.parentNode.insertBefore(this.sourceElem, previousSibling);
                    this.updateElement(this.sourceElem);
                }
            },
            'down': (e) => {
                console.log('down');
                let nextElementSibling = this.sourceElem.nextElementSibling
                if (nextElementSibling) {
                    this.sourceElem.parentNode.insertBefore(this.sourceElem, nextElementSibling.nextElementSibling);
                    this.updateElement(this.sourceElem);
                }
            },
            'clone': (e, s) => {
                if (this.sourceElem == document.body) {
                    console.log('here');
                    return;
                }
                if (this.sourceElem.parentNode) {
                    let cloneNode = this.sourceElem.cloneNode(true);                    
                    this.sourceElem.parentNode.insertBefore(cloneNode, this.sourceElem.nextElementSibling);
                    // 
                    ['click', 'focus'].forEach((action) => {
                        cloneNode.querySelectorAll('*').forEach((elem) => {
                            // console.log('inside cloneNode', elem);c
                            elem.addEventListener(action, (event) => {
                                event.stopPropagation();
                                this.updateElement(elem);
                            });

                        });
                        cloneNode.addEventListener(action, (elem) => {
                            elem.stopPropagation();
                            this.updateElement(cloneNode);
                        });

                        this.handleDragElement(cloneNode);
                        // 
                    })

                }
            },
            'remove': (e) => {
                let parent = this.sourceElem.parentNode;
                this.sourceElem.parentNode.removeChild(this.sourceElem);
                if (parent !== document.body) {
                    this.updateElement(parent);
                }


            },
            'add': (e) => {
                console.log('add', this);
            },

        };

        this.addEventListener("dragstart", (event)=> {
            // store a ref. on the dragged elem
            this.dragged = this.sourceElem;            
            // make it half transparent
            // event.target.style.opacity = .5;
          }, false);

    }
    connectedCallback() {
        const shadowRoot = (this.shadowRoot == null) ?
            this.attachShadow({
                mode: 'open'
            }) :
            this.shadowRoot;
        shadowRoot.innerHTML = _html;
        const template = shadowRoot.querySelector("#main");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);


        if (this.parentNode !== document.body) {
            document.body.appendChild(this);
        }
        // Environment preparation
        document.querySelectorAll('cover-elem').forEach((el) => {
            if (el !== this) {
                el.parentElement.removeChild(el);
            }
        })
        document.body.querySelectorAll('[allow-edit]').forEach((el) => {
            // console.log('el', el.tagName);
            // Remove other instance
            if (el.tagName != 'COVER-ELEM') {
                ['click', 'focus'].forEach((event) => {
                    el.addEventListener(event, (elem) => {
                        elem.stopPropagation();
                        this.updateElement(el)                        
                        // console.log('elem', this.updateElement(el));
                        // console.log('SourceElem:', coverElement.sourceElem);
                    })
                })
                this.handleDragElement(el);
            }
        })


        // Action mapping
        shadowRoot.querySelectorAll('[ctr-action]').forEach((elem) => {
            // ['drag', 'movetoparent','parent', 'child', 'up', 'down', 'clone', 'remove', 'add'].forEach((action) => {
                Object.keys(this.actionMap).forEach((action)=>{
                if (elem.getAttribute('ctr-action') == action) {
                    elem.addEventListener('click', this.actionMap[action]);
                    this.handleDragElement(elem);
                }
            })
        })
        // Move over action control
        shadowRoot.querySelector("[ctr-action='movetoparent']").addEventListener('mouseover', (e)=>{
            this.sourceElem.parentNode.style.border = "blue solid 1px";
        });
        shadowRoot.querySelector("[ctr-action='parent']").addEventListener('mouseover', (e)=>{
            this.sourceElem.parentNode.style.border = "blue solid 1px";
        });
        shadowRoot.querySelector("[ctr-action='movetoparent']").addEventListener('mouseout', (e)=>{
            this.sourceElem.parentNode.removeAttribute('style');
        })
        shadowRoot.querySelector("[ctr-action='parent']").addEventListener('mouseout', (e)=>{
            this.sourceElem.parentNode.removeAttribute('style');
        })

    }

    static get observedAttributes() {
        return ['visible', 'proName2'];
    }

    attributeChangedCallback(name, oldVal, newVal) {

        console.log('attributeChangeCalback:', name, oldVal, newVal);
        if (name === "visible" && this.shadowRoot) {
            if (newVal === null) {
                this.shadowRoot.querySelector('#select-box').style.display = "none";
            } else {
                this.shadowRoot.querySelector('#select-box').style.display = "block";
            }
        }

    }

    updateElement(sourceElem) {
        if (!sourceElem instanceof HTMLElement || this == sourceElem) {
            return null;
        }
        if(!sourceElem.hasAttribute('allow-edit')){
            sourceElem.setAttribute('allow-edit', null);
        }

        let clientRect = sourceElem.getBoundingClientRect();
        // console.log(clientRect);
        let selectBox = this.shadowRoot.querySelector('#select-box');
        selectBox.style.top = clientRect.top + 'px';
        selectBox.style.left = clientRect.left + 'px';
        selectBox.style.width = clientRect.width + 'px';
        selectBox.style.height = clientRect.height + 'px';
        selectBox.style.display = "block";
        let highlightName = this.shadowRoot.querySelector('#highlight-name');
        highlightName.innerHTML = sourceElem.tagName;
        let actionBox = this.shadowRoot.querySelector('#select-actions');
        if (clientRect.top < 18) {
            console.log('moving now');
            highlightName.style.top = clientRect.bottom + 'px';
            actionBox.style.top = clientRect.bottom + 'px';
        } else {
            highlightName.removeAttribute('style');
            actionBox.removeAttribute('style');
        }
        sourceElem.contentEditable = "true";
        if (sourceElem.parentNode) {
            sourceElem.parentNode.contentEditable = "false";
        }
        document.querySelectorAll('[allow-edit]').forEach((elem) => {
            if (elem !== sourceElem) {
                elem.removeAttribute('contenteditable');
            }

        });



        this.sourceElem = sourceElem;
        return sourceElem;
    }

    

    handleDragElement(el) {
        // 
        
        // Adding Drag function
        el.addEventListener('dragover', (evt) => {
            evt.preventDefault();
            let style = evt.target.style;
            style.opacity = .5
            style.backgroundColor = "#52BE80";
            evt.target.parentNode.style.border = "blue solid 1px";
        });
        el.addEventListener('dragleave', (evt) => {
            evt.preventDefault();
            evt.target.removeAttribute('style');
            evt.target.parentNode.removeAttribute('style');
        });
        el.addEventListener('drop', (evt) => {
            evt.preventDefault();
            evt.target.removeAttribute('style');     
            if (!this.dragged){
                return;
            }       
            event.target.parentNode.insertBefore(this.dragged, event.target.nextElementSibling);            
            event.target.parentNode.removeAttribute('style');
            this.updateElement(this.dragged);
        });
    };



}
customElements.define("cover-elem", coverElement);