import React, { Component } from 'react';
import Board from './Board'
import './index.css';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [null, null, null, null, null, null, null, null, null],
      moveCount: 0,
      winResult: null,
    }
  }

  render() {
    return (
      <div className='tic-tac-toe'>
        <div className='game-status'>
          {this.renderGameStatus()}
        </div>
        <Board tiles={this.state.tiles} onTileClick={index => this.onTileClick(index)} />
        <button onClick={_ => this.restart()}>Restart</button>
      </div>
    );
  }

  renderGameStatus() {
    return this.state.winResult ?
      <span>{this.state.winResult}</span>
      :
      <span>{this.currentMovePiece()}'s Turn</span>
  }

  currentMovePiece() {
    return this.state.moveCount % 2 === 0 ? 'X' : 'O';
  }

  onTileClick(index) {
    if (!this.state.winResult) {
      const tiles = this.state.tiles.slice();
      const moveCount = this.state.moveCount + 1;
      tiles[index] = this.currentMovePiece(); 
      this.setState({
        tiles: tiles,
        moveCount: moveCount,
        winResult: this.calculateResult(tiles, moveCount),
      });
    }
  }

  calculateResult(tiles, moveCount) {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < wins.length; i++) {
      const win = wins[i];
      if (tiles[win[0]] && tiles[win[0]] === tiles[win[1]] && tiles[win[0]] === tiles[win[2]]) {
        return `${tiles[win[0]]} Won`;
      }
    }
    if (moveCount === 9) {
      return 'Tie';
    }
    return null;
  }

  restart() {
    this.setState({
      tiles: [null, null, null, null, null, null, null, null, null],
      moveCount: 0,
      winResult: null,
    });
  }
}

export default TicTacToe;
