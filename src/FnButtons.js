import React from 'react';
import Button from './Button.js';

function NumButtons(props) {
    let buttons = props.buttons.map(num => (<Button name={num} action='0' dispatch = {props.dispatch}/>))
    return (
        <div className="NumButtons">
            {buttons}
        </div>
    );
}

export default NumButtons;
