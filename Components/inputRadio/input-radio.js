
const _html = ` 
<template id='main'>
<div class="row">
    <div class="col-md-3 col-lg-3"><label att-prop="label">Radio Input</label></div>
    <div class="col-md-9 col-lg-9" component-role="inputCover">
        <div class="col-md-12 col-lg-12 " component-role="optionHolder">
            <!--  -->
            <div class="custom-control custom-radio">
                <input type="radio" id="contactChoice1" name="contact" value="email"
                    class="custom-control-input">
                <label for="contactChoice1" class="custom-control-label">Email</label>
            </div>
            <!--  -->
            <div class="custom-control custom-radio">
                <input type="radio" id="contactChoice2" name="contact" value="phone"
                    class="custom-control-input">
                <label for="contactChoice2" class="custom-control-label">Phone</label>
            </div>
            <!--  -->
            <div class="custom-control custom-radio">
                <input type="radio" id="contactChoice3" name="contact" value="mail"
                    class="custom-control-input">
                <label for="contactChoice3" class="custom-control-label">Mail</label>
            </div>
            <!--  -->

        </div>
        <span class="help-block col-md-12 col-lg-12" att-prop="description">Attribute Displaying Name</span>
    </div>
</div>
</template>

<template id='item'>
        <div class="custom-control custom-radio">
            <input type="radio" name="" value="" class="custom-control-input">
            <label for="" class="custom-control-label"></label>
        </div>
</template>

<template id='attPanel'>
<div class="row">
    <div class="container card" style="padding: 15px;">
        <h4 class="card-title"><a att-title="">Attribute</a>
            <button type="button" class="close" aria-label="Close" comp-role="close">
                <span aria-hidden="true">×</span>
            </button>
        </h4>
        <div class="row" style="margin-top: 10px;">
            <div class="col-md-3 col-lg-3"><label>ID/Name</label></div>
            <div class="col-md-9 col-lg-9">
                <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="placeholder"
                    att-prop="name">
                <span class="help-block col-md-12 col-lg-12">Name's attribute
                </span>
            </div>
        </div>

        <input-tag nodup placeholder="placeholder" label="Options" , placeholder='options' ,
            description="control options"></input-tag>


        <div class="row" style="margin-top: 10px;">
            <div class="col-md-3 col-lg-3"><label>Label</label></div>
            <div class="col-md-9 col-lg-9">
                <input class="col-md-12 col-lg-12 form-control" type="text" placeholder="placeholder"
                    att-prop="label">
                <span class="help-block col-md-12 col-lg-12">Attribute Displaying Name
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
                <button type="button" class="btn btn-primary" id="bntSample" comp-role="close">Save and
                    Close</button>
            </div>
        </div>
    </div>
</div>
</template>
`
export default _html;
