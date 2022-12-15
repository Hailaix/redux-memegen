import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const INITIAL_STATE = {
    topText: '',
    bottomText: '',
    imgURL: ''
}

const MemeForm = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    //generic change handler
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        //dispatch the new meme as a payload to the store
        dispatch({ type: 'ADDMEME', payload: formData });
        setFormData(INITIAL_STATE);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                name='topText'
                value={formData.topText}
                placeholder='Top Text'
            />
            <input
                onChange={handleChange}
                name='bottomText'
                value={formData.bottomText}
                placeholder='Bottom Text'
            />
            <input
                onChange={handleChange}
                name='imgURL'
                type='url'
                value={formData.imgURL}
                placeholder='Image URL'
            />
            <input type='submit' />
        </form>
    )
};

export default MemeForm;