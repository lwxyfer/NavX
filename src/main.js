var $ = window.jQuery = require('jquery')
require('./css/icon.css')
require('./materialize/css/materialize.min.css')
require('./materialize/js/materialize.min.js')
require('./css/style.css')
require("vue")

var myData = require("./data.js")
var Vue = require("vue")

new Vue({
	el:"#main",
	data:myData
})
 $(".button-collapse").sideNav();
