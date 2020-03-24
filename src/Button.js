import React from 'react';
import './App.css';

function Button(props) {

    return (
        <div>
            <div className="Buttons" onClick={props.action}>{props.name}</div>
        </div>
    );
}

export default Button;
