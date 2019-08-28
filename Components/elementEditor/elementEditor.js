//var currentDocument = document.currentScript.ownerDocument;
import _html from "./element-editor.js";

class elementEditor extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false);
        // Action Map
        this.actionMap = {
            // 'drag': (e) => {
            //     e.stopPropagation();
            //     console.log('drag');

            // },
            'parent': (e) => {
                e.stopPropagation();
                console.log('parent');
                this.sourceElem = this.sourceElem.parentElement;
                this.updatePostion();
            },
            'movetoparent': (e) => {
                e.stopPropagation();
                console.log('movetoparent', this.sourceElem);
                if (this.sourceElem.parentElement == document.body) {
                    return;
                }
                this.sourceElem.parentNode.parentNode.insertBefore(this.sourceElem, this.sourceElem.parentNode.nextElementSibling);
                if (this.sourceElem.shadowRoot) {
                    this.updatePostion();
                } else {
                    this.sourceElem.parentNode.appendChild(this);
                }

            },
            'child': (e) => {
                e.stopPropagation();
                console.log('child')
                if (this.sourceElem.firstElementChild instanceof HTMLElement) {
                    if (this.sourceElem.firstElementChild.shadowRoot) {
                        this.sourceElem = this.sourceElem.parentNode;

                    } else {
                        this.sourceElem.appendChild(this);
                        this.sourceElem = this.sourceElem.firstElementChild
                    }
                    this.updatePostion();
                }
            },
            'up': (e) => {
                e.stopPropagation();
                console.log('up');
                if (this.sourceElem.previousElementSibling) {
                    this.sourceElem = this.sourceElem.previousElementSibling;
                    this.updatePostion(this.sourceElem.previousElementSibling);
                }
            },
            'down': (e) => {
                e.stopPropagation();
                console.log('down');
                if (this.sourceElem.nextElementSibling) {
                    this.sourceElem = this.sourceElem.nextElementSibling;
                    this.updatePostion(this.sourceElem.nextElementSibling);
                }
            },
            'clone': (e) => {
                e.stopPropagation();
                console.log('clone');
                let cloneNode = this.sourceElem.cloneNode(true);
                this.sourceElem.parentNode.insertBefore(cloneNode, this.sourceElem.nextElementSibling);
            },
            'remove': (e) => {
                e.stopPropagation();
                console.log('remove');
                let removeItem = this.sourceElem;
                this.sourceElem = this.sourceElem.parentNode;
                this.sourceElem.parentNode.appendChild(this);
                this.updatePostion();
                removeItem.parentNode.removeChild(removeItem);

            },
            'add': (e) => {
                e.stopPropagation();
                this.dispatchEvent(new CustomEvent('coverAdding', {
                    detail: this.sourceElem
                }));
                console.log("add");
            },

        };
        // 
        this.ini = false;
    }
    connectedCallback() {

        // console.log('shadowRoot ?', !!this.shadowRoot, this.sourceElem);
        if (!this.shadowRoot) {
            document.body.addEventListener('click', (el) => {
                this.sourceElem = el.target;
                if (this.sourceElem.hasAttribute('noclick')) {
                    return;
                }
                if (this.sourceElem.parentElement == this.parentElement) {
                    this.updatePostion();
                    return;
                }
                this.sourceElem.parentNode.appendChild(this);
            })
        } else {
            this.updatePostion();
        }

        const shadowRoot = (this.shadowRoot == null) ?
            this.createShadowRoot() : this.shadowRoot;

        this.setAttribute('draggable', true);

        // Remove other instance
        document.querySelectorAll('element-editor').forEach((el) => {
            if (el !== this) {
                el.parentElement.removeChild(el);
            }
        });
    }

    createShadowRoot() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = _html;
        const template = shadowRoot.querySelector("#main");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
        // Action mapping
        shadowRoot.querySelectorAll('[ctr-action]').forEach((elem) => {
            // ['drag', 'movetoparent','parent', 'child', 'up', 'down', 'clone', 'remove', 'add'].forEach((action) => {
            Object.keys(this.actionMap).forEach((action) => {
                if (elem.getAttribute('ctr-action') == action) {
                    elem.addEventListener('click', this.actionMap[action]);
                }
            })
        })
        return this.shadowRoot
    }

    updatePostion(el) {

        let sourceElem = (el) ? el : this.sourceElem;
        console.log("sourceElem", !!sourceElem, sourceElem);
        let clientRect = sourceElem.getBoundingClientRect();
        let selectBox = this.shadowRoot.querySelector('#select-box');

        if (clientRect.width == 0) {
            return;
        }
        sourceElem.style.zIndex = 1000;
        this.style.zIndex = 900;

        selectBox.style.top = sourceElem.offsetTop + 'px';
        selectBox.style.left = sourceElem.offsetLeft + 'px';
        selectBox.style.width = sourceElem.offsetWidth + 'px';
        selectBox.style.height = sourceElem.offsetHeight + 'px';
        selectBox.style.display = "block";

        let highlightName = this.shadowRoot.querySelector('#highlight-name');
        highlightName.innerHTML = sourceElem.tagName;
        let actionBox = this.shadowRoot.querySelector('#select-actions');
        // console.log("clientRect", clientRect);
        if (clientRect.top < 20) {
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
    }

    disconnectedCallback() {
        this.sourceElem.removeAttribute('style');
        this.sourceElem.removeAttribute('contenteditable');
    }

    static get observedAttributes() {
        return ['proName1', 'proName2'];
    }

    attributeChangedCallback(name, oldVal, newVal) {

        // console.log('attributeChangeCalback:', name, oldVal, newVal);
        // if (name === "visible" && this.shadowRoot) {
        //     if (newVal === null) {
        //         this.shadowRoot.querySelector('[wrapper]').classList.remove("visible");
        //     } else {
        //         this.shadowRoot.querySelector('[wrapper]').classList.add("visible");
        //     }
    }

}

customElements.define("element-editor", elementEditor);