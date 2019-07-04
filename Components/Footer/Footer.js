
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
        console.log(shadowRoot.querySelector('[dat_id="abcd"]'));
        
        for (let i = 0; i < this.data.length; i++){       
            console.log(this.data[i]['dat_id'])  ;
            ///this.data[i]['dat_id']
            shadowRoot.querySelector(`[dat_id=${this.data[i]['dat_id']}]`).innerText = this.data[i]['content'];
            console.log(shadowRoot.querySelector(`[dat_id=${this.data[i]['dat_id']}]`));            
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
