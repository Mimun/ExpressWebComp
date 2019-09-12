//var currentDocument = document.currentScript.ownerDocument;
import _html from "./input-text.js";
import _css from "./inputText.css.js";

class inputText extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false)
    }
    connectedCallback() {
        this.render();
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
    render() {
        // Listener
        // Mounting element from template        
        if (this.shadowRoot) {
            return;
        }
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        
        // let id = UUID .generate(); console.log("uuid", id);

        shadowRoot.innerHTML = _html;
        let css = document.createElement('style')
        css.innerHTML = _css;
        shadowRoot.insertBefore(css, shadowRoot.firstElementChild);
        // There are three modes "Input" or null mode as default -which shoud be used for input data, "config" mode used for setting attribues such as -label- -placeholder- -name- ...etc
        const template = (this.getAttribute('mode') == 'config') ? shadowRoot.querySelector("#attPanel") : shadowRoot.querySelector("#main");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        if (this.getAttribute('mode') == 'config') {
            let bnts = shadowRoot.querySelectorAll('[comp-role = "close"]').forEach(bnt=>{
                bnt.addEventListener('click', () => {                    
                    this.dispatchEvent(new CustomEvent('_close', {
                        detail: {
                            'name': 'chipl'
                        }
                    }));
                })
            })            
        };
        this.addEventListener('click', () => {
            if(this.hasAttribute('noclick')){
                return;
            }
            this.dispatchEvent(new CustomEvent('_click', {
                detail: {
                    elem: this
                },
                bubbles: false
            }));
        });
        

    }

}

customElements.define("input-text", inputText);