const express = require('express')
, bodyParser = require('body-parser')
, controllers = require('./controllers/controllers.js')
, app = express()
, port = 3005

app.use(bodyParser.json())

app.get('/api/todos', controllers.getTodos)
app.post('/api/todos', controllers.createTodo)
app.delete('/api/todos/:id', controllers.deleteTodo)
app.put('/api/todos/:id', controllers.updateTodo)
app.listen(port, () => {
    console.log('Listening on port', port)
})