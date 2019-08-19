//var currentDocument = document.currentScript.ownerDocument;
import _html from "./pop-cover.js";
import  Popper from "../../node_modules/popper.js/dist/esm/popper.js";



class popperCover extends HTMLElement {
    constructor() {
        super();        
        

    }
    connectedCallback() {
        this.render();                        
    }

    static get observedAttributes() {
        return ['title', 'wcname'];
    }
    // 
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
    // 
    updateSlot(elem) {
        if (!elem instanceof HTMLElement || elem instanceof popperCover) {
            return;
        }
        elem.setAttribute('slot', 'docker');
        this.appendChild(elem);        
        this.updateRef(this.refNode);
        // let new_element = this.refNode;        
        
    };
    //
    updateRef(new_element){
        new_element.attrPanel = new Popper(new_element, this.shadowRoot.querySelector('.popper'), {
            placement: 'right',
            modifiers: {
                flip: {
                    behavior: ['left', 'bottom', 'top']
                },
                preventOverflow: {
                    // boundariesElement: container,
                },
                arrow: { enabled: true }
            },
            onCreate: function (data) {
                console.log('onCreate:', data, this);
                document.querySelectorAll('pop-cover').forEach(function (elem) {                                                
                    if (elem) {
                        // elem.shadowRoot.querySelector('.popper').style.display = 'none';
                        elem.close();
                    }
                })

            }
        });
        new_element.addEventListener('wc_click', function (el) {
            new_element.attrPanel.update();
            // close all other popper
            document.querySelectorAll('pop-cover').forEach(function (elem) {
                if (elem && elem.refNode !== new_element) {
                    // elem.shadowRoot.querySelector('.popper').style.display = 'none';
                    elem.close();
                }
            })
            // toggle popper of (this) new_element
            new_element.attrPanel.popper.style.display = new_element.attrPanel.popper.style.display ==
                'none' ? 'block' : 'none'

        }, false);
    }
    // 
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
        this.dispatchEvent(new CustomEvent('loadComplete'));
        var externalObj = this.getAttribute('externalObj');
        
        
        shadowRoot.querySelector("[comp-role = 'close']").addEventListener('click', ()=>{
            this.close()  ;
        });
    }
    close(){
        this.dispatchEvent(new CustomEvent('wc_close'));        
        this.shadowRoot.querySelector('.popper').style.display = "none";
    }

}
customElements.define("pop-cover", popperCover);