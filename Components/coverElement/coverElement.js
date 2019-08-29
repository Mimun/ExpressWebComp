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

        if (!this.shadowRoot){
            document.body.addEventListener('click', (el) => {
                el.stopPropagation();
                if (el.target !== this){
                    if (this.targetElem){
                        this.targetElem.removeAttribute('style');
                        if (this.storeStyle){
                            this.targetElem.setAttribute('style', this.storeStyle);
                        }
                        if(!this._contentEditable){
                            this.targetElem.removeAttribute('contentEditable');
                        }
                    }
                    
                    this.updateTargetElem(el.target);
                }            
            });
        }

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

        

        document.querySelectorAll('cover-elem').forEach(other=>{
            if (other !== this){
                other.parentElement.removeChild(other);
            }
        })
        if(this.parentElement !== document.body){
            document.body.appendChild(this);
        }
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
            })
            // this.shadowRoot.querySelectorAll('[wrapper]').forEach(ele => {
            //     if (newVal === null) {
            //         ele.newVal === null
            //     } else {
            //         ele.classList.add("visible");
            //     }
            // });
        }
    }

    get visible() {
        return this.hasAttribute("visible");
    }
    set visible(value) {
        this.setAttribute("visible", value);
    }

    updateTargetElem(targetElem) {

        this.storeStyle = targetElem.getAttribute('style');
        if (targetElem.hasAttribute('contenteditable') && targetElem.getAttribute("contenteditable") == true){
            this._contentEditable = true;
        };
        targetElem.style.border = "1px solid #4285f4";
        targetElem.setAttribute('contenteditable', true);
        
        this.targetElem = targetElem;
        this.setAttribute('visible', true)

        let clientRect = targetElem.getBoundingClientRect();

        if (clientRect.top < 20) {
            this.highlightName.style.top = clientRect.top + pageYOffset + 'px';
            this.selectAction.style.top = clientRect.top + pageYOffset + 'px';
        } else {
            this.highlightName.style.top = clientRect.top - this.highlightName.getBoundingClientRect().height + pageYOffset + 'px';
            this.selectAction.style.top = clientRect.top -this.selectAction.getBoundingClientRect().height + pageYOffset + 'px';
        }
        this.addBnt.style.top = clientRect.bottom - this.addBnt.getBoundingClientRect().height / 2 + pageYOffset + 'px';

        this.highlightName.style.left = clientRect.left + pageXOffset + 'px';
        this.selectAction.style.left = clientRect.right - this.selectAction.getBoundingClientRect().width + pageXOffset + 'px';
        this.addBnt.style.left = (clientRect.left + clientRect.right) / 2 + pageXOffset + "px";

        this.highlightName.innerHTML = targetElem.nodeName;
        // this.highlightName.style.top = clientRect.top + pageYOffset + 'px';
        // console.log(clientRect);
        targetElem.focus();        

    }

}

customElements.define("cover-elem", coverElement);