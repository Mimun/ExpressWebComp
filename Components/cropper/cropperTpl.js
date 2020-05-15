var _html = `<template id="cropper-comp">
    
    <link rel='stylesheet' href='../../node_modules/cropperjs/dist/cropper.css'>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css">
    <link rel="stylesheet" href="/Components/cropper/cropper.css">
    <div class="container">
        <!--h2>Cropper Component Body</h2--!>
        <div class="row">
            <div class="col-9" style="overflow: hidden">
                <!-- <div class="chipl"> -->
                    <img id="image" src="https://rawgit.com/PhanHoangAnh/CreateDynamicAttributeSets/master/materials/sample.jpg"
                    alt="Picture">
                <!-- </div>                 -->
            </div>
            <div class="col-3" style="overflow: hidden;">
                <div class="preview"></div>
            </div>
        </div>
        <div class="row" style="overflow: hidden">
            <img id="checkImage"></div>
    </div>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-9">                
                <label class="btn btn-outline-primary btn-flat">
                    <i class="fa upload" aria-hidden="true"></i>
                    Browse&hellip; <input type="file" id="file" name="myfiles[]" style="display: none;">                    
                </label>
                <div class="col-3">

                </div>
            </div>
        </div>
    </div>
    
</template>


<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">

<script src='../../node_modules/cropperjs/dist/cropper.js'></script>
<script src="./cropper.js"></script>`

export default _html;