
const _html = `
<template id="main">
<!--link rel="stylesheet" href="/Components/popCover/popCover.css"-->
<div id = 'cover' class = "popper "  style="padding: 0%; display: none; width: 45%;z-index: 1300;">   
        <slot name='main' >

        </slot>    
    <div x-arrow class="popper__arrow"></div>
</div>
</template>
`
export default _html;
