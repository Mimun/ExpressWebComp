// var currentDocument = document.currentScript.ownerDocument;
// console.log("CropperJS");

import _html from "./cropperTpl.js";
import Cropper from "../../node_modules/cropperjs/dist/cropper.esm.js"

class TheCropper extends HTMLElement{
    constructor(){
        super();
        // console.log("Cropper Constructor");
    }
    
    connectedCallback(){
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.innerHTML = _html;
        const template = shadowRoot.querySelector("#cropper-comp").content;
        console.log("template:",template);
        const instance = template.cloneNode(true);
        
        // adding instance first and then adding event listener later by query shadowRoot
        shadowRoot.appendChild(instance);
        this.render(shadowRoot);
        
    }

    render(shadowRoot){
        function each(arr, callback) {
            var length = arr.length;
            var i;
            for (i = 0; i < length; i++) {
                callback.call(arr, arr[i], i, arr);
            }
            return arr;
        }
        var previews = shadowRoot.querySelectorAll('.preview');
        var option = {
            // preview: '.preview',
            center: true,
            autoCropArea: 0.9,
            cropBoxMovable: false,
            dragMode: 'move',
            aspectRatio: 16 / 9,            
            cropBoxResizable: false,
            // preview: document.querySelector('.preview'),
    
            ready: function (e) {
    
            },
            crop: function (event) {
                var clone = this.cloneNode();
                clone.className = '';
                clone.style.cssText = (
                    'display: block;' +
                    'width: 100%;' +
                    'min-width: 0;' +
                    'min-height: 0;' +
                    'max-width: none;' +
                    'max-height: none;'
                );
                each(previews, function (elem) {
                    while (elem.firstChild) {
                        elem.removeChild(elem.firstChild);
                    }
                    elem.appendChild(clone.cloneNode());
                });
                // 
                var data = event.detail;
                var cropper = this.cropper;
                var imageData = cropper.getImageData();
                var previewAspectRatio = data.width / data.height;
                each(previews, function (elem) {
                    var previewImage = elem.getElementsByTagName('img').item(0);
                    // if (previewImage) {
    
                    var previewWidth = elem.offsetWidth;
                    var previewHeight = previewWidth / previewAspectRatio;
                    var imageScaledRatio = data.width / previewWidth;
                    elem.style.height = previewHeight + 'px';
                    previewImage.style.width = imageData.naturalWidth / imageScaledRatio + 'px';
                    previewImage.style.height = imageData.naturalHeight / imageScaledRatio + 'px';
                    previewImage.style.marginLeft = -data.x / imageScaledRatio + 'px';
                    previewImage.style.marginTop = -data.y / imageScaledRatio + 'px';
                    // }
    
                });
    
    
            },
            cropend: function (event) {
                // console.log(this.cropper)
                var base64data = this.cropper.getCroppedCanvas().toDataURL();
                // document.getElementById('checkImage').setAttribute('src', base64data);
            }
        };
        var image = shadowRoot.getElementById('image');
        var myCropper = new Cropper(image, option);
        //
        let fileBnt = shadowRoot.querySelector('#file')
        fileBnt.addEventListener('change', function(){
            console.log('ukie, I am working');
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(this.files[0]);
                reader.onload = function (e) {
                    // console.log("I am here", e.target.result);
                    // myCropper.replace(e.target.result);
                    //myCropper.destroy();
                    // myCropper.reset(option);
                    myCropper.destroy();
                    myCropper = null;
                    image.setAttribute('src', e.target.result);
                    myCropper = new Cropper(image, option);
    
                    setTimeout(() => {
                        // var base64data = myCropper.getCroppedCanvas().toDataURL();
                        // document.getElementById('checkImage').setAttribute('src', base64data);
                    })
                };
            }
        })

    }

}
customElements.define('cropper-wc', TheCropper);