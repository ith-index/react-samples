import React from 'react';
import Exhibit from './Exhibit';
import Calculator from '../Calculator';
import Checklist from '../Checklist';
import Clock from '../Clock';
import Counter from '../Counter';
import RGBPicker from '../RGBPicker';
import Stopwatch from '../Stopwatch';
import TicTacToe from '../TicTacToe';
import './index.css';

const Exhibition = (props) =>
  <div className='exhibition'>
    <h1 className='name'>{props.name}</h1>
    <div className='content'>
      <Exhibit name='Clock'>
        <Clock />
      </Exhibit>
      <Exhibit name='Stopwatch'>
        <Stopwatch />
      </Exhibit>
      <Exhibit name='Counter'>
        <Counter />
      </Exhibit>
      <Exhibit name='RGB Picker'>
        <RGBPicker />
      </Exhibit>
      <Exhibit name='Checklist'>
        <Checklist name='Foobarbaz'/>
      </Exhibit>
      <Exhibit name='Tic-Tac-Toe'>
        <TicTacToe />
      </Exhibit>
      <Exhibit name='Calculator'>
        <Calculator />
      </Exhibit>
    </div>
  </div>
  ;

export default Exhibition;
