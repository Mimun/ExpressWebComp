//var currentDocument = document.currentScript.ownerDocument;
import _html from "./cover-elem.js";

class coverElement extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false)
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
        var externalObj = this.getAttribute('externalObj');
        if (this.parentNode !== document.body) {
            document.body.appendChild(this);
        }
        // Environment preparation
        document.body.querySelectorAll('*').forEach((el) => {
            // console.log('el', el.tagName);
            if (el.tagName != 'COVER-ELEM') {
                ['click','focus'].forEach((event)=>{
                    el.addEventListener(event, (elem) => {
                        elem.stopPropagation();
                        this.updateElement(el);
                        // console.log('elem', this.updateElement(el));
                        // console.log('SourceElem:', coverElement.sourceElem);
                    })
                })
                
            }
        })
        // Action mapping
        shadowRoot.querySelectorAll('[ctr-action]').forEach((elem) => {
            ['drag', 'parent', 'child', 'up', 'down', 'clone', 'remove', 'add'].forEach((action) => {
                if (elem.getAttribute('ctr-action') == action) {
                    elem.addEventListener('click', this.actionMap[action]);
                }
            })
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
        let clientRect = sourceElem.getBoundingClientRect();
        // console.log(clientRect);
        let selectBox = this.shadowRoot.querySelector('#select-box');
        selectBox.style.top = clientRect.top + 'px';
        selectBox.style.left = clientRect.left + 'px';
        selectBox.style.width = clientRect.width + 'px';
        selectBox.style.height = clientRect.height + 'px';
        selectBox.style.display = "block";
        let highlightName = this.shadowRoot.querySelector('#highlight-name').innerHTML = sourceElem.tagName;
        sourceElem.contentEditable = "true";
        if(sourceElem.parentNode){
            sourceElem.parentNode.contentEditable = "false";
        }        
        this.sourceElem = sourceElem;
        return sourceElem;
    }

    actionMap = {
        'drag': (e) => {
            console.log('drag');
        },
        'parent': (e) => {
            console.log('parent');
            this.updateElement(this.sourceElem.parentNode);
        },
        'child': (e) => {
            console.log('child', this.sourceElem.firstElementChild);
            if (this.sourceElem.firstElementChild instanceof HTMLElement) {
                this.updateElement(this.sourceElem.firstElementChild);
            }
        },
        'up': (e) => {
            console.log('up');
            let previousSibling = this.sourceElem.previousSibling;
            if (previousSibling){
                this.sourceElem.parentNode.insertBefore(this.sourceElem, previousSibling);
                this.updateElement(this.sourceElem);
            }
        },
        'down': (e) => {
            console.log('down');
            let nextElementSibling = this.sourceElem.nextElementSibling
            if(nextElementSibling){
                this.sourceElem.parentNode.insertBefore(this.sourceElem, nextElementSibling.nextElementSibling);
            }
        },
        'clone': (e) => {
            if (this.sourceElem.parentNode) {
                let cloneNode = this.sourceElem.cloneNode(true);
                this.sourceElem.parentNode.appendChild(cloneNode);
                // 
                ['click','focus'].forEach((action) =>{
                    cloneNode.querySelectorAll('*').forEach((elem) => {
                        // console.log('inside cloneNode', elem);
                        elem.addEventListener(action, (event) => {
                            event.stopPropagation();
                            this.updateElement(elem);
                        });
                    });
                    // 
                    cloneNode.addEventListener(action, (elem) => {
                        elem.stopPropagation();
                        this.updateElement(cloneNode);
                    });
                })
                
            }
        },
        'remove': (e) => {
            let parent = this.sourceElem.parentNode;
            this.sourceElem.parentNode.removeChild(this.sourceElem);
            this.updateElement(parent);

        },
        'add': (e) => {
            console.log('add', this);
        }
    }

}
customElements.define("cover-elem", coverElement);