//var currentDocument = document.currentScript.ownerDocument;
import _html from "./basiccomp-wc.js";

class BasicComponentWC extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false)
    }
    connectedCallback() {

        // Listener
        
      
        // Mounting element from template        
        const shadowRoot = (this.shadowRoot == null) ?
            this.attachShadow({
                mode: 'open'
            })      
         : this.shadowRoot;
        

        shadowRoot.innerHTML = _html;
        const template = shadowRoot.querySelector("#basiccomp-wc-template");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        this.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('wc_click', {
                detail: {
                    elem: this
                },
                bubbles: false
            }));
        });

        var externalObj = this.getAttribute('externalObj');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');        
    }

    adoptedCallback() {
        //change the color to red for 2 seconds
        var slot = this.shadowRoot.querySelector("slot")
        slot.classList.add("red")
        setTimeout(() => slot.classList.remove("red"), 2000);
        console.log('adoptedCallback');

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

customElements.define("basiccomp-wc", BasicComponentWC);