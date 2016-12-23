var vm = new Vue({
  el:"#app",
  data:{
    msga :'hello',
    msgb :'world'
  }
})

vm.$watch('msga',function(newValue,oldValue){
  this.msgb = 'msga:'+newValue;
})
