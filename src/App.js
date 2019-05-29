import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        tasks: [],
        taskText: '',
        id: '',
        completed: ''
    }
}

addTask = event => {
event.preventDefault();

  const newTask = {
      task: this.state.taskText,
      id: Date.now(),
      completed: false
  };

  this.setState({
      tasks: [...this.state.tasks, newTask],
      taskText: '',
      id: '',
      completed: ''
  });
};

handleChanges = event => this.setState({taskText: event.target.value});

// render
  render() {
    return (
      <div className="application">
        <h2 className="header">Todo App</h2>
        <TodoList taskProperty={this.state.tasks}/>
        <TodoForm 
        taskTextProperty={this.state.taskText}
        addTaskProperty={this.addTask}
        handleChangesProperty={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;