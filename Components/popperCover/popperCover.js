//var currentDocument = document.currentScript.ownerDocument;
import _html from "./pop-cover.js";

class popperCover extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false);
        this.render();
        

    }
    connectedCallback() {

    }

    static get observedAttributes() {
        return ['title', 'wcname'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log('attributeChangeCalback:', name, oldVal, newVal);
        if (name == 'title' && this.shadowRoot) {
            let titleSpand = this.shadowRoot.querySelector("[comp-role ='title']")
            titleSpand.innerHTML = this.getAttribute('title');
        }        
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
    render() {
        const shadowRoot = (this.shadowRoot == null) ?
            this.attachShadow({
                mode: 'open'
            }) :
            this.shadowRoot;
        shadowRoot.innerHTML = _html(this.getAttribute('title'));        
        const template = shadowRoot.querySelector("#pop-cover-template");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        // this.dispatchEvent(new CustomEvent('WebComponentsReady', {}));
        var externalObj = this.getAttribute('externalObj');
        
        shadowRoot.querySelector("[comp-role = 'close']").addEventListener('click', ()=>{
            this.dispatchEvent(new CustomEvent('wc_close'));    
        });
    }
    close(){
        this.dispatchEvent(new CustomEvent('wc_close'));
    }

}
customElements.define("pop-cover", popperCover);