var path = require("path");
// var Footer = require("./views/Parts/");
// console.log("Dir: ", __dirname);
var globalPath = "./Parts/";

let config = {
    "footer": globalPath + "Footer.ejs",
};

console.log("Footer:", globalPath + "Footer.ejs" );
module.exports = config;