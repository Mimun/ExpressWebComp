let actionMap = {
    // 'drag': (e) => {
    //     e.stopPropagation();
    //     console.log('drag');

    // },        
    'parent': (e) => {
        e.stopPropagation();
        console.log('parent');
        let handler = actionMap['handler'];
        if (handler.targetElem.parentElement) {
            handler.updateTargetElem(handler.targetElem.parentElement);
        }
    },
    'movetoparent': (e) => {
        e.stopPropagation();
        console.log('movetoparent');
        let handler = actionMap['handler'];
    },
    'child': (e) => {
        e.stopPropagation();              
        let handler = actionMap['handler'];
        let firstChild = getFirstChild(handler.targetElem.firstElementChild);
        if (firstChild) {            
            handler.updateTargetElem(firstChild);
        }
        function getFirstChild(elem){
            if(elem && elem.hasAttribute('noclick') && elem.nextElementSibling){
                return getFirstChild(elem.nextElementSibling);                
            }
            return elem;
        }
    },
    'up': (e) => {
        e.stopPropagation();
        console.log('up');
        let handler = actionMap['handler'];
        if (handler.targetElem.previousElementSibling) {
            handler.targetElem.parentElement.insertBefore(handler.targetElem, handler.targetElem.previousElementSibling);
            handler.updateTargetElem(handler.targetElem);
        }
    },
    'down': (e) => {
        e.stopPropagation();
        console.log('down');
        let handler = actionMap['handler'];
        if (handler.targetElem.nextElementSibling) {
            handler.targetElem.parentElement.insertBefore(handler.targetElem, handler.targetElem.nextElementSibling.nextElementSibling);
            handler.updateTargetElem(handler.targetElem);
        }
    },
    'clone': (e) => {
        e.stopPropagation();
        console.log('clone');
        let handler = actionMap['handler'];
        if (handler.targetElem.parentElement) {

            // old targetElem
            if (handler.targetElem) {
                handler.targetElem.removeAttribute('style');
                if (handler.storeStyle) {
                    handler.targetElem.setAttribute('style', handler.storeStyle);
                }
                if (!handler._contentEditable) {
                    handler.targetElem.removeAttribute('contentEditable');
                }
            }
            let cloneElem = handler.targetElem.cloneNode(true);
            
            handler.targetElem.parentElement.insertBefore(cloneElem, handler.targetElem.nextElementSibling)
            handler.updateTargetElem(cloneElem);
        }
    },
    'remove': (e) => {
        e.stopPropagation();        
        let handler = actionMap['handler'];
        let parentElem = handler.targetElem.parentElement
        if (handler.targetElem.parentElement) {            
            handler.targetElem.parentElement.removeChild(handler.targetElem);               
            handler.updateTargetElem(parentElem);
            handler.setAttribute('visible', 'false');
        }
    },
    'add': (e) => {
        let handler = actionMap['handler'];        
        e.stopPropagation();
        handler.dispatchEvent(new CustomEvent('_add', {
            detail: {
                // sourceElem: e.path[0],
                sourceElem: e.currentTarget
            }
        }));
        // console.log("add", "handler", handler, e.path[0]);
    },    

};

export default actionMap;