import React, { Component } from 'react';
import Keypad from './Keypad';
import './index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: [],
    }; }

  render() {
    return (
      <div className='calculator'>
        <div className='calculation'>
          <span>{this.state.calculation.join(' ')}</span>
        </div>
        <Keypad input={value => this.input(value)}/>
      </div>
    );
  }

  input(value) {
    const numbers = ['1','2','3','4','5','6','7','8','9','0'];
    const operators = ['+','-','*','/'];
    const calculation = this.state.calculation;
    if (calculation.length === 0) {
      if (value !== '0' && (numbers.includes(value) || value === '.')) {
        calculation.push(value);
      }
    } else if (calculation.length === 1) {
      if (numbers.includes(value)) {
        calculation.push(calculation.pop() + value);
      } else if (operators.includes(value)) {
        calculation.push(value); 
      } else if (value === '.' && calculation[0].indexOf('.') === -1) {
        calculation.push(calculation.pop() + value); 
      } else if (value === 'D') {
        const leftOperand = calculation.pop().slice(0, -1);
        if (leftOperand !== '') {
          calculation.push(leftOperand); 
        }
      }
    } else if (calculation.length === 2) {
      if (value !== '0' && (numbers.includes(value) || value === '.')) {
        calculation.push(value);
      } else if (value === 'D') {
        calculation.pop();
      }
    } else if (calculation.length === 3) {
      if (numbers.includes(value)) {
        calculation.push(calculation.pop() + value);
      } else if (operators.includes(value)) {
        const rightOperand = Number(calculation.pop());
        const operator = calculation.pop();
        const leftOperand = Number(calculation.pop());
        if (operator === '+') {
          calculation.push((leftOperand + rightOperand).toString()); 
        } else if (operator === '-') {
          calculation.push((leftOperand - rightOperand).toString()); 
        } else if (operator === '*') {
          calculation.push((leftOperand * rightOperand).toString()); 
        } else {
          calculation.push((leftOperand / rightOperand).toString()); 
        }
        calculation.push(value);
      } else if (value === '.' && calculation[0].indexOf('.') === -1) {
        calculation.push(calculation.pop() + value); 
      } else if (value === 'D') {
        const leftOperand = calculation.pop().slice(0, -1);
        if (leftOperand !== '') {
          calculation.push(leftOperand); 
        }
      }
    }  
    this.setState({
      calculation: calculation,
    });
  }
}

export default Calculator;
