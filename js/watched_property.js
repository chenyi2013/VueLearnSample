var watch = new Vue({
  el:"#watch",
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + this.lastName
    },
    lastName: function(val) {
      this.fullName = this.firstName + val
    }
  }
})

var compute = new Vue({
  el: "#compute",
  data: {
    firstName: "Kevin",
    lastName:" Chen"
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName
    }
  }
})

var setter = new Vue({
  el: "#setter",
  data: {
    firstName: "两三年",
    lastName: "半步颠"
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName
      },
      set: function(newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})

var vm = new Vue({
  el: "#watch-example",
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer();
    }
  },
  methods: {
    getAnswer: _.debounce(
      function () {
        var vm = this
        if(this.question.indexOf('?') === -1){
          vm.answer = "Questions usually contain a question mark. ;-)"
          return
        }

        vm.answer = 'Thinking...'
        axios.get('https://yesno.wtf/api')
          .then(function(response){
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function(error) {
            vm.answer = 'Error! Could not reach the API. '+error
          })
      },
      500
    )
  }
})
