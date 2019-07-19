
//var currentDocument = document.currentScript.ownerDocument;
import _html from "./express-footer.js";

class Footer extends HTMLElement {
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
        const template = shadowRoot.querySelector("#express-footer-template");

        // Dispatch Data
        console.log("attributes data:",decodeURIComponent(this.getAttribute('data-content')));
        this.data = JSON.parse(decodeURIComponent(this.getAttribute("data-content"))) ;        
       
        // console.log('template:', template);


        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        for (var key in this.data){            
            // Should be improve for specific html control here
            // Each of Web-Component hanldes itself for data contribution for respective tags
             shadowRoot.querySelector(`[dat_id = ${key}]`).innerHTML = this.data[key];
        }

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

customElements.define("express-footer", Footer);
export default Footer;
