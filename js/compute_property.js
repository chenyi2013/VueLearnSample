var app = new Vue({
  el:"#app",
  data:{
    message: 'Hello',
    time:"a"
  },
  methods:{
    currentTime:function(){
      return Date.now();
    }
  },
  computed: {
    reversedMessage:function(){
      return this.message.split('').reverse().join('')
    },
    nowTime:function(){
      return Date.now();
    }
  }
})
