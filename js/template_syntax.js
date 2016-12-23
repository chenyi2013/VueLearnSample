var app = new Vue({
  el:"#app",
  data:{
    msg:'I am from vue',
    url:'http://www.baidu.com',
    isVisible:true,
    number:5,
    ok:true,
    id:"sub_div",
    rawHtml:"rawHtml",
    rawId:"rawId",
    seen:true
  },
  filters: {
    formatId: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods:{
    doSomething:function(){
      alert("你还真点呀");
    },
    onSumbit:function(){
      alert("哈哈哈！！！被我拦截了吧")
    }
  }
})
