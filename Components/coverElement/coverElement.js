//var currentDocument = document.currentScript.ownerDocument;
import _html from "./cover-elem.js";
import actionMap from "./actions.js";

class coverElement extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false)
    }
    connectedCallback() {

        if (!this.shadowRoot) {
            document.body.addEventListener('click', (el) => {
                el.stopPropagation();
                if (el.target !== this) {
                    this.updateTargetElem(el.target);
                }
            });
        }
        // 
        const shadowRoot = (this.shadowRoot == null) ?
            this.attachShadow({
                mode: 'open'
            }) : this.shadowRoot;

        shadowRoot.innerHTML = _html;
        const template = shadowRoot.querySelector("#cover-elem-template");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
        this.highlightName = this.shadowRoot.querySelector('#highlight-name');
        this.selectAction = this.shadowRoot.querySelector('#select-actions');
        this.addBnt = this.shadowRoot.querySelector('#section-actions');
        //      
        document.querySelectorAll('cover-elem').forEach(other => {
            if (other !== this) {
                other.parentElement.removeChild(other);
            }
        })
        if (this.parentElement !== document.body) {
            document.body.appendChild(this);
        }

        actionMap.handler = this;
        this.actions = actionMap;

        console.log('handler', this.actions.handler);
        shadowRoot.querySelectorAll('[ctr-action]').forEach((elem) => {
            // ['drag', 'movetoparent','parent', 'child', 'up', 'down', 'clone', 'remove', 'add'].forEach((action) => {
            Object.keys(this.actions).forEach((action) => {
                if (elem.getAttribute('ctr-action') == action) {
                    elem.addEventListener('click', this.actions[action]);
                }
            })
        });
        // Dragging Zone
        this.setAttribute('draggable', true);        

        let self = this;
        document.querySelectorAll('[dragdropzone]').forEach(ele => {
            /* events fired on the drop targets */
            ele.addEventListener("dragover", function (event) {
                // prevent default to allow drop
                event.preventDefault();                

            }, false);

            ele.addEventListener("dragenter", function (event) {
                // highlight potential drop target when the draggable element enters it
                event.target.classList.add('dragIn');
                // console.log("drag in me", event.target);
            }, false);

            ele.addEventListener("dragleave", function (event) {
                // reset background of potential drop target when the draggable element leaves it                
                event.target.classList.remove('dragIn');

            }, false);

            ele.addEventListener("drop", function (event) {
                // prevent default action (open as link for some elements)
                event.preventDefault();
                // move dragged elem to the selected drop target         
                event.target.classList.remove('dragIn');
                console.log("I am here", self);
                event.target.parentElement.insertBefore(self.targetElem, event.target.nextElementSibling)                
                self.updateTargetElem(self.targetElem);
            }, false);
        });
        // 
    }

    static get observedAttributes() {
        return ['visible', 'proName2'];
    }

    attributeChangedCallback(name, oldVal, newVal) {

        // console.log('attributeChangeCalback:', name, oldVal, newVal);
        if (name === "visible" && this.shadowRoot) {

            ["highlight-name", "select-actions", "section-actions"].map(ele => {

                let element = this.shadowRoot.querySelector(`#${ele}`);
                if (newVal == "true") {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
            // 
        }
    }

    get visible() {
        return this.hasAttribute("visible");
    }
    set visible(value) {
        this.setAttribute("visible", value);
    }

    updateTargetElem(targetElem) {
        // old targetElem
        if (this.targetElem) {
            this.targetElem.removeAttribute('style');
            if (this.storeStyle) {
                this.targetElem.setAttribute('style', this.storeStyle);
            }
            if (!this._contentEditable) {
                this.targetElem.removeAttribute('contentEditable');
            }
        }

        this.storeStyle = targetElem.getAttribute('style');
        if (targetElem.hasAttribute('contenteditable') && targetElem.getAttribute("contenteditable") == true) {
            this._contentEditable = true;
        };
        targetElem.style.transition = "all .8s";
        targetElem.style.border = "1px solid #727f96";
        //a8b0be 8ab4f8
        targetElem.style.boxShadow="0px 0px 25px 5px rgba(95,122,169,0.5)"
        //  0px 0px 25px 5px rgba(95,122,169,0.5)
        // targetElem.style.boxShadow="0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)"
        targetElem.setAttribute('contenteditable', true);
        
        // new targetElem
        this.targetElem = targetElem;
        this.setAttribute('visible', true)

        let clientRect = targetElem.getBoundingClientRect();

        if (clientRect.top < 20) {
            this.highlightName.style.top = clientRect.top + pageYOffset + 'px';
            this.selectAction.style.top = clientRect.top + pageYOffset + 'px';
        } else {
            this.highlightName.style.top = clientRect.top - this.highlightName.getBoundingClientRect().height + pageYOffset + 'px';
            this.selectAction.style.top = clientRect.top - this.selectAction.getBoundingClientRect().height + pageYOffset + 'px';
        }
        this.addBnt.style.top = clientRect.bottom - this.addBnt.getBoundingClientRect().height / 2 + pageYOffset + 'px';

        this.highlightName.style.left = clientRect.left + pageXOffset + 'px';
        this.selectAction.style.left = clientRect.right - this.selectAction.getBoundingClientRect().width + pageXOffset + 'px';
        this.addBnt.style.left = (clientRect.left + clientRect.right - this.addBnt.getBoundingClientRect().width) / 2 + pageXOffset + "px";

        this.highlightName.innerHTML = targetElem.nodeName;
        // this.highlightName.style.top = clientRect.top + pageYOffset + 'px';
        // console.log(clientRect);
        targetElem.style.zIndex = 900;
        this.style.zIndex = 1000;
        targetElem.focus();

    }

}

customElements.define("cover-elem", coverElement);