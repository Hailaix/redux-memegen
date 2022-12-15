import React from "react";
import { useDispatch } from 'react-redux';
import './Meme.css';

const Meme = ({ topText, bottomText, imgURL, id }) => {
    const dispatch = useDispatch();
    const removeMeme = () => {
        dispatch({ type: 'REMOVEMEME', payload: { id } })
    }
    return (
        <div className="meme" id={id}>
            <span className="toptext">{topText}</span>
            <img src={imgURL} alt="meme" />
            <span className="bottomtext">{bottomText}</span>
            <button onClick={removeMeme}>X</button>
        </div>
    )
}

export default Meme;