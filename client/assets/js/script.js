var app = new Vue({
  el: '#app',
  data: {
    message: 'Halaman Index.html'
  },
  methods: {
    getLogin: () => {
      axios.get('http://localhost:3000/auth/facebook/login')
        .then((data) => {
          console.log(data)
        }).catch((error) => {
        console.log(error)
      })
    }
  }
})
