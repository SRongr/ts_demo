import React from 'react'
import { ChessComp } from '../ChessComp'
import { ChessTypes } from '../../types/enums'
import './index.less'
interface IProps {
  chesses: ChessTypes[]
  isGameOver?: boolean
  getItemClick?: (n: number) => void
}
const _defaultProps = { isGameOver: false }
export class ChessBoxComp extends React.Component<IProps> {
  private static defaultProps = _defaultProps
  render () {
    const isGameOver = this.props.isGameOver!
    const chessComps = this.props.chesses.map((type,index)=> {
      return (
        <ChessComp type={type} key={index} handleClickItem={() => {
          if (this.props.getItemClick && !isGameOver) {
            this.props.getItemClick(index)
          }
        }}/>
      )
    })
    return (
      <div className={`board ${this.props.chesses.length === 400 && 'big'} `}>
        {chessComps}
      </div>
    )
  }
}