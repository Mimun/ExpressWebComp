//var currentDocument = document.currentScript.ownerDocument;
import _html from "./pop-cover.js";
import Popper from "/node_modules/popper.js/dist/esm/popper.min.js";
import _css from "./popCover.css.js";

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
        
        let css = document.createElement('style')
        css.innerHTML = _css;
        shadowRoot.insertBefore(css, shadowRoot.firstElementChild);

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
                // this.shadowRoot.querySelector('#cover').style.transition = 'transform .9s linear';
                this.shadowRoot.querySelector('#cover').style.display = 'block';
            } else {
                // this.shadowRoot.querySelector('#cover').style.transition = 'all .3s linear';
                this.shadowRoot.querySelector('#cover').style.display = 'none';
                
            }
        }
        
    };

    updateElements(refElem, elem) {
        if (!elem instanceof HTMLElement) {
            return;
        }
        console.log("elem type: --------------------------", typeof elem);
        console.log(elem);
        
        
        if (this._popper) {
            delete this._popper;
        }
        
        this.appendChild(elem);
        elem.setAttribute('slot', 'main');
        let self = this;
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
            onCreate: function (data) {
                console.log("from poper onCreate with data object", data.placement, self.getAttribute('visible'));                
                if (self.getAttribute('visible') == "true"){
                    self.dispatchEvent(new CustomEvent("_update", {
                        detail: {
                            placement: data.placement,
                        }
                    }))
                }                
            
            }
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
    //    

}

customElements.define("pop-cover", popCover);