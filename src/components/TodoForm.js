import React from 'react'

const TodoForm = (props) => {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={props.handleTodoTextChange} value={props.todoText}/>
        <input type='submit' value='Add'/>
      </form>
    </div>
  )
}