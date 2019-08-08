
const _html = function(title){
  return ` <template id="pop-cover-template">
  
    <link rel="stylesheet" href="../../Components/popperCover/popperCover.css">
    
        <div class="" style="padding: 0%; display: block">
        <div id="draggable-scroll" class="card">
            <h5 class="card-header success-color white-text">${title}</h5>
            <div class="card-body">
                <p class="card-text" id = "Context" >Should be adding automatically</p>
                <!-- Should be adding automatically -->
                <slot name = 'handler' class="card-text">
                    
                </slot>
                
            </div>
        </div>
  
        </div>
        <div class="popper__arrow"></div>
    
  </template>
  `
} 
export default _html;
