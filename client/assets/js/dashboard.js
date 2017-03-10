var app = new Vue({
  el: '#app',
  data: {
    count: 1,
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
    },
    deleteQueue: (id, idx) => {
      console.log(id + ' , ' + idx)
      axios.delete(`http://localhost:3000/api/list/${id}`).then((response) => {
        if (response.data.message == 'successfully deleted') {
          app.peoples.splice(idx - 1, 1)
        } else {
          alert('Error coy!')
        }
      })
    }
  }
})

// app.setTokenLocalStorage()
app.getPeoples()
