let express = require('express')
let app     = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/hola', function (req, res) {
  res.send({
    saludo: 'Este mensaje ha sido recuperado de un servidor local, ' +
    'consulta la documentación para averiguar como utilizarlo'
  })
})

console.log('Server is listening on port 3000');
app.listen(3000);