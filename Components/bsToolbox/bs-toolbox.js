
const basic = `<div com-act="container" style="background-image: url(/Components/bsToolbox/Images/container.svg); background-repeat: no-repeat;"> Container
</div>
<div com-act="grid_row" style="background-image: url(/Components/bsToolbox/Images/grid_row.svg); background-repeat: no-repeat;"> Grid Row
</div>
<div com-act="button" style="background-image: url(/Components/bsToolbox/Images/button.svg); background-repeat: no-repeat;"> HTML Button
</div>
<div com-act="button_group" style="background-image: url(/Components/bsToolbox/Images/button_group.svg); background-repeat: no-repeat;"> Button Group
</div>
<div com-act="button_toolbar" style="background-image: url(/Components/bsToolbox/Images/button_toolbar.svg); background-repeat: no-repeat;"> Button Toolbar
</div>
<div com-act="heading" style="background-image: url(/Components/bsToolbox/Images/heading.svg); background-repeat: no-repeat;"> Heading
</div>
<div com-act="image" style="background-image: url(/Components/bsToolbox/Images/image.svg); background-repeat: no-repeat;"> Image
</div>
<div com-act="jumbotron" style="background-image: url(/Components/bsToolbox/Images/jumbotron.svg); background-repeat: no-repeat;"> Jumbotron
</div>
<!--  -->
<div com-act="alert" style="background-image: url(/Components/bsToolbox/Images/alert.svg); background-repeat: no-repeat;"> Alert
</div>
<div com-act="card" style="background-image: url(/Components/bsToolbox/Images/panel.svg); background-repeat: no-repeat;"> Card
</div>
<div com-act="list_group" style="background-image: url(/Components/bsToolbox/Images/list_group.svg); background-repeat: no-repeat;"> List Group
</div>
<div com-act="hr" style="background-image: url(/Components/bsToolbox/Images/hr.svg); background-repeat: no-repeat;"> Horizontal Rule
</div>
<!--  -->
<div com-act="badge" style="background-image: url(/Components/bsToolbox/Images/badge.svg); background-repeat: no-repeat;"> Badge
</div>
<div com-act="progressbar" style="background-image: url(/Components/bsToolbox/Images/progressbar.svg); background-repeat: no-repeat;"> Progress Bar
</div>
<div com-act="navbar" style="background-image: url(/Components/bsToolbox/Images/navbar.svg); background-repeat: no-repeat;"> Nav Bar
</div>
<div com-act="breadcrumbs" style="background-image: url(/Components/bsToolbox/Images/breadcrumbs.svg); background-repeat: no-repeat;"> Breadcrumbs
</div>
<!--  -->                    
<!--  -->
`;
const advance = `<!--  -->
<div com-act="pagination" style="background-image: url(/Components/bsToolbox/Images/pagination.svg); background-repeat: no-repeat;"> Pagination
</div>
<div com-act="form" style="background-image: url(/Components/bsToolbox/Images/form.svg); background-repeat: no-repeat;"> Form
</div>
<div com-act="text_input" style="background-image: url(/Components/bsToolbox/Images/text_input.svg); background-repeat: no-repeat;"> Text Input
</div>
<div com-act="text_area" style="background-image: url(/Components/bsToolbox/Images/text_area.svg); background-repeat: no-repeat;"> Textarea
</div>
<!--  -->
<div com-act="select_input" style="background-image: url(/Components/bsToolbox/Images/select_input.svg); background-repeat: no-repeat;"> Select
</div>
<div com-act="input_group" style="background-image: url(/Components/bsToolbox/Images/text_input.svg); background-repeat: no-repeat;"> Input Group
</div>
<div com-act="checkbox" style="background-image: url(/Components/bsToolbox/Images/checkbox.svg); background-repeat: no-repeat;"> Checkbox
</div>
<div com-act="radio" style="background-image: url(/Components/bsToolbox/Images/radio.svg); background-repeat: no-repeat;"> Radio Button
</div>
<!--  -->
<div com-act="table" style="background-image: url(/Components/bsToolbox/Images/table.svg); background-repeat: no-repeat;"> Table
</div>
<div com-act="paragraph" style="background-image: url(/Components/bsToolbox/Images/paragraph.svg); background-repeat: no-repeat;">Paragraph
</div>
<div com-act="link" style="background-image: url(/Components/bsToolbox/Images/link.svg); background-repeat: no-repeat;"> Link
</div>
<div com-act="video" style="background-image: url(/Components/bsToolbox/Images/video.svg); background-repeat: no-repeat;"> Video
</div>
<!--  -->
<div com-act="button" style="background-image: url(/Components/bsToolbox/Images/button.svg); background-repeat: no-repeat;"> HTML Button
</div>
<div com-act="map" style="background-image: url(/Components/bsToolbox/Images/map.svg); background-repeat: no-repeat;"> Map
</div>
<div com-act="video" style="background-image: url(/Components/bsToolbox/Images/video.svg); background-repeat: no-repeat;"> Video
</div>
<div com-act="chart" style="background-image: url(/Components/bsToolbox/Images/chart.svg); background-repeat: no-repeat;"> Chart
</div>`
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
                <div class="row" style ="margin: 0px" role = "basic">
                    ${basic}
                </div>
            </div>
            <div class="tab-pane" link="2" tab>
                <div class="row" style ="margin: 0px" role = "advance">                                        
                    ${advance}
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
