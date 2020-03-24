import React from 'react';
import './App.css';

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
      </div>
  );
}

export default App;
