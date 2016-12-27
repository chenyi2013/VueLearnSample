
Vue.component('todo-item',{
  template:'\
  <li>\
  {{title}}\
  <button v-on:click="$emit(\'remove\')">X</button>\
  </li>\
  ',
  props:['title']
})



var app = new Vue({
  el: "#app",
  data: {
    ol:'ol_li',
    ul:'ul_li',
    newTodoText: '',
    todos: [
      'Do the dishes',
      "Take you the trash",
      'Mow the lawn'
    ],
    items:[
      {message:'Java程序设计'},
      {message:'.Net程序设计'},
      {message:'Swift程序设计'},
      {message:'C程序设计'},
      {message:'C++程序设计'},
      {message:'GO程序设计'},
      {message:'javascript程序设计'},
      {message:'UML统一建模语言'}
    ],
    'style_li': {
      fontSize:'24px',
      color:'#5a8c9f',
      'background-color':'#000000'
    },
    userinfo:{
      username:'kevin',
      sex:'man',
      age:26,
      address:'china'
    },
    numbers: [1,2,3,4,5,6,7,8,9]
  },
  methods: {
    addNewTodo: function(){
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  },
  computed: {
    evenNumbers: function(){
      return this.numbers.filter(function (number){
         return number % 2 === 0
      })
    }
  }
})
