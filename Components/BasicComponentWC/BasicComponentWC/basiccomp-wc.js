const _html = ` <template id="basiccomp-wc-template">
<link rel="stylesheet" href="../BasicComponentWC/BasicComponentWC/BasicComponentWC.css">
<div class="row">
<div class="col-md-3 col-lg-3"><label data-controltype="label">Text Input</label></div>
<div class="col-md-9 col-lg-9" component-role="inpuCover">
    <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="placeholder"
        data-controltype="text"><span class="help-block col-md-12 col-lg-12"
        data-controltype="describe">Describe attribute</span></div>
</div>
</template>
<template id = "basiccomp-wc-attPanel">
<link rel="stylesheet" href="../BasicComponentWC/BasicComponentWC/BasicComponentWC.css">
<div class="row">
<div class="col-md-3 col-lg-3"><label data-controltype="label">Text Input</label></div>
<div class="col-md-9 col-lg-9" component-role="inpuCover">
    <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="placeholder"
        data-controltype="text">
    <span class="help-block col-md-12 col-lg-12" data-controltype="describe">Describe attribute
    </span>
</div>
</div>
</hr>
<div class="row">
<div class="col-md-3 col-lg-3"><label data-controltype="label">Text Input</label></div>
<div class="col-md-9 col-lg-9" component-role="inpuCover">
    <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="placeholder"
        data-controltype="text">
    <span class="help-block col-md-12 col-lg-12" data-controltype="describe">Describe attribute
    </span>
</div>
</div>


</template>

`
export default _html;