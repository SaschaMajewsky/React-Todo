import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        tasks: [{task: "Welcome", id: 0, completed: false}],
        taskText: '',
        id: '',
        completed: ''
    }
}

componentDidMount() {
  const taskList = window.localStorage.getItem('savedTasks');
  const parsedTaskList = JSON.parse(taskList);

  if(parsedTaskList){
      this.setState({
        tasks: parsedTaskList,
      });
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
  }, () => {window.localStorage.setItem('savedTasks', JSON.stringify(this.state.tasks))
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
  }, () => {window.localStorage.setItem('savedTasks', JSON.stringify(this.state.tasks))
  });
};

cleanUp = event => {
  event.preventDefault();
  this.setState({
    tasks: this.state.tasks.filter(task => !task.completed)
  }, 
  () => {
    window.localStorage.setItem('savedTasks', JSON.stringify(this.state.tasks));
  })
}

// render
  render() {
    return (
      <div className="application">
        <h2 className="header">Todo App</h2>
        <TodoList tasksProperty={this.state.tasks}
        taskToggleProperty={this.taskToggle}/>
        <TodoForm 
        taskTextProperty={this.state.taskText}
        addTaskProperty={this.addTask}
        handleChangesProperty={this.handleChanges}
        cleanUpProperty={this.cleanUp}
        tasksProperty={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;