import React from 'react';
import './index.css';

const RGBSlider = (props) =>
  <div className='rgb-slider'>
    <span className='label'>{props.label}:{props.value.toString().padStart(3,'0')}</span>
    <input type='range' min='0' max='255' value={props.value} onChange={props.onChange}/>
  </div>
  ;

export default RGBSlider;
