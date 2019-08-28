
const _html = 
`<template id="cover-elem-template">
  <link href="../../node_modules/mdbootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="../../node_modules/mdbootstrap/css/mdb.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">    

  <link rel="stylesheet" href="../../Components/coverElement/coverElement.css">   
    <div id="highlight-name" wrapper>DIV</div>
    <div id="select-actions"wrapper>
                <a ctr-action='drag' title="Drag element"><i class="fas fa-expand-arrows-alt"></i></a>
                <a ctr-action='parent' title="Select parent"><i class="fas fa-level-up-alt"></i></a>
                <a ctr-action='parent' title="Select first child"><i class="fas fa-level-down-alt"></i></a>
                <a ctr-action='up' title="Move element up"><i class="fas fa-arrow-up"></i></i></a>
                <a ctr-action='down' title="Move element down"><i class="fas fa-arrow-down"></i></i></a>
                <a ctr-action='clone' title="Clone element"><i class="far fa-copy"></i></a>
                <a ctr-action='remove'' title="Remove element"><i class="far fa-trash-alt"></i></a>
    </div>
    <div id="section-actions" class="" ctr-action = 'adding' wrapper>
                    <a title="Add element"><i class="fas fa-plus-circle fa-lg"></i></a>
    </div>
</template>
`
export default _html;
