const contener = `<div class="container-fluid">
...
</div>`;

const _commands = {
    test : function(el, container){
        console.log("command:", el.getAttribute('com-act'), container);
    }
};

export default _commands;