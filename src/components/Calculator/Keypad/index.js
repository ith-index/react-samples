import React from 'react';
import './index.css'

const Keypad = (props) => {
  const values = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    '.', '0', 'D', '/'
  ]
  return (
    <div className='keypad'>
      {
        values.map(
          value => <button onClick={_ => props.input(value)}>{value}</button>
        )
      }
    </div>
  )
};

export default Keypad;
