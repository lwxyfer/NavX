var $ = window.jQuery = require('jquery')
require('./css/icon.css')
require('./materialize/css/materialize.min.css')
require('./materialize/js/materialize.min.js')
require('./css/style.css')
var Vue = require("vue")
var myData = require("./data.js")
Vue.config.debug = true

var NavData = new Vue({
	el:"main",
	data:myData
})
var siteSearch = new Vue({
	el:"nav",
	data:{
		site:"Inner Search"
	}
})
// $('#searchTog').click(function() {
// 	$('#searchInner').slideToggle(1000)
// })
$(".button-collapse").sideNav();
$('select').material_select();
// $(document).on("keyup",function(){
// 	if()
// })