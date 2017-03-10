var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    peoples: []
  },
  methods: {
    getPeoples: () => {
      axios.get('http://localhost:3000/api/list')
        .then((response) => {
          app.peoples = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    reverseMessage: () => {
      console.log('apa aja')
      app.message = app.message.split('').reverse().join('')
    },
    getQueryStringValue: (key) => {
      return decodeURIComponent(window.location.search.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'))
    },
    setTokenLocalStorage: () => {
      localStorage.setItem('token', app.getQueryStringValue('q'))
    }
  }
})

// app.setTokenLocalStorage()
app.getPeoples()
