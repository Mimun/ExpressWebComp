
//var currentDocument = document.currentScript.ownerDocument;
import _html from "./bs-toolbox.js";
import _css from "./bsToolbox.css.js";

class bsToolbox extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
           // Do something here
        }, false)
    }
    connectedCallback() {
        if (this.shadowRoot){
            return;
        }
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = _html;
        const template = shadowRoot.querySelector("#main");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        let css = document.createElement('style')
        css.innerHTML = _css;
        shadowRoot.insertBefore(css, shadowRoot.firstElementChild);
        this.dispatchEvent(new CustomEvent('_connectedCallback', {}));
        this.tab_selecting();
        
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
    tab_selecting(){
        
        let tabs = this.shadowRoot.querySelectorAll('[data-toggle="tab"]');
        tabs.forEach(tab=>{            
            tab.addEventListener('click', el=>{
                deActiveTabsAndPanels();
                let selectedId = tab.getAttribute('link');
                tab.parentElement.classList.add('active');
                this.shadowRoot.querySelectorAll('[tab]').forEach(el=>{                    
                    el.getAttribute('link') == selectedId;
                    if (el.getAttribute('link') == selectedId){
                        el.classList.add('active');
                    }else{
                        el.classList.remove('active');
                    }
                    
                })
            })
        });

        function deActiveTabsAndPanels(){
            tabs.forEach(tab=>{
                tab.parentElement.classList.remove('active');
            })
        }
        this.shadowRoot.querySelector('[comp-role="close"]').addEventListener('click', event=>{
            this.dispatchEvent(new CustomEvent('_close', {}));
        })
    }

}

customElements.define("bs-toolbox", bsToolbox);
