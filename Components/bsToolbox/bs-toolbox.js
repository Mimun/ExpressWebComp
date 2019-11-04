
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
                <a link="1" data-toggle="tab">Basic Components</a>
            </li>
            <li><a link="2" data-toggle="tab">Advanced </a>
            </li>
            <li class="justify-content-center align-self-center">
            <span ></span><div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample">
                        <label class="custom-control-label" for="defaultInline1">After</label>
                      </div>
                      
                      <!-- Default inline 2-->
                      <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" class="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample">
                        <label class="custom-control-label" for="defaultInline2">Inside</label>
                      </div>                      
                      
            </span>
            </li>
        </ul>

        <div class="tab-content ">
            <div class="tab-pane active" link="1" tab>                
                <div class="row" style ="margin: 0px">
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/container.svg); background-repeat: no-repeat;"> Container
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/grid_row.svg); background-repeat: no-repeat;"> Grid Row
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/button.svg); background-repeat: no-repeat;"> HTML Button
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/button_group.svg); background-repeat: no-repeat;"> Button Group
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/button_toolbar.svg); background-repeat: no-repeat;"> Button Toolbar
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/heading.svg); background-repeat: no-repeat;"> Heading
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/image.svg); background-repeat: no-repeat;"> Image
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/jumbotron.svg); background-repeat: no-repeat;"> Jumbotron
                    </div>
                    <!--  -->
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/alert.svg); background-repeat: no-repeat;"> Alert
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/panel.svg); background-repeat: no-repeat;"> Card
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/list_group.svg); background-repeat: no-repeat;"> List Group
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/hr.svg); background-repeat: no-repeat;"> Horizontal Rule
                    </div>
                    <!--  -->
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/badge.svg); background-repeat: no-repeat;"> Badge
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/progressbar.svg); background-repeat: no-repeat;"> Progress Bar
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/navbar.svg); background-repeat: no-repeat;"> Nav Bar
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/breadcrumbs.svg); background-repeat: no-repeat;"> Breadcrumbs
                    </div>
                    <!--  -->                    
                    <!--  -->
                    
                </div>
            </div>
            <div class="tab-pane" link="2" tab>
                <div class="row" style ="margin: 0px">                                        
                    <!--  -->
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/pagination.svg); background-repeat: no-repeat;"> Pagination
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/form.svg); background-repeat: no-repeat;"> Form
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/text_input.svg); background-repeat: no-repeat;"> Text Input
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/text_area.svg); background-repeat: no-repeat;"> Textarea
                    </div>
                    <!--  -->
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/select_input.svg); background-repeat: no-repeat;"> Select
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/text_input.svg); background-repeat: no-repeat;"> Input Group
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/checkbox.svg); background-repeat: no-repeat;"> Checkbox
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/radio.svg); background-repeat: no-repeat;"> Radio Button
                    </div>
                    <!--  -->
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/table.svg); background-repeat: no-repeat;"> Table
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/paragraph.svg); background-repeat: no-repeat;">Paragraph
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/link.svg); background-repeat: no-repeat;"> Link
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/video.svg); background-repeat: no-repeat;"> Video
                    </div>
                    <!--  -->
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/button.svg); background-repeat: no-repeat;"> HTML Button
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/map.svg); background-repeat: no-repeat;"> Map
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/video.svg); background-repeat: no-repeat;"> Video
                    </div>
                    <div data-type="" style="background-image: url(/Components/bsToolbox/Images/chart.svg); background-repeat: no-repeat;"> Chart
                    </div>
                </div>
            </div>
            <div class="tab-pane" link="3" tab>
                <h3>add clearfix to tab-content (see the css)</h3>
            </div>
        </div>
    </div>
</template>
`
export default _html;
