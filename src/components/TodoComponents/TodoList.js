import React from "react";
import Todo from './Todo';

const TodoList = ({taskProperty, taskToggleProperty}) => (
        <ul className="list">
            {taskProperty.map( 
                todo => <Todo todoProperty={todo} key={todo.id} toggleProperty={taskToggleProperty}/>
                )
            }
        </ul>
    )

export default TodoList;