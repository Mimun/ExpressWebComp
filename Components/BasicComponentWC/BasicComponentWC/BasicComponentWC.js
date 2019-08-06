//var currentDocument = document.currentScript.ownerDocument;
import _html from "./basiccomp-wc.js";
// import _html from "http://localhost:3000/Components/BasicComponentWC/BasicComponentWC/BasicComponentWC.js";

class BasicComponentWC extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false)
    }
    connectedCallback() {
        this.render();        
        this.dispatchEvent(new CustomEvent('wc_loaded', {detail: _html}));
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
    
    }
    // _mode;
    // get mode() {
    //     return this._mode;
    // }
    // set mode(value) {
    //     this._mode = value;
    // }

    render = function(){
        // Listener
        // Mounting element from template        
        const shadowRoot = (this.shadowRoot == null) ?
            this.attachShadow({
                mode: 'open'
            })      
         : this.shadowRoot;
        shadowRoot.innerHTML = _html;
        
        const template = (this.getAttribute('mode') == 'display')?shadowRoot.querySelector("#basiccomp-wc-attPanel"):shadowRoot.querySelector("#basiccomp-wc-template");                    
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        // Behavior region
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

    
    get html() {
        return _html;
    }    
    get templateNameForAtt(){
        return 'basiccomp-wc-attPanel';
    }

}

customElements.define("basiccomp-wc", BasicComponentWC);