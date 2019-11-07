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
        // this.observer.observe(this, this.config);
        let slot = this.shadowRoot.querySelector("[name='main']")
        slot.addEventListener('slotchange', e => {
            let nodes = slot.assignedNodes();                    
            this.updateElements(this.refElem, this.firstElementChild);
        });
    }

    static get observedAttributes() {
        return ['visible'];
    }

    attributeChangedCallback(name, oldVal, newVal) {

        // console.log('attributeChangeCalback:', name, oldVal, newVal);
        if (name === "visible" && this.shadowRoot) {
            if (newVal === "true") {
                if (this._popper) {
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
    // Wrapping element into slot "main" of popCover Component
    updateElements(refElem, elem) {
        if (!elem instanceof HTMLElement) {
            return;
        }        
        this.arrow = this.shadowRoot.querySelector('[x-arrow]');
        // console.log('Arrow:', this.arrow);
        this.refElem = refElem;
        elem.setAttribute('slot', 'main');
        elem.setAttribute('noclick', null);
        elem.addEventListener('resize', ()=>{
            console.log("slot has been loaded already", elem);
        });        

        if (this.firstElementChild !== elem) {
            if (this._popper) {
                this._popper.destroy();
                delete this._popper;
            }
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
            this.elemStyle = elem.style;
            elem.style.display = "none";
            this.arrow.style.display = "none";
            this.appendChild(elem);            
            return;
        }
        setTimeout(()=>{
            this.createPoper(refElem);
            elem.style = this.elemStyle;
            this.arrow.style.display = null;
        }, 50);
        
    }
    createPoper(refElem) {
        let self = this;
        this._popper = new Popper(refElem, this.shadowRoot.querySelector('#cover'), {
            placement: this.placement,
            modifiers: {
                flip: {
                    behavior: ['bottom', 'top', 'left', 'right'],
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
                // console.log("from poper onCreate with data object", data.placement, self.getAttribute('visible'));                
                if (self.getAttribute('visible') == "true") {
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
    toggle() {
        if (this.getAttribute("visible") == 'true') {
            this.setAttribute('visible', "false");
        } else {
            this.setAttribute('visible', "true");
        }
    }
    update() {
        if (this._popper) {
            this._popper.update();
        }
    }

    get visible() {
        return this.getAttribute('visible');
    }
    set visible(value) {
        this.setAttribute("visible", value);
    }

    get placement() {
        return this.hasAttribute("placement") ? this.getAttribute('placement') : 'bottom'
    }
    set placement(value) {
        this.setAttribute("placement", value);
    }

    //    
    // Utility Region


    // create an observer instance
    // Ref from https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/
    observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type == "childList") {
                if (mutation.addedNodes[0]) {
                    // console.log("Ready for mutation.addedNodes[0]+++++++++++++++++++++", mutation);
                    // mutation.target.createPoper(mutation.addedNodes[0]);
                }
            }
        });
    });

    // configuration of the observer:
    config = {
        attributes: true,
        childList: true,
        characterData: true
    }

    // pass in the target node, as well as the observer options


}

customElements.define("pop-cover", popCover);