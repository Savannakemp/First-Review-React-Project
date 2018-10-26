import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import TodoCard from './TodoCard'

class Todos extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            userinput: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
    }

    componentDidMount() {
        axios.get('/api/todos').then(results => {
            this.setState({todos: results.data})

        })
    }

    handleInput(e) {
        this.setState({userInput: e.target.value})
    }

    handleAddTodo() {
        axios.post('/api/todos', {title: this.state.userInput}).then(results => {
            this.setState({
                todos: results.data,
                userinput: ''
            })
        })
    }

    deleteTodo(id) {
        axios.delete(`/api/todos/${id}`).then(results => {
            this.setState({
                todos: results.data
        })
    })
}
      updateTodo(title, id) {
        axios.put(`/api/todos/${id}`, {title}).then(results => {
            this.setState({
                todos: results.data
            })
         })
}    

    render() {
        let todoList = this.state.todos.map(todo => {
            return(
                <TodoCard 
                todo={todo}
                deleteTodo={this.deleteTodo} 
                updateTodo={this.updateTodo} />

            )
        })

        return (
            <div>
                <Header />
                <input value={this.state.userInput} type='text' placeholder='something' onChange={this.handleInput}/>
                <button onClick={this.handleAddTodo}>ADD</button>
                {todoList}
            </div>
        )
    }
}

export default Todos;