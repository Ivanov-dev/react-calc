import React from 'react';
import './App.css';
import NumButtons from './NumButtons';
import FnButtons from './FnButtons';


function App(props) {

    let newNumber = React.createRef();
    let onInputChange = () => {
        let number = newNumber.current.value;
        let action = {name: 'CHANGE_NUMBER', number: number};
        props.dispatch(action);
    };


    return (
        <div className="App">
            <textarea ref={newNumber} onChange={onInputChange} value={props.store._state.input}></textarea>
            <div>
                <NumButtons buttons={props.store.numberButtons} butAddNumber={props.butAddNumber}/>
                <FnButtons buttons={props.store.fnButtons} setFnAction={props.setFnAction}/>
                <FnButtons buttons={['=']} setFnAction={props.resultAction}/>
            </div>
        </div>
    );
}

export default App;
