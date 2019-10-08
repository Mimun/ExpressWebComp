const _css = 
`
@import "/node_modules/mdbootstrap/css/bootstrap.min.css";
@import "/node_modules/mdbootstrap/css/mdb.min.css";
@import "/node_modules/@fortawesome/fontawesome-free/css/all.css";

div{
    text-align: left;
    font-weight: 300;
}

.tags-input {
    font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    background-color: #FFF;
    border: 1px solid #CCC;
    display: inline-block;
    padding: 4px 6px;
    color: #555;
    vertical-align: middle;
    border-radius: .25rem;;
    width: 100%;
    cursor: text;
    // font-size: 14px;
    font-size: 1rem;
    font-weight: 400;
    
}

.tags-input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}

.tags-input .tag-item {
    /* margin-right: 2px;
    padding: 5px 8px;
    border-radius: 35px;
    border: 1px solid;
    color: #fff;
    background-color: #00bcd4;
    border: 1px solid #00a5bb; */
    

    display: inline-block;
    vertical-align: middle;
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    margin-right: 3.75px;
    margin-bottom: 3.75px;
    background-color: #00bcd4;
    border: 1px solid #00a5bb;
    color: #fff;
    word-break: break-all;
}

.tags-input input[type="text"] {
    border: none;
    box-shadow: none;
    outline: none;
    background-color: transparent;
    padding: 5px 6px;
    margin: 0;
    width: auto;
    max-width: inherit;
    white-space: nowrap;
}

.tags-input .fa {
    font-size: 12px;
    color: #FFF;
    margin-left: 3px;
    cursor: pointer;
    border-left: 1px solid #008fa1;
    padding-left: 7px
}

`
export default _css;