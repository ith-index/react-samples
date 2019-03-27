import React from 'react';
import './index.css';

const EditItem = (props) =>
  <div className='edit-item'>
    <input className='input-name' type='text' value={props.name} onChange={event => props.updateName(event.target.value)}/>
    <button onClick={props.deleteItem}>-</button>
  </div>
  ;

export default EditItem;
