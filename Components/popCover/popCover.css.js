const _css = `

@import "/node_modules/mdbootstrap/css/bootstrap.min.css";
@import "/node_modules/mdbootstrap/css/mdb.min.css";

.link-anchor {
    position: relative;
    width: 0;
    font-size: .8em;
    opacity: 0;
    transition: opacity .2s ease-in-out;
}

.anchor-wrapper {
    border: none;
}

.anchor-wrapper:hover .link-anchor {
    opacity: 1;
}

section h1[id]:focus,
section h2[id]:focus,
section h3[id]:focus,
section h4[id]:focus,
section h5[id]:focus {
    outline: 0;
}

p.thin {
    font-weight: 100;
    margin: 0;
    line-height: 1.2em;
}

p.bold {
    font-weight: 900;
    margin: 0;
    margin-top: -5px;
}



/* width: 20%; */
/* .rel {
  
     margin: 0 auto;
     position: relative;
     text-align: center;
     padding: 20px;
     border-style: dotted;
     border-color:#5fce31;
     border-width: medium;
 }
  */
.popper,
.tooltip {
    position: absolute;
    /* background: #ababab; */
    /* color: black; */
    /* width: 150px; */
    border-radius: 3px;
    /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.5); */
    padding: 10px;
    text-align: center;
}

.style5 .tooltip {
    background: #1E252B;
    color: #FFFFFF;
    max-width: 200px;
    width: auto;
    font-size: .8rem;
    padding: .5em 1em;
}

.popper .popper__arrow,
.tooltip .tooltip-arrow,
.popper .popper__arrow:before,
.tooltip .tooltip-arrow:before {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
}

.popper .popper__arrow:before,
.tooltip .tooltip-arrow:before {
    border-color: #FFF;
}

.tooltip .tooltip-arrow,
.popper .popper__arrow {
    border-color:rgba(0,0,0,.2);
    
}
.tooltip .tooltip-arrow,
.popper .popper__arrow::after {
    bottom: -10px;
    left: 1px;
    content: " ";
    border-right-color: #f5f5f5;
    border-left-width: 0;
}
    
 

.style5 .tooltip .tooltip-arrow {
    border-color: #1E252B;
}

.popper[x-placement^="top"],
.tooltip[x-placement^="top"] {
    margin-bottom: 5px;
}

.popper[x-placement^="top"] .popper__arrow,
.tooltip[x-placement^="top"] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
}

.popper[x-placement^="bottom"],
.tooltip[x-placement^="bottom"] {
    margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow,
.popper[x-placement^="bottom"] .popper__arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
}

.tooltip[x-placement^="right"],
.popper[x-placement^="right"] {
    margin-left: 5px;
}

.popper[x-placement^="right"] .popper__arrow,
.tooltip[x-placement^="right"] .tooltip-arrow,
.popper[x-placement^="right"] .popper__arrow:before {
    border-width: 15px 15px 15px 0;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    left: -15px;
    top: calc(50% - 15px);
    margin-left: 0;
    margin-right: 0;
}

.popper[x-placement^="right"] .popper__arrow:before {
    content: "";
    border-width: 13px 13px 13px 0;
    left: 2px;
    top: calc(50% - 18px);
}

.popper[x-placement^="left"],
.tooltip[x-placement^="left"] {
    margin-right: 5px;
}

.popper[x-placement^="left"] .popper__arrow,
.tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
}
/* ::slotted(*) {
    font-weight: bold;
    background-color: red;
    width: 50%;
  } */

  `

  export default _css;