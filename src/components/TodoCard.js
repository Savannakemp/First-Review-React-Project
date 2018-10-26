import React, {Component} from 'react'

class TodoCard extends Component {
    constructor(){
        super()
        this.state = {
            title: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this)
    }

    componentDidMount() {
        this.setState({title: this.props.todo.title})
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value})
    }


    render() {
        return(
            <div>
                {this.props.todo.title}
                <input value={this.state.title} type="text" onChange={this.handleTitleChange}></input>
                <button onClick={() => this.props.updateTodo(this.state.title, this.props.todo.id)}>Edit </button>
                 <button onClick={() => this.props.deleteTodo(this.props.todo.id)}>Delete</button>
            </div>
        )
    }
}

export default TodoCard