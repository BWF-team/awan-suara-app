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
    }
  }
})
app.getPeoples()
