import React from "react";
/* import '../Todo.css'; */

const TodoForm = ({addTaskProperty, taskTextProperty, handleChangesProperty, cleanUpProperty, tasksProperty}) => (
        <form onSubmit={addTaskProperty} autoComplete="off" className="todoForm">
            <input
                type="text"
                value={taskTextProperty}
                name="todo"
                onChange={handleChangesProperty}
                placeholder="Add a task"
                className="inputField"
                required pattern=".{1,23}"
            />
            <div className="buttonContainer">
            <input type="submit" value="Save" className="saveButton"></input>
            <button onClick={cleanUpProperty} type="submit" className="cleanButton">{tasksProperty.filter(task => task.completed).length}</button>
            </div>
        </form>
    )

export default TodoForm;