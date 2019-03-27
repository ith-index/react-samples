import React, { Component } from 'react';
import './index.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
    }
  }
  
  render() {
    return (
      <div className='counter'>
        <div className='currentValue'><span>{this.state.currentValue}</span></div>
        <button className='control' disabled={this.state.currentValue === 0} onClick={_ => this.decrement()}>--</button>
        <button className='control' onClick={_ => this.increment()}>++</button>
      </div>
    );
  }
  
  decrement() {
    this.setState({
      currentValue: Math.max(0, this.state.currentValue - 1),
    });
  }

  increment() {
    this.setState({
      currentValue: this.state.currentValue + 1,
    });
  }
}

export default Counter;
