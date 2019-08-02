
//var currentDocument = document.currentScript.ownerDocument;
import _html from "./popper-wc.js";

class PopperWC extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
           // Do something here
        }, false)
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = _html;
        const template = shadowRoot.querySelector("#popper-wc-template");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        var externalObj = this.getAttribute('externalObj');
    }

    static get observedAttributes() {
        return ['proName1', 'proName2'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
        console.log('attributeChangeCalback:', name, oldVal, newVal);
        // if (name === "visible" && this.shadowRoot) {
        //     if (newVal === null) {
        //         this.shadowRoot.querySelector('[wrapper]').classList.remove("visible");
        //     } else {
        //         this.shadowRoot.querySelector('[wrapper]').classList.add("visible");
        //     }
    }

}

customElements.define("popper-wc", PopperWC);
