var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    peoples: []
  },
  methods: {
    getPeoples: () => {
      axios.get('http://swapi.co/api/people/')
        .then((response) => {
          app.peoples = response.data.results
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getLogin: () => {
      axios.get('http://localhost:3000/auth/facebook/login')
        .then((data) => {
          console.log(data)
        }).catch((error) => {
        console.log(error)
      })
    },
    reverseMessage: () => {
      console.log('apa aja')
      app.message = app.message.split('').reverse().join('')
    }
  }
})
app.getLogin()
