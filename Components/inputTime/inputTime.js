
//var currentDocument = document.currentScript.ownerDocument;
import _html from "./input-time.js";
import _css from "./inputTime.css.js";
import uuidv4 from "../../Libs/uuid.js"

class inputTime extends HTMLElement {    constructor() {
    super();

}
connectedCallback() {
    this.render();
    this.mountingAttPanel();
    // console.log('uuid:', uuidv4());
    if(this.C_DATA){
        this.updateInstance(this.C_DATA)
    }
    
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

    this.removeAttribute('att_uuid');
    if (this.getAttribute('mode') !== 'config'){
        this.setAttribute('att_uuid', uuidv4());    
    }    
    
    const shadowRoot = this.attachShadow({
        mode: 'open'
    });

    // let id = UUID .generate(); console.log("uuid", id);
    this.setAttribute('att_uuid', uuidv4());

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
    this.shadowRoot.querySelectorAll('[att-prop]').forEach(el => {

        el.addEventListener('change', () => {
            let data = {};
            console.log('Im here', el.value);
            data[el.getAttribute('att-prop')] = el.value;
            // 2. Second way, update directly to referenceElem
            if (this.refElem) {
                this.refElem.updateInstance(data);
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
}

customElements.define("input-time", inputTime);
