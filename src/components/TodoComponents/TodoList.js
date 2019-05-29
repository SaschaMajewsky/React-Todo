import React from "react";
import Todo from './Todo';

const TodoList = ({taskProperty}) => (
        <ul className="list">
            {taskProperty.map( 
                todo => <Todo todoProperty={todo} key={todo.id} />
                )
            }
        </ul>
    )

export default TodoList;