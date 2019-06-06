import React from "react";
import Todo from './Todo';

const TodoList = ({tasksProperty, taskToggleProperty}) => (
        <ul className="list">
            {tasksProperty.map( 
                todo => <Todo todoProperty={todo} key={todo.id} toggleProperty={taskToggleProperty}/>
                )
            }
        </ul>
    )

export default TodoList;