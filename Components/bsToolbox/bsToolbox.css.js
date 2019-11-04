const _css = 
`
@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css";
@import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "/node_modules/mdbootstrap/css/mdb.min.css";
@import "/node_modules/@fortawesome/fontawesome-free/css/all.css";

:host{
    font-size: x-small;
}

div{
    text-align: left;
    /*font-weight: 300;*/
}
[data-type] {
    width: 10%;
    margin: 1.25%;
    text-align: center;
    font-weight: normal;
    font-size: 11px;
    color: #000;
    background-repeat: no-repeat;
    padding-top: 55px;
    padding-bottom: 7px;
    border-color: #ddd;
    border-style: solid;
    border-width: 0px;
    background-position: 50% 30%;
    background-size: auto 38px;
    z-index: 100;
    background-color: transparent;
    cursor: pointer;
    opacity: 0.75;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    zoom: 1;
}

`


export default _css;