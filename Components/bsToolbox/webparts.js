const css = `
<template id = "css">
    <style id = "bsStyle">
    .interim {                
        background-color: whitesmoke;
        transition: all 0.8s ease 0s;
        border: 1px solid rgb(114, 127, 150);
    }    
    </style>    
</template>
`;

const webparts = `
    
    <template id = "webparts">
        <div class="container-fluid interim" role = "container" style = "min-height: 150px;" >
            Container 
        </div>
        <!-- -->
        <div class="row" role = "grid_row">
            <div class="col-sm-4">
                <h3>col-sm-4</h3>
            </div>
            <div class="col-sm-4 col-5">
                <h3>col-sm-4</h3>
            </div>
            <div class="col-sm-4">
                <h3>col-sm-4</h3>
            </div>
        </div>
        <!-- -->
        <div class="btn-group" role="button_group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
        </div>        
        <!--  -->
        <div class="btn-toolbar" role="button_toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">1</button>
                <button type="button" class="btn btn-secondary">2</button>
                <button type="button" class="btn btn-secondary">3</button>
                <button type="button" class="btn btn-secondary">4</button>
            </div>
            <div class="btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" class="btn btn-secondary">5</button>
                <button type="button" class="btn btn-secondary">6</button>
                <button type="button" class="btn btn-secondary">7</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-secondary">8</button>
            </div>
        </div>
        <!--  -->
        <button role = "button">Button</button>
        <!--  -->
        <h1 role = "heading">Heading</h1>
        <!--  -->
        <!--  -->
        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="Card image cap" role = "image">
        <!--  -->
        <!--  -->
        <div class="jumbotron" role = "jumbotron">
            <h1 class="display-3">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead"> <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> </p>
        </div>
        <!--  -->
        <!--  -->
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <button type="button" class="close"
                data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span>
            </button>
            <strong>Holy guacamole!</strong> You should check in on some of those fields below. 
        </div>
        <!--  -->
        <!--  -->
        <div class="card" role ="card">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="Card image cap">
            <a href="#!">
            <div class="mask rgba-white-slight"></div>
            </a>
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p> <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <ul class="list-group" role = "list_group">
            <li class="list-group-item">
                <span class="badge">14</span>
                Cras justo odio
            </li>
            <li class="list-group-item">
                <span class="badge">2</span>
                Dapibus ac facilisis in
            </li>
            <li class="list-group-item">
                <span class="badge">1</span>
                Morbi leo risus
            </li>
        </ul>
        <!--  --> 
        <!--  -->
        <hr role = "hr">
        <!--  -->
        <span class="badge badge-primary" role = "badge">Primary badge</span>
        <!--  -->
        <div class="progress" role = "progressbar">
            <div class="progress-bar w-25"></div>
        </div>
        <!--  -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light" role = "navbar"> 
            <a class="navbar-brand" href="#">Navbar</a> 
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"> <a class="nav-link" href="#">Home <span
                                class="sr-only">(current)</span></a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li>
                    <li class="nav-item"> <a class="nav-link disabled" href="#">Disabled</a> </li>
                </ul>
                <form class="form-inline my-2 my-lg-0"> <input class="form-control mr-sm-2" type="text"
                        placeholder="Search" aria-label="Search"> <button class="btn btn-outline-success my-2 my-sm-0"
                        type="submit">Search</button> </form>
            </div>
        </nav>
        <!--  -->
        <!--  -->
        <ol class="breadcrumb" role = "breadcrumbs">
            <li class="breadcrumb-item active"><a href="#">Home</a></li>
            <li class="breadcrumb-item active"><a href="#">Library</a></li>
            <li class="breadcrumb-item active">Data 3</li>
        </ol>
        <!--  -->
    </template>    
    ${css}
`;

export default webparts;