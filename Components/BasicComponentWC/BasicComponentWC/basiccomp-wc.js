const _html = ` <template id="basiccomp-wc-template">
<!--link rel="stylesheet" href="../BasicComponentWC/BasicComponentWC/BasicComponentWC.css"-->
<link rel="stylesheet" href="../../Components/BasicComponentWC/BasicComponentWC/BasicComponentWC.css">
<div class="row" >
<div class="col-md-3 col-lg-3"><label data-controltype="label">Text Input</label></div>
<div class="col-md-9 col-lg-9" component-role="inpuCover">
    <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="placeholder"
        data-controltype="text"><span class="help-block col-md-12 col-lg-12"
        data-controltype="describe">Attribute Description</span></div>
</div>
</template>
<template id = "basiccomp-wc-attPanel">
<link rel="stylesheet" href="../BasicComponentWC/BasicComponentWC/BasicComponentWC.css">
<link href="../../node_modules/mdbootstrap/css/mdb.min.css" rel="stylesheet">

<div class="row" style="margin-top: 10px;">
        <div class="col-md-3 col-lg-3"><label>ID/Name</label></div>
        <div class="col-md-9 col-lg-9">
            <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="placeholder" att-prop="name">
            <span class="help-block col-md-12 col-lg-12">Name's attribute
            </span>
        </div>
    </div>
    <div class="row" style="margin-top: 10px;">
        <div class="col-md-3 col-lg-3"><label>Label</label></div>
        <div class="col-md-9 col-lg-9">
            <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="placeholder" att-prop="label">
            <span class="help-block col-md-12 col-lg-12">Attribute Displaying Name
            </span>
        </div>
    </div>
    <div class="row" style="margin-top: 10px;">
        <div class="col-md-3 col-lg-3"><label>Placeholder</label></div>
        <div class="col-md-9 col-lg-9">
            <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="placeholder"
                att-prop="placeholder">
            <span class="help-block col-md-12 col-lg-12">Attribute Default Value
            </span>
        </div>
    </div>

    <div class="row" style="margin-top: 10px;">
        <div class="col-md-3 col-lg-3"><label>Description</label></div>
        <div class="col-md-9 col-lg-9">
            <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="description"
                att-prop="description">
            <span class="help-block col-md-12 col-lg-12">Attribute Description
            </span>
        </div>
    </div>
    <div class="container">
        <div class="col text-center">
            <button type="button" class="btn btn-primary" id='bntSample'>Save and Close</button>
        </div>
    </div>


</template>

`
export default _html;