import React from 'react';
import Button from './Button.js';

function NumButtons(props, index) {
    let buttons = props.buttons.map(num => (<Button name={num}   action = {props.butAddNumber}/>))
    return (
        <div className="NumButtons" key = {index}>
            {buttons}
        </div>
    );
}

export default NumButtons;
