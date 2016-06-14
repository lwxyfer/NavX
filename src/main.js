var $ = window.jQuery = require('jquery')
require('./materialize/js/materialize.min.js')
require('./css/style.css')
var Vue = require("vue")

// Vue.config.debug = true

/**
 * format data for using in Vue.js
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
					'link': /\bhttp/.test(b[1]) ? b[1] : 'http://' + b[1], // judge if there is 'http'
					'tooltip': b[2] ? b[2] : 'nothing'
				})
			}
		}
		return data
	})()
	/**
	 * 实例Vue
	 * @type {Vue}
	 */
var NavData = new Vue({
		el: "main",
		data: dataVue
	})
	/**
	 * init Materialize function
	 */
$(document).ready(function() {
	$('main .collection a').addClass('collection-item lighten-3')
	$("main .collection a").each(function() {
		if ($(this).attr('data-tooltip') !== 'nothing') {
			$(this).addClass('tooltipped')
			$(this).attr('data-position', 'top')
		}
	});
	$(".button-collapse").sideNav();
	$('select').material_select();
	$('.tooltipped').tooltip({
		delay: 50,
	});
	$(document).keydown(function(e) {
		var e = e || window.event;
		if (e.ctrlKey && e.keyCode == 13) {
			$('#search').focus()
		}
	})
})