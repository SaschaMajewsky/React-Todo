import React from "react";

const Todo = ({todoProperty}) => (
        <li className="todoElement">
            {todoProperty.task}
        </li>
    )

export default Todo;