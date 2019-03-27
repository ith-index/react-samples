import React, { Component } from 'react';
import Time from './Time';
import Controls from './Controls';
import './index.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.previouslyElapsedMilliseconds = 0;
    this.state = {
      isStarted: false,
      elapsedMilliseconds: 0,
    };
  }

  render() {
    return (
      <div className='stopwatch'>
        <Time elapsedMilliseconds={this.state.elapsedMilliseconds} />
        <Controls
          isStarted={this.state.isStarted}
          start={_ => this.start()}
          stop={_ => this.stop()}
          reset={_ => this.reset()}
        />
      </div>
    );
  }

  componentWillUnmount() {
    if (this.state.isStarted) {
      clearInterval(this.timerID);
    }
  }

  start() {
    this.setState({
      isStarted: true,
    });
    this.startDatetime = new Date().getTime();
    this.timerID =
      setInterval(
        () => this.tick(),
        10
      );
  }

  stop() {
    clearInterval(this.timerID);
    this.previouslyElapsedMilliseconds = this.calculateElapsedMilliseconds();
    this.setState({
      isStarted: false,
    });
  }

  reset() {
    this.setState({
      isStarted: false,
      elapsedMilliseconds: 0,
    });
    this.previouslyElapsedMilliseconds = 0;
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      elapsedMilliseconds: this.calculateElapsedMilliseconds(),
    })
  }

  calculateElapsedMilliseconds() {
    return this.previouslyElapsedMilliseconds + ((new Date()).getTime() - this.startDatetime);
  }
}

export default Stopwatch;
