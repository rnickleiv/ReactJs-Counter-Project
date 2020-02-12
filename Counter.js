import React from 'react';

const Counter = ({ count, 
        onDecrement,
        clickedButtons,
        onIncrement,
        onInputNumberChange, 
        numberInputted, 
        onInputNumber }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>Number of Times a button is Clicked:{clickedButtons}</p>
          <input type='text' onChange={event => onInputNumberChange(event.target.value)} value={numberInputted}/><button
           onClick=
          {onInputNumber}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;