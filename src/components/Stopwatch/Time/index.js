import React from 'react';
import './index.css';

const Time = (props) =>
  <div className='time'>
    <span>{formatElapsedMilliseconds(props.elapsedMilliseconds)}</span>
  </div>
  ;

function formatElapsedMilliseconds(elapsedMilliseconds) {
  const decisecondsPart = (integerDivide(elapsedMilliseconds, 10) % 100).toString().padStart(2, '0');
  const secondsPart = (integerDivide(elapsedMilliseconds, 1000) % 60).toString().padStart(2, '0');
  const minutesPart = (integerDivide(integerDivide(elapsedMilliseconds, 1000), 60) % 60).toString().padStart(2, '0');
  const hoursPart = (integerDivide(integerDivide(integerDivide(elapsedMilliseconds, 1000), 60), 60) % 60).toString().padStart(2, '0');
  return `${hoursPart}:${minutesPart}:${secondsPart}.${decisecondsPart}`;
}

function integerDivide(leftOperand, rightOperand) {
  return Math.trunc(leftOperand / rightOperand);
}

export default Time;
