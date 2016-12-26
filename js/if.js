Vue.component("my-component",{
  template:'<h2>hello Vue</h2>'
})

var app = new Vue({
  el: "#app",
  data: {
    ok:true,
    type:'A'
  }
})
