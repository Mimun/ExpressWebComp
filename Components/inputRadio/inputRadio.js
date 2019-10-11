//var currentDocument = document.currentScript.ownerDocument;
import _html from "./input-radio.js";
import uuidv4 from "../../Libs/uuid.js"
import _css from "./inputRadio.css.js";

import * as inputTags from "/Components/inputRadio/inputRadio.js";
class inputRadio extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        console.log('Parent', this.parentElement);
        this.render();
        if (this.getAttribute('mode') == "config") {
            this.mountingAttPanel();
        }else{
            let initData = ['con meo', 'con vit', 'con ga']
            this.updateInstance({value :initData, name: 'name'});
            this.updateGUI([], initData);
            
        }
        

    }

    static get observedAttributes() {
        return ['proName1', 'proName2'];
    }

    attributeChangedCallback(name, oldVal, newVal) {

        // console.log('attributeChangeCalback:', name, oldVal, newVal);
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
        this.removeAttribute('att_uuid');
        if (this.getAttribute('mode') !== 'config') {
            this.setAttribute('att_uuid', uuidv4());
        }

        shadowRoot.innerHTML = _html;
        let css = document.createElement('style')
        css.innerHTML = _css;
        shadowRoot.insertBefore(css, shadowRoot.firstElementChild);
        // There are three modes "Input" or null mode as default -which shoud be used for input data, "config" mode used for setting attribues such as -label- -placeholder- -name- ...etc
        const template = (this.getAttribute('mode') == 'config') ? shadowRoot.querySelector("#attPanel") : shadowRoot.querySelector("#main");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        if (this.getAttribute('mode') == 'config') {
            let bnts = shadowRoot.querySelectorAll('[comp-role = "close"]').forEach(bnt => {
                bnt.addEventListener('click', () => {
                    this.dispatchEvent(new CustomEvent('_close', {
                        detail: {
                            'name': 'chipl'
                        }
                    }));
                })
            })
        };
        this.addEventListener('click', (evt) => {
            if (this.hasAttribute('noclick') || evt.path[0].tagName == "LABEL") {
                return;
            }
            // console.log('evt', evt, evt.path[0].tagName );
            this.dispatchEvent(new CustomEvent('_click', {
                detail: {
                    elem: this
                },
                bubbles: false
            }));
            if (this.attPanel) {
                this.attPanel.refElem = this;
                this.attPanel.updateAttPanel(this.C_DATA);
            }

        });

    }
    // Acting as Attribute Panel for other intances
    mountingAttPanel() {
        let data = {};
        this.shadowRoot.querySelectorAll('[att-prop]').forEach(el => {

            el.addEventListener('change', () => {
                console.log('Im value here', el.value);
                data[el.getAttribute('att-prop')] = el.value;

                // 2. Second way, update directly to referenceElem                
                if (this.refElem) {
                    this.refElem.updateInstance(data);
                }
                if (el.getAttribute('att-prop') == 'name') {
                    this.shadowRoot.querySelector('[att-title]').innerHTML = data['name'];
                }
            })
        });
        // specify only for inputRadio
        //         
        let oldElement = this.shadowRoot.querySelector('input-tag');
        console.log('old Element', oldElement);
        let newElement = oldElement.cloneNode(true);
        oldElement.parentNode.replaceChild(newElement, oldElement);

        newElement.addEventListener('_change', (evt) => {
            console.log('form input-tag change event', evt.detail.value);
            data["value"] = evt.detail.value;
            let oldVal = [];
            if (this.refElem) {
                if (this.refElem.C_DATA && this.refElem.C_DATA['value']) {
                    oldVal = Object.assign([], [], this.refElem.C_DATA['value']);
                }
                // update DATA
                this.refElem.updateInstance(data);
                // update GUI ony
                this.refElem.updateGUI(oldVal, evt.detail.value);

            }
        });
        // 

    };
    // 
    updateGUI(oldValue, newValue) {
        // 
        function arrayDiff(a, b) {
            return [
                ...a.filter(x => b.indexOf(x) === -1),
                ...b.filter(x => a.indexOf(x) === -1)
            ];
        };        
        let diffItems = arrayDiff(oldValue, newValue);        

        let optionHolder = this.shadowRoot.querySelector('[component-role="optionHolder"]');
        diffItems.map(item => {
            if (oldValue.indexOf(item) == -1) {
                // New Item
                let elem = this.shadowRoot.querySelector('#item');
                let elemInstance = elem.content.cloneNode(true);                
                let input = elemInstance.querySelector('input');
                // input.setAttribute('name', item);
                input.setAttribute('value', item);
                input.setAttribute('id', item);
                if (this.C_DATA && this.C_DATA['name']){
                    input.setAttribute('name', this.C_DATA['name']);
                }                

                let label = elemInstance.querySelector('label');
                label.setAttribute('for', item);
                label.innerHTML = item;
                optionHolder.appendChild(elemInstance);
            }
            if (newValue.indexOf(item) == -1) {
                // Removed Item                
                let e = optionHolder.querySelector(`[value='${item}']`).parentElement;                
                console.log('need remove item', e);
                e.parentElement.removeChild(e);

            }
        })

    }
    //
    // update Information for each element in webcomponent
    updateInstance(data) {
        if (data) {
            Object.keys(data).forEach((k) => {
                let elem = this.shadowRoot.querySelector(`[att-prop="${k}"]`);
                if (elem && elem.innerHTML) {
                    elem.innerHTML = data[k];
                }
                if (elem && elem.placeholder && k == "placeholder") {
                    elem.placeholder = data[k];
                }
                // 
                // for this control only
                let inputs = this.shadowRoot.querySelectorAll('input');
                if (this.C_DATA && this.C_DATA['name']){
                    inputs.forEach(i=>{                        
                        i.setAttribute('name', this.C_DATA['name']);
                    });
                }
                
            });
            let C_DATA = (this.C_DATA) ? this.C_DATA : {};
            this.C_DATA = Object.assign({}, C_DATA, data);
            this.setAttribute('c-data', true);
        }
    };
    updateAttPanel(data) {
        if (data) {
            Object.keys(data).forEach((k) => {
                if ('value' == k) {
                    let inputTag = this.shadowRoot.querySelector('input-tag');
                    data['value'].map(item => {
                        inputTag.createTag(item, true);
                    });

                } else {
                    this.shadowRoot.querySelector(`[att-prop="${k}"]`).value = data[k];
                }

                if (k == 'name') {
                    this.shadowRoot.querySelector('[att-title]').innerHTML = data['name'];                    
                }
            })
        }
    };
}

customElements.define("input-radio", inputRadio);