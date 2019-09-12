//var currentDocument = document.currentScript.ownerDocument;
import _html from "./pop-cover.js";
import Popper from "../../node_modules/popper.js/dist/esm/popper.min.js";

class popCover extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false)
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = _html;
        const template = shadowRoot.querySelector("#main");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

    }

    static get observedAttributes() {
        return ['visible'];
    }

    attributeChangedCallback(name, oldVal, newVal) {

        console.log('attributeChangeCalback:', name, oldVal, newVal);
        if (name === "visible" && this.shadowRoot) {
            if (newVal === "true") {
                if(this._popper){
                    this._popper.update();
                }
                this.shadowRoot.querySelector('#cover').style.display = 'block';
            } else {
                this.shadowRoot.querySelector('#cover').style.display = 'none';
            }
        }
    };

    updateElements(refElem, elem) {
        if (!elem instanceof HTMLElement) {
            return;
        }
        elem.setAttribute('slot', 'main');
        
        if (this._popper) {
            delete this._popper;
        }
        
        this.appendChild(elem);
        this._popper = new Popper(refElem, this.shadowRoot.querySelector('#cover'), {
            placement: this.placement,
            modifiers: {
                flip: {
                    // behavior: ['top', 'bottom', 'left', 'right'],
                    enable: true,
                },
                preventOverflow: {
                    // boundariesElement: container,
                },
                arrow: {
                    enabled: true
                }
            },
            onCreate: function (data) {}
        });
    }

    open() {
        this.setAttribute('visible', "true");
    };
    close() {
        this.setAttribute('visible', "false");
    };
    toggle(){
        if(this.getAttribute ("visible") == 'true'){
            this.setAttribute('visible', "false");
        }else{
            this.setAttribute('visible', "true");
        }
    }

    get visible() {
        return this.getAttribute('visible');
    }
    set visible(value) {
        this.setAttribute("visible", value);
    }

    get placement() {
        return this.hasAttribute("placement")?this.getAttribute('placement'):'bottom'
    }
    set placement(value) {
        this.setAttribute("placement", value);
    }

}

customElements.define("pop-cover", popCover);