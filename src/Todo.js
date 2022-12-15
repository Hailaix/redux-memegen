import React from "react";
import { useDispatch } from "react-redux";
const Todo = ({ task, id }) => {
    const dispatch = useDispatch();
    const removeTodo = () => {
        dispatch({ type: 'REMOVETODO', payload: { id } });
    }
    return (
        <li id={id}>
            {task}
            <button onClick={removeTodo}>X</button>
        </li>
    )
}

export default Todo;