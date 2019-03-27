import React from 'react';
import './index.css'

const Item = (props) =>
  <div className='item'>
    <span className='name'>{props.name}</span>
    <input type='checkbox' checked={props.checked} onChange={props.checkItem} /> 
  </div>
  ;

export default Item;
