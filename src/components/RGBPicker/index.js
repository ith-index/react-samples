import React, { Component } from 'react'; 
import RGBSlider from './RGBSlider';
import './index.css';

class RGBPicker extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      red: 0, 
      green: 0, 
      blue: 0, 
    };
  }

  render() {
    return (
      <div className='rgb-picker'>
        <div className='sliders'>
          <RGBSlider label='R' value={this.state.red} onChange={event => this.onRedChange(event)} />
          <RGBSlider label='G' value={this.state.green} onChange={event => this.onGreenChange(event)} />
          <RGBSlider label='B' value={this.state.blue} onChange={event => this.onBlueChange(event)} />
        </div>
        <div className='color' style={{backgroundColor: this.generateRGBString()}} />
      </div>
    );
  }

  onRedChange(event) {
    this.setState({
      red: event.target.value,
    });
  }
  
  onGreenChange(event) {
    this.setState({
      green: event.target.value,
    });
  }

  onBlueChange(event) {
    this.setState({
      blue: event.target.value,
    });
  }

  generateRGBString() {
    return `rgb(${this.state.red},${this.state.green},${this.state.blue})`;
  }
}

export default RGBPicker;
