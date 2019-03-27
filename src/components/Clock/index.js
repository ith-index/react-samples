import React, { Component } from 'react';
import './index.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <div className='clock'>
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }

  componentDidMount() {
    this.timerID =
      setInterval(
        () => this.tick(),
        1000
      );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
}

export default Clock;
