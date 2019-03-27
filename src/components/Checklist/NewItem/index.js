import React, { Component } from 'react';
import './index.css';

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <div className='new-item'>
        <form className='form' onSubmit={event => this.submit(event)}>
          <input 
            className='input-name'
            type='text' 
            placeholder='Name' 
            value={this.state.name} 
            onChange={event => this.editName(event)}
            />
          <input type="submit" value="+" />
        </form>
      </div>
    );
  }

  editName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  submit(event) {
    this.props.addItem(
      this.state.name
    );
    this.setState({
      name: '',
    });
    event.preventDefault();
  }
}

export default NewItem;
