
// <template id = "main">
//         <div>
//             <!--Panel-->
//             <div class="card text-center"">
//                 <div class=" card-header success-color white-text">
//                 Featured
//             </div>
//             <div class="card-body">
//                 <h4 class="card-title">Special title treatment</h4>
//                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                 <a class="btn btn-success btn-sm">Go somewhere</a>
//             </div>
//             <div class="card-footer text-muted success-color white-text">
//                 <p class="mb-0">2 days ago</p>
//             </div>
//         </div>
// </template>
// 
const _html = ` 
<template id = "main">
             <div class="card text-center"">
                 <div class=" card-header success-color white-text" style = "font-size: 1rem;">
                 Bootstrap4 Component
                 <button type="button" class="close" aria-label="Close" comp-role="close">
                    <span aria-hidden="true">×</span>
                </button>
             </div>
<div id="exTab2" class="card" >
        <ul class="nav nav-tabs">
            <li class="active">
                <a link="1" data-toggle="tab">Overview</a>
            </li>
            <li><a link="2" data-toggle="tab">Without clearfix</a>
            </li>
            <li><a link="3" data-toggle="tab">Solution</a>
            </li>
        </ul>

        <div class="tab-content ">
            <div class="tab-pane active" link="1" tab>
                <h3>Standard tab panel created on bootstrap using nav-tabs</h3>
            </div>
            <div class="tab-pane" link="2" tab>
                <h3>Notice the gap between the content and tab after applying a background color</h3>
            </div>
            <div class="tab-pane" link="3" tab>
                <h3>add clearfix to tab-content (see the css)</h3>
            </div>
        </div>
    </div>
</template>
`
export default _html;
