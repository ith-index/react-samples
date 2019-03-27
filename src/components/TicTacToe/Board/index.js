import React from 'react';
import './index.css';

const Board = (props) =>
  <div className='board'>
    {
      props.tiles.map(
        (value, index) => {
          return (
            <div className='tile' onClick={_ => props.onTileClick(index)}>
              <span>{value ? value : '?'}</span>
            </div>
          );
        }
      )
    }
  </div>
  ;

export default Board;
