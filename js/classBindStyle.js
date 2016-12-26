

Vue.component('my-component',{
  props: ['todo','name'],
  template:'<p>{{todo}} vs {{name}}</p>'
})

var app = new Vue({
  el: "#app",
  data: {
    msg:'hello world',
    isActive: false,
    'hasError': true,
    activeClass:'active',
    errorClass:'text-danger',
    classObject: {
      active: true,
      'text-danger': true
    },
    styleObject: {
      fontSize:'24px',
      color:'#ff5323'
    },
    styleObject2:{
      'background-color':'#00ff00'
    }
  }
})
