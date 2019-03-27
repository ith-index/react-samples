import React from 'react';
import './index.css';

const Controls = (props) =>
  <div>
    <button className='control' onClick={props.isStarted ? props.stop : props.start}>
      {props.isStarted ? 'Stop' : 'Start' }
    </button>
    <button className='control' disabled={props.isStarted} onClick={props.reset}>Reset</button>
  </div>
  ;

export default Controls;
