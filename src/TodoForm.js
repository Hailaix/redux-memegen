import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const NewTodoForm = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleChange = e => {
        setTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADDTODO', payload: { task } });
        setTask('');
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <label htmlFor='task'>Task:</label>
            <input
                id='task'
                name='task'
                value={task}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodoForm;