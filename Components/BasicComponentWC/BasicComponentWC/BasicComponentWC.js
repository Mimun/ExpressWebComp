//var currentDocument = document.currentScript.ownerDocument;
import _html from "./basiccomp-wc.js";
// import _html from "http://localhost:3000/Components/BasicComponentWC/BasicComponentWC/BasicComponentWC.js";

class BasicComponentWC extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here;            
        }, false)
    }
    connectedCallback() {
        this.render();
        this.updateInput();
        this.dispatchEvent(new CustomEvent('wc_loaded', {
            detail: _html
        }));
    }

    disconnectedCallback() {
        // console.log('disconnectedCallback');
    }

    adoptedCallback() {       

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

    render() {
        // Listener
        // Mounting element from template        
        const shadowRoot = (this.shadowRoot == null) ?
            this.attachShadow({
                mode: 'open'
            }) :
            this.shadowRoot;
        shadowRoot.innerHTML = _html;
        // There are three modes "Input" or null mode as default -which shoud be used for input data, "config" mode used for setting attribues such as -label- -placeholder- -name- ...etc
        const template = (this.getAttribute('mode') == 'config') ? shadowRoot.querySelector("#basiccomp-wc-attPanel") : shadowRoot.querySelector("#basiccomp-wc-template");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        if (this.getAttribute('mode') == 'config') {
            let bnt = shadowRoot.querySelector('#bntSample')
            if (bnt) {
                bnt.addEventListener('click', () => {
                    // alert('from wc');
                    this.dispatchEvent(new CustomEvent('wcbnt_click', {
                        detail: {
                            'name': 'chipl'
                        }
                    }));
                })
            };
        }
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

    // update data from existed
    // Providing interactive event to other component
    updateInput(){
        this.shadowRoot.querySelectorAll('[att-prop]').forEach((el)=>{
            el.addEventListener('change', ()=>{
                let data = {'att-prop': el.getAttribute('att-prop'), 'value': el.value};
                console.log(JSON.stringify(data));
            })
        })
    }

}

customElements.define("basiccomp-wc", BasicComponentWC);