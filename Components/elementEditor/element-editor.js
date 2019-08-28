
const _html = 
` <template id="main">
    <link href="../../node_modules/mdbootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../node_modules/mdbootstrap/css/mdb.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">    
    
    <link rel="stylesheet" href="../../Components/elementEditor/elementEditor.css">    

<div id="select-box" style="display: none;" edit-control>
<div id="highlight-name"></div>
<div id="select-actions">
    <a ctr-action='drag' title="Drag element"><i class="fas fa-expand-arrows-alt"></i></a>
    <!-- <a ctr-action='movetoparent' title="Move to up level"><i class="fas fa-hand-point-up"></i></a> -->
    <a ctr-action='parent' title="Select parent"><i class="fas fa-caret-up"></i></a>    
    <a ctr-action='child' title="Select first child"><i class="fas fa-caret-down"></i></a>    
    <a ctr-action='up' title="Move to previous element "><i class="fas fa-arrow-up"></i></i></a>
    <a ctr-action='down' title="Move to next element "><i class="fas fa-arrow-down"></i></i></a>
    <a ctr-action='clone' title="Clone element"><i class="far fa-copy"></i></a>
    <a ctr-action='remove'' title="Remove element"><i class="far fa-trash-alt"></i></a>
</div>
<div id="section-actions" class="" ctr-action = 'add'>
        <a title="Add element"><i class="fas fa-plus-circle fa-lg"></i></a>
</div>
</div>

    </template>
`
export default _html;
