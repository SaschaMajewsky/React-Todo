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
 /*  console.log(newTask); */
};

handleChanges = event => this.setState({taskText: event.target.value});

taskToggle = todoIndividual  => {
  this.setState({
    tasks: this.state.tasks.map(task => {
      if(task.id === todoIndividual) {
        return {...task, completed: !task.completed
        };
      }
      return task;
    })
  });
};

cleanUp = event => {
  event.preventDefault();
  this.setState({
    tasks: this.state.tasks.filter(task => !task.completed)})
}


// render
  render() {
    return (
      <div className="application">
        <h2 className="header">Todo App</h2>
        <TodoList taskProperty={this.state.tasks}
        taskToggleProperty={this.taskToggle}/>
        <TodoForm 
        taskTextProperty={this.state.taskText}
        addTaskProperty={this.addTask}
        handleChangesProperty={this.handleChanges}
        cleanUpProperty={this.cleanUp}
        />
      </div>
    );
  }
}

export default App;