
const _html = function(title){
  return ` <template id="pop-cover-template">
  
    <link rel="stylesheet" href="../../Components/popperCover/popperCover.css">
    
        <div  style="padding: 0%; display: block">
          <div id="draggable-scroll" class=" card ">
              <h5 class="card-header success-color white-text">
                  <span comp-role ='title'>${title}</span>
                <button type="button" class="close" aria-label="Close" comp-role = 'close'>
                    <span aria-hidden="true">&times;</span>
                </button></h5>
              <div class="card-body">
                  <p class="card-text" id = "Context" >Providing Attribute Information</p>
                  <!-- Should be adding automatically -->
                  <slot name = 'docker'></slot>
                  <slot name = 'handler' class="card-text">
                    
                  </slot>
                  
              </div>
          </div>
          <div class="popper__arrow"></div>
        </div>
        
    
  </template>
  `
} 
export default _html;
