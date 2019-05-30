import React from "react";

const Todo = ({todoProperty, toggleProperty}) => (
        <li 
         className={`${todoProperty.completed ? 'todoElement completed' : 'todoElement'}`}
         onClick={() => toggleProperty(todoProperty.id)}
         >
            {todoProperty.task}
        </li>
    )

export default Todo;