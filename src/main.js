var $ = window.jQuery = require('jquery')
require('./css/icon.css')
require('./materialize/css/materialize.min.css')
require('./materialize/js/materialize.min.js')
require('./css/style.css')
// require("vue")
var Vue = require("vue")
var myData = require("./data.js")
Vue.config.debug = true

var NavData = new Vue({
	el:"main",
	data:myData
})
// var triggerSiteSearch = {
// 	el:"#searchTrig",
// 	methods:{
// 		trigger:$('#searchInner')
// 	}
// }
$('#searchTog').click(function() {
	$('#searchInner').slideToggle(1000)
})
var siteSearch = new Vue({
	el:"nav",
	data:{
		site:"Inner Search"
	}
})



$(".button-collapse").sideNav();
$('select').material_select();


// div -s12
// 	div -color
// 		h4 {{ list[0].title }}
// 	div
// 		a -list