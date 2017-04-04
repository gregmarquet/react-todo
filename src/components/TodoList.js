import React, { Component } from 'react'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    };
  }

  handleTodoTextChange(event) {
    // debugger
    this.setState({todoText: event.target.value})
  }

  render() {

    return (
      <div>
        <TodoForm handleTodoTextChange={this.handleTodoTextChange.bind(this)} todoText={this.state.todoText} />
        <TodoListItems />
      </div>
    )
  }
}