var $ = window.jQuery = require('jquery')
require('./materialize/js/materialize.min.js')
require('./css/style.css')
var Vue = require("vue")

Vue.config.debug = true

/**
 * format data for using in Vue.js
 * @param  myData
 * @return dataVue
 */
var dataVue = (function() {
	var myData = require("./data.js")
	var data = {}
	var lists = Object.keys(myData)
	for (var i = 0; i < lists.length; i++) {
		var a = lists[i]
		data[a] = []
		for (var j = 0; j < myData[a].length; j++) {
            var b = myData[a][j]
			data[a].push({
				'text': b[0],
				'link': 'http://' + b[1],
				'tooltip': b[2] ? b[2] : 'No tooltip'
			})
		}
	}
	return data
})()

// var MyComponent = Vue.extend({
// 	props:['dat','msg'],
// 	data:function() { return dataVue }, 
//   template: "<div class='col'><div><h4>{{ msg }}</h4></div><div class='collection'><a  v-for='li in {{ dat }}'  href='{{ li.link }}' data-tooltip='{{ li.tooltip }}' class='collection-item lighten-3 tooltipped' data-position='top'>{{ li.text }}</a></div></div>",
// })



// 注册
// Vue.component('my-component', MyComponent)


/**
 * 实例Vue
 * @type {Vue}
 */
var NavData = new Vue({
	el: "#thmain",
	data: dataVue
})
// var siteSearch = new Vue({
// 		el: "nav",
// 		data: {
// 			site: "Inner Search"
// 		}
// 	})


// 自动添加 style class
$('main .collection a').addClass('collection-item lighten-3 tooltipped')

/**
 * init Materialize function
 */
	// $('#searchTog').click(function() {
	// 	$('#searchInner').slideToggle(1000)
	// })
	//
$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('select').material_select();
	$('.tooltipped').tooltip({delay: 50});
	$(document).keydown(function(e) {
		var e = e || window.event;
		if (e.ctrlKey && e.keyCode == 13) {
			$('#search').focus()
		}
	})
})
<<<<<<< HEAD
// $('#searchTog').click(function() {
// 	$('#searchInner').slideToggle(1000)
// })
$(".button-collapse").sideNav();
$('select').material_select();
// $(document).on("keyup",function(){
// 	if()
// })
=======


>>>>>>> test
