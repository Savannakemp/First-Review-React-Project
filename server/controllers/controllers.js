let todos = [
    {
        title: "Add Todos",
        id: 1
    },
    {
        title: "Do Todos",
        id: 2
    },
]

let id = 3

module.exports = {
    getTodos: (req, res) => {
        res.status(200).send(todos)
    },
    createTodo: (req, res) => {
        const {title} = req.body
        let newTodo = {
            title,
            id
        }
        id++
        todos.push(newTodo)
        res.status(200).send(todos)
    },
    deleteTodo: (req, res) => {
        const {id} = req.params
        let index = todos.findIndex(todo => todo.id === +id)
        if(index !== -1) {
            todos.splice(index, 1)
        }
        res.status(200).send(todos)
    },
    updateTodo: (req, res) => {
        const {id} = req.params
        const {title} = req.body
        let index = todos.findIndex(todo => todo.id === +id)
        if(index !== -1) {
            todos[index].title = title
        }
        res.status(200).send(todos)
    }
}