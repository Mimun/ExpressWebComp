const css = `
<template id = "css">
    <style>
    .interim {                
        background-color: whitesmoke;
        transition: all 0.8s ease 0s;
        border: 1px solid rgb(114, 127, 150);
    }
    
    </style>    
</template>
`;

const webparts = `
    
    <template id = "webparts">
                <div class="container-fluid interim" role = "container" style = "min-height: 150px;" >
                        Container 
                </div>
    </template>    
    ${css}
`;

export default webparts;