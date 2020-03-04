import React from 'react';

function Card(props) {
    return (
        <div className='Cards'>
            <button type="button">Delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;