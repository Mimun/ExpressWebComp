//var currentDocument = document.currentScript.ownerDocument;
import _html from "./sortable-wc.js";
import * as SortableJS from "../node_modules/sortablejs/Sortable.js"


class SortableWC extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (event) => {
            // Do something here
        }, false)
    }
    connectedCallback() {
        var options = {
            group: 'default',
            animation: 100,
            dragOutRemove: true,
            bubbles: true, 
        };
        if (this.hasAttribute('options')){
            options = JSON.parse(this.getAttribute('options'));
        }        
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = _html;
        const template = shadowRoot.querySelector("#sortable-wc-template");
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        var externalObj = this.getAttribute('externalObj');
        var that = this;

        var events = [
            'onChoose',
            'onStart',
            'onEnd',
            'onAdd',
            'onUpdate',
            'onSort',
            'onRemove'
        ].forEach(function (name) {
                options[name] = function (...params) {
                    // const eventHandler = options[name];
                    // console.log('external params: ', ...params);
                    // var evt = params[0];
                    // console.log({
                    //     'event': name,
                    //     'this': this,
                    //     'item': evt.item,
                    //     'from': evt.from,
                    //     'to': evt.to,
                    //     "originalEvent": evt.originalEvent,
                    //     "type": evt.type
                    // });
                    // that.dispatchEvent( new CustomEvent(name, {...params, bubbles:true}));                    
                    // that.dispatchEvent( new CustomEvent(name, {...params, bubbles:true}));      
                    that.dispatchEvent( new CustomEvent(name, ...params));      
                };
            }        
        );
        // this.setAttribute('options', options);
        this.sortable = Sortable.create(this, options);       
        console.log('from constructor-----------------');
        this.dispatchEvent(new CustomEvent('wcloaded'));
        

    }

    static get observedAttributes() {
        return ['name', 'options', 'func'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log('attributeChangeCalback:', name, oldVal, JSON.parse(newVal), this.shadowRoot);
        console.log('attributeChangedCallback -----------------');
        if (name === "options" && this.shadowRoot) {
            if(this.sortable){
                this.sortable.destroy();
                delete this.sortable;                
                // console.log('this.sortable', this.sortable);
            }
            const options = JSON.parse(newVal);
            this.sortable = Sortable.create(this, options);  
            // // console.table("new sortable:", this.sortable);                
            // this.updateOptions_toSortable(JSON.parse(newVal));                     
        }   
        
    }

    
    get name() {
        return this.hasAttribute('name');
    }
    set name(value) {
        this.setAttribute('name',value);
    }

    get options() {
        return this.hasAttribute('options');
    }
    set options(value) {
        this.setAttribute('options', value);
    }

    updateOptions_toSortable(...params){
        var a, b;
        if(this.sortable){
            this.sortable.destroy();
            delete this.sortable;                
            // console.log('this.sortable', this.sortable);
        }        
        this.sortable = Sortable.create(this, params);  
        console.log('this', this);
        // console.table("new sortable:", this.sortable);            
    }       

}

customElements.define("sortable-wc", SortableWC);