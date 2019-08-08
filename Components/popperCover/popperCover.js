//var currentDocument = document.currentScript.ownerDocument;
import _html from "./pop-cover.js";




class popperCover extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false);

    }
    connectedCallback() {
        const shadowRoot = (this.shadowRoot == null) ?
            this.attachShadow({
                mode: 'open'
            }) :
            this.shadowRoot;
        shadowRoot.innerHTML = _html(this.getAttribute('title'));
        console.log('wcname', this.getAttribute('wcname'))
        let _title = this.getAttribute('title');
        const template = shadowRoot.querySelector("#pop-cover-template");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        this.dispatchEvent(new CustomEvent('WebComponentsReady', {}));

        var externalObj = this.getAttribute('externalObj');
    }

    static get observedAttributes() {
        return ['title', 'wcname'];
    }


    attributeChangedCallback(name, oldVal, newVal) {

        console.log('attributeChangeCalback:', name, oldVal, newVal);
        // console.log('get CompName', this.getAttribute('compName'));
        // if (name === "visible" && this.shadowRoot) {
        //     if (newVal === null) {
        //         this.shadowRoot.querySelector('[wrapper]').classList.remove("visible");
        //     } else {
        //         this.shadowRoot.querySelector('[wrapper]').classList.add("visible");
        //     }
    }


    get title() {
        return this.hasAttribute('title');
    }
    set title(value) {
        this.setAttribute('title', 'value');
    }

    get wcname() {
        return this.hasAttribute('wcname');
    }
    set wcname(value) {
        this.setAttribute("wcname", value);
    }

    updateSlot(elem) {
        if (!elem instanceof HTMLElement || elem instanceof popperCover) {
            return;
        }
        this.shadowRoot.querySelector('slot').appendChild(elem);
    }

}


customElements.define("pop-cover", popperCover);