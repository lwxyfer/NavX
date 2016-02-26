// 定义
var MyComponent = Vue.extend({
	props:['heaCon','data'],
  template: "<div class='col'><div><h4>{{ heaCon }}</h4></div><div class='collection'><a v-for='li in {{ data }}' href='{{ li.link }}' data-tooltip='{{ li.tooltip }}' class='collection-item lighten-3 tooltipped'>{{ li.text }}</a></div></div>",
})

// 注册
Vue.component('my-component', MyComponent)
