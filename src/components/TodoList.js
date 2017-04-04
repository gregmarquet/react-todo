import React, { Component } from 'react'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    };
  }

  render() {

    return (
      <div>
        <TodoForm />
        <TodoListItems />
      </div>
    )
  }
}