import React from "react";
/* import '../Todo.css'; */

const TodoForm = ({addTaskProperty, taskTextProperty, handleChangesProperty, cleanUpProperty}) => (
        <form onSubmit={addTaskProperty} autocomplete="off" className="todoForm">
            <input
                type="text"
                value={taskTextProperty}
                name="todo"
                onChange={handleChangesProperty}
                placeholder="Add a task"
                className="inputField"
                
            />
            <div className="buttonContainer">
            <input type="submit" value="Save" className="saveButton"></input>
            <button onClick={cleanUpProperty} type="submit" className="cleanButton"></button>
            </div>
        </form>
    )

export default TodoForm;