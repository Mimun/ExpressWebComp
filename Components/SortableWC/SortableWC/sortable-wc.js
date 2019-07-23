
const _html = ` <template id="sortable-wc-template">
<link rel="stylesheet" href="SortableWC/SortableWC.css">
  <div class = "nested-1">
    <span ></span>
        <sortable-wc-template >I am a SortableWC.js </sortable-wc-template> - webcomponent
    <span class=""></span>
    <slot>
    </slot>
  </div>
</template>
`


// const _html = `
// <link rel="stylesheet" href="SortableWC/SortableWC.css">
//   <h3 class="">
//     <span class=""></span>
//         <sortable-wc-template>I am a SortableWC.js </sortable-wc-template> - webcomponent
//     <span class=""></span>
//     <slot name = >
//     </slot>
//   </h3>
// `


export default _html;
