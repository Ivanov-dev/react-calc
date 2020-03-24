import React from 'react';
import Button from './Button.js';

function FnButtons(props) {
    let buttons = props.buttons.map(fn => (<Button name={fn}   action = {props.setFnAction}/>))
    return (
        <div className="FnButtons">
            {buttons}
        </div>
    );
}

export default FnButtons;
