import React from 'react';
import { CountComp } from './Compontents/CountComp';
import { ChessComp } from './Compontents//ChessComp/index'
import { ChessTypes } from './types/enums'
import { ChessBoxComp } from './Compontents/ChessBoxComp';
import { GameComp } from './Compontents/GameComp';
interface IState {
  num: number
}
export default class App extends React.Component<{}, IState> {
  state = {
    num: 0,
    isGameOver: false
  }
  render () {
    const chesses = [
      ChessTypes.none,
      ChessTypes.red,
      ChessTypes.black,
      ChessTypes.none,
      ChessTypes.red,
      ChessTypes.black,
      ChessTypes.none,
      ChessTypes.red,
      ChessTypes.black,
    ]
    return (
      <div>
        <GameComp ></GameComp>
        {/* <ChessBoxComp chesses={chesses}  getItemClick={(i) => console.log(i)}></ChessBoxComp> */}
        {/* <ChessComp type={ ChessTypes.none } handleClickItem={() => {
          console.log('onclick')
        }}></ChessComp>
        <ChessComp type={ ChessTypes.red }></ChessComp>
        <ChessComp type={ ChessTypes.black }></ChessComp> */}
      </div>
    )
  }
}