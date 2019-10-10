//var currentDocument = document.currentScript.ownerDocument;
import _html from "./input-tag.js";
import _css from "./inputTags.css.js";
import uuidv4 from "../../Libs/uuid.js"

class inputTags extends HTMLElement {
    constructor() {
        super();        
    }
    connectedCallback() {
        this.render();
        if (this.getAttribute('mode') == 'config'){
            this.mountingAttPanel();        
        }        
    }

    static get observedAttributes() {
        return ['label', 'placeholder', 'description','name'];
    }

    attributeChangedCallback(name, oldVal, newVal) {

        // console.log('attributeChangeCalback:', name, oldVal, newVal);
        customElements.whenDefined('input-tag').then(()=>{
            if (this.shadowRoot){
                let data = {};
                data[name] = newVal;
                this.updateInstance(data);
            }
        });

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
        this.addEventListener('click', () => {            
            if (this.hasAttribute('noclick')) {
                return;
            }
            this.shadowRoot.querySelector('[component-role = "tagInput"]').focus();
            // this.shadowRoot.querySelector('[component-role="tagHandler"]').focus();
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

        // 
        if (this.getAttribute('mode') !== 'config') {
            let tagInput = this.shadowRoot.querySelector('[component-role = "tagInput"]');
            // console.log("TagInput", tagInput);
            tagInput.addEventListener('keydown', (evt) => {
                if (evt.keyCode == 13 || evt.keyCode == 9) {
                    this.createTag(tagInput.value);
                }
            })
        };


    }
    // Acting as Attribute Panel for other intances
    mountingAttPanel() {
        this.shadowRoot.querySelectorAll('[att-prop]').forEach(el => {

            el.addEventListener('change', () => {
                let data = {};
                console.log('Im here', el.value);
                data[el.getAttribute('att-prop')] = el.value;
                // 2. Second way, update directly to referenceElem
                if (this.refElem) {
                    // this.refElem.updateInstance(data);
                    this.refElem.setAttribute(el.getAttribute('att-prop'), el.value);
                }
                if (el.getAttribute('att-prop') == 'name') {
                    this.shadowRoot.querySelector('[att-title]').innerHTML = data['name'];
                }
            })
        })
    };
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
            });
            let C_DATA = (this.C_DATA) ? this.C_DATA : {};
            this.C_DATA = Object.assign({}, C_DATA, data);
            this.setAttribute('c-data', true);
        }
    };
    updateAttPanel(data) {
        if (data) {
            Object.keys(data).forEach((k) => {
                this.shadowRoot.querySelector(`[att-prop="${k}"]`).value = data[k];
                if (k == 'name') {
                    this.shadowRoot.querySelector('[att-title]').innerHTML = data['name'];
                }
            })
        }
    };
    // 
    createTag(data) {

        data = data.trim();
        if (this.hasAttribute('nodup') && this.C_VALUE && this.C_VALUE.indexOf(data) !== -1) {
            return;
        }
        let itemTemplate = this.shadowRoot.querySelector('#item');
        let itemInstance = itemTemplate.content.cloneNode(true);
        let itemContent = itemInstance.querySelector('[component-role = "itemContent"]')
        let itemHandler = this.shadowRoot.querySelector('[component-role = "tagHandler"]');

        itemContent.innerHTML = data;
        let closeBnt = itemInstance.querySelector('[component-role = "closeButton"]')

        let tagInput = this.shadowRoot.querySelector('[component-role = "tagInput"]');
        itemHandler.insertBefore(itemInstance, tagInput);
        tagInput.value = "";
        // this.data

        let self = this;
        let C_VALUE = (this.C_VALUE) ? this.C_VALUE : [];

        C_VALUE.push(data);
        this.C_VALUE = Object.assign([], C_VALUE);
        // Events
        this.dispatchEvent(new CustomEvent('_change', {
            detail: {
                'value': C_VALUE,
            }
        }));

        this.dispatchEvent(new CustomEvent('_add', {
            detail: {
                'value': C_VALUE,
            }
        }));

        closeBnt.addEventListener('click', function (evt) {
            console.log('--------------', this, this.closest('[component-role = "tag-item"]'));
            let tagItem = this.closest('[component-role = "tag-item"]');
            let _data = tagItem.querySelector('[component-role = "itemContent"]').innerHTML
            // console.log('remove', _data);
            tagItem.parentElement.removeChild(tagItem);

            let C_VALUE = (self.C_VALUE) ? self.C_VALUE : [];
            C_VALUE = self.C_VALUE.filter(item => {
                return item != _data;
            })
            // console.log("C_VALUE", C_VALUE);
            self.C_VALUE = Object.assign([], C_VALUE);

            self.dispatchEvent(new CustomEvent('_change', {
                detail: {
                    'value': C_VALUE,
                }
            }));

            self.dispatchEvent(new CustomEvent('_remove', {
                detail: {
                    'value': C_VALUE,
                }
            }));
        });
    };
    // 
}

customElements.define("input-tag", inputTags);