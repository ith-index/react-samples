import React from 'react';
import './index.css';

const Exhibit = (props) =>
  <div className='exhibit'>
    <h2 className='name'>{props.name}</h2>
    <div className='content'>
      {props.children}
    </div>
  </div>
  ;

export default Exhibit;
