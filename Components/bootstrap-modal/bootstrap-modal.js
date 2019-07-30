// var currentDocument = document.currentScript.ownerDocument;
import _html from "./bootstrapModal.js"

class Bootstrap_Modal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = _html;

        const template = shadowRoot.querySelector("#bootstrap-modal").content;
        console.log("template:", template);
        const title = template.querySelector('[title]');
        title.innerHTML = this.title;

        if (this.width) {
            let contentWidth = template.querySelector('[component-width]');

            switch (this.width) {
                case "large":
                    contentWidth.classList.add("largeModal");
                    break;
                case "full":
                    contentWidth.classList.add("fullModal");
                    break;
                default:
                    contentWidth.style.maxWidth = this.width;
            }
        }
        // setting width

        const instance = template.cloneNode(true);
        // adding instance first and then adding event listener later by query shadowRoot
        shadowRoot.appendChild(instance);

        let bnts = shadowRoot.querySelectorAll('[bnt]');
        let wrapper = shadowRoot.querySelector('wrapper')
        // console.log("buttons:", bnts);
        this.removeAttribute("visible");
        bnts.forEach(bnt => {
            console.log('bnt', bnt, bnt instanceof HTMLElement);
            bnt.addEventListener('click', event => {

                var bntAtt = event.target.getAttribute('bnt');
                console.log("onclick:", event.target, bntAtt);
                switch (bntAtt) {
                    case "ok":
                        this.removeAttribute("visible");
                        this.dispatchEvent(new CustomEvent("OK"));
                        break;
                    case "cancel":
                        this.removeAttribute("visible");
                        this.dispatchEvent(new CustomEvent("CANCEL"));
                        break;
                }
            })
        })
    }

    static get observedAttributes() {
        return ["visible", "title"];
    }

    attributeChangedCallback(name, oldVal, newVal) {

        // visible property
        if (name === "visible" && this.shadowRoot) {
            let backdrop = this.shadowRoot.querySelector('[backdrop]');
            if (newVal === null) {
                // this.shadowRoot.querySelector('[wrapper]').classList.remove("visible");                
                this.shadowRoot.querySelector('[wrapper]').classList.remove("visible");                
                this.shadowRoot.querySelector('[wrapper]').classList.add("invisible");                
                // this.shadowRoot.querySelector('[wrapper]').style.display = "none";
                // backdrop.classList.remove ("show");
                backdrop.style.display = "none";
            } else {
                 this.shadowRoot.querySelector('[wrapper]').classList.add("visible");
                 this.shadowRoot.querySelector('[wrapper]').classList.remove("invisible");                
                // this.shadowRoot.querySelector('[wrapper]').style.display = "block";
                // backdrop.classList.add ("show");
                backdrop.removeAttribute('style');
            }
        }
        // width property
        // if (name === "width" && this.shadowRoot) {
        //     console.log('in width property');
        // }
    }
    // get set properties
    get title() {
        return this.getAttribute("title");
    }
    set title(value) {
        this.setAttribute("title", value);
    }

    get visible() {
        return this.hasAttribute("visible");
    }

    set visible(value) {
        if (value) {
            this.setAttribute("visible", "");
        } else {
            this.removeAttribute("visible");
        }
    }

    get width() {
        return this.getAttribute('width');
    }
    set width(value) {
        if (value) {
            this.setAttribute('width', value);
        } else {
            this.removeAttribute('width');
        }
    }
}

customElements.define('bootstrap-modal', Bootstrap_Modal);