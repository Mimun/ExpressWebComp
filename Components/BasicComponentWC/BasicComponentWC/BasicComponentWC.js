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
        this.updateInput_fromAtt();
        
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
    updateInput_fromAtt(){
        this.shadowRoot.querySelectorAll('[att-prop]').forEach((el)=>{
            el.addEventListener('change', ()=>{
                let data = {'att-prop': el.getAttribute('att-prop'), 'value': el.value};                
                // 1. First way, dispatch event                
                // To avoid reference of refence.. the way is send out a Event to update attribute's Name
                this.dispatchEvent(new CustomEvent('wc_updateinput', {detail: data}));                
                // 2. Second way, update directly to referenceElem
                if (this.referenceElem ){                    
                    this.referenceElem.updateInfo(data);
                }
                
                if (el.getAttribute('att-prop') == 'name'){
                    // this.dispatchEvent(new CustomEvent("wc_updatetitle", {detail: data['value']}));
                    if (this.coverElem){                        
                        this.coverElem.setAttribute('title', el.value);
                    }
                }
            })
        })
    }
    // Cover Element of Attribute Panel
    updateCoverElem(elem){
        if (!elem instanceof HTMLElement ) {
            return;
        }        
        let closeBnt = this.shadowRoot.querySelector("[comp-role = 'close']");
        if (this.shadowRoot && closeBnt){
            closeBnt.addEventListener('click', ()=>{
                elem.close();                
            })
        };             
        this.coverElem = elem;
    }

    // Reference Element of Attribute Panel
    updateReferenceElem(elem){
        if (!elem instanceof HTMLElement ) {
            return;
        }
        return this.referenceElem = elem;
    }
    // update Information for each element in webcomponent
    updateInfo(data){           
        let elem = this.shadowRoot.querySelector(`[att-prop="${data['att-prop']}"]`);

        if (elem && elem.innerHTML){
            elem.innerHTML = data['value'];
        }
        if (elem && elem.placeholder && data['att-prop'] == "placeholder"){
            elem.placeholder = data['value'];
        }

    }

}

customElements.define("basiccomp-wc", BasicComponentWC);