import React from 'react'
import { GameState, ChessTypes } from '../../types/enums'
import './index.less'
interface Iprops {
  status: GameState
  nextChess: ChessTypes
}

export class GameStatus extends React.Component<Iprops> {
  render () {
    let content: JSX.Element
    let color: string
    let nextIsRed = this.props.nextChess === ChessTypes.red
    let isRedWin = this.props.status === GameState.redWin
    // if (this.props.status !== GameState.gaming) {
      switch (this.props.status) {
        case GameState.gaming:
          content = <div className={nextIsRed ? 'red' : 'black'}>{nextIsRed ? '红方下棋' : '黑方下棋'}</div>
          break;
        case GameState.equal: 
          content = <div className="border-grey">平局</div>
        // case GameState.blackWin
        default:
          content = <div className={`border ${isRedWin ? 'border-red' : 'border-black'}`}>{isRedWin ? '红方胜利' : '黑方胜利'}</div>
          break;
      }
    // }
    return (
      <div className="head">
        {content}
      </div>
    )
  }
}