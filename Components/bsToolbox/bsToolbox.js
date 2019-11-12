
//var currentDocument = document.currentScript.ownerDocument;
import _html from "./bs-toolbox.js";
import _css from "./bsToolbox.css.js";
import webparts from "./webparts.js";

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
        shadowRoot.innerHTML = _html.concat(webparts);
        const template = shadowRoot.querySelector("#main");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        let css = document.createElement('style')
        css.innerHTML = _css;
        shadowRoot.insertBefore(css, shadowRoot.firstElementChild);
        this.dispatchEvent(new CustomEvent('_connectedCallback', {}));
        this.controls_functioning();
        
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
    controls_functioning(){
        let self = this;
        this.shadowRoot.querySelectorAll("[com-act]").forEach(el=>{
            el.addEventListener('click', ()=>{                            
                this.exec_command(el.getAttribute('com-act'), self._targetElement);
            });            
        })
        
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

    set targetElement(elem){
        this._targetElement = elem
    }
    // 
    exec_command(command, container, option = false){
        console.log("command:", command, container);
        // 
        // 
        let wpTemplate = this.shadowRoot.querySelector('#webparts').content;
        
        let component = wpTemplate.querySelector(`[role=${command}]`);
        let clone = component.cloneNode(true);
        console.log('clone', clone);
        container.appendChild(clone);
        // 
    }
}

customElements.define("bs-toolbox", bsToolbox);
