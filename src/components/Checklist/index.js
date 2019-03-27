import React, { Component } from 'react';
import Item from './Item';
import NewItem from './NewItem';
import EditItem from './EditItem';
import './index.css';

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      items: [
        ['Foo', true],
        ['Bar', false],
        ['Baz', false],
      ]
    }
  }
  
  render() {
    return (
      <div className='checklist'>
        <div className='header'>
          <span className='name'>{this.props.name}</span>
          {this.renderEditDoneButton()}
        </div>
        <NewItem addItem={name => this.addItem(name)}/>
        <div className='items'>
          {this.renderItems()}
        </div>
      </div>
    );
  }

  renderEditDoneButton() {
    let text = 'E';
    if (this.state.editing) {
      text = 'D';
    }
    return <button onClick={_ => this.toggleEditing()}>{text}</button>;
  }


  renderItems() {
    if (this.state.editing) {
      return this.state.items.map(
        (item, index) => 
          <EditItem 
            name={item[0]} 
            updateName={this.generateUpdateName(index)}
            deleteItem={_ => this.deleteItem(index)}
          />
      );
    } else {
      return this.state.items.map(
        (item, index) => 
          <Item 
            name={item[0]} 
            checked={item[1]} 
            checkItem={_ => this.checkItem(index)}
          />
      );
    }
  }

  toggleEditing() {
    this.setState({
      editing: !this.state.editing,
    });
  }

  addItem(name) {
    const items = this.state.items;
    items.splice(0, 0, [name, false]);
    this.setState({
      items: items,
    });
  }

  generateUpdateName(index) {
    return (name) => {
      const items = this.state.items;  
      items[index][0] = name;
      this.setState({
        items: items,
      });
    }
  }

  checkItem(index) {
    const items = this.state.items;
    items[index][1] = !items[index][1];
    this.setState({
      items: items,
    });
  }

  deleteItem(index) {
    const items = this.state.items;
    items.splice(index, 1);
    this.setState({
      items: items,
    });
  }
}
export default Checklist;
