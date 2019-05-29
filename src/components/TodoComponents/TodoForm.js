import React from "react";
/* import '../Todo.css'; */

const TodoForm = ({addTaskProperty, taskTextProperty, handleChangesProperty}) => (
        <form onSubmit={addTaskProperty}>
            <input
                type="text"
                value={taskTextProperty}
                name="todo"
                onChange={handleChangesProperty}
                placeholder="Add a task"
                className="inputForm"
            />
            <input type="submit" value="Save" className="saveButton"></input>
            <button type="submit" className="cleanButton">Clean Up</button>
        </form>
    )

export default TodoForm;