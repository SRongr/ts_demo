import React from 'react'
import { ChessTypes, GameState} from '../../types/enums'
import { ChessBoxComp } from '../ChessBoxComp'
import './index.less'
interface IState {
  chesses: ChessTypes[]
  gameState: GameState
  nextChess: ChessTypes.red | ChessTypes.black
  width: number,
  currentLenght: number
}

export class GameComp extends React.Component<{}, IState> {
  render () {
    const nextChessIsRed = this.state.nextChess === ChessTypes.red
    return (
      <div className="game">
        <div className="button-group">
          <button className="button" onClick={() => this.handleWidthChange(10)}>10</button>
          <button className="button" onClick={() => this.handleWidthChange(20)}>20</button>
          <button className="button" onClick={() => this.handleWidthChange()}>reStart</button>
        </div>
        {/* <title>{this.state.nextChess}</title> */}
        <div className="head">{ nextChessIsRed ? '红方下棋' : '黑方下棋' }</div>
        <ChessBoxComp 
          chesses={this.state.chesses} 
          isGameOver={this.state.gameState !== GameState.gaming}
          getItemClick={this.handleChessClick.bind(this)}>
          </ChessBoxComp>
      </div>
    )
  }
  state: IState = {
    chesses: [],
    gameState: GameState.gaming,
    nextChess: ChessTypes.red,
    width: 10,
    currentLenght: 0
  }
  componentDidMount (){
    this.init()
  }
  // 初始化数据
  init () {
    console.log(this.state.width)
    const arr = new Array<ChessTypes>(this.state.width * this.state.width)
    arr.fill(ChessTypes.none)
    this.setState({
      chesses: arr,
      nextChess: ChessTypes.red,
      gameState: GameState.gaming
    })
  }
  /**
   * 1. 游戏没有结束
   * 2. 点击的位置没有旗子
   * 3. 切换颜色
   * @param n 旗子的index
   */
  async handleWidthChange (n?: number) {
    const width = n || this.state.width
    await this.setState({
      width
    })
    this.init()
    console.log(this.state)
  }
  handleChessClick (n: number ) {
    const chesses = [...this.state.chesses]
    // console.log(this.state.nextChess)
    // const chesses = this.state.chesses
    chesses[n] = this.state.nextChess
    this.setState((preState) => {
      return {
        chesses,
        nextChess: preState.nextChess === ChessTypes.red ?  ChessTypes.black :  ChessTypes.red,
        gameState: this.getGameState(chesses, n),  // this.setState 是异步函数
        currentLenght: this.state.currentLenght + 1
      }
    })
  }
  getCheckHor(chesses: ChessTypes[], index: number): boolean{
    let sum = 1
    const width = this.state.width
    for (let i = 1; i < 5; i++) {
      if (index % width === 9) {
        break
      }
      if (chesses[index] === chesses[index + i]) {
        sum += 1
      } else {
        break
      }
      if ((index + i) % width === 9) {
        break
      }
    }
    for (let i = 1; i < 5; i ++) {
      if(index % width === 0 ) {
        break
      }
      if (chesses[index] === chesses[index - i]) {
        sum += 1
      } else {
        break
      }
      if ((index - i) % width === 0) {
        break
      }
    }
    // console.log('sum:',sum)
    if (sum === 5) {
      return true
    } else {
      return false
    }
  }
  getCheckVer(chesses: ChessTypes[], index: number): boolean{
    let sum = 1
    const width = this.state.width
    for (let i = 1; i < 5; i++) {
      // if (index % width === 9) {
      //   break
      // }
      if (chesses[index] === chesses[index + i * width]) {
        sum += 1
      } else {
        break
      }
    }
    for (let i = 1; i < 5; i ++) {
      if (chesses[index] === chesses[index - i * width]) {
        sum += 1
      } else {
        break
      }
    }
    if (sum === 5) {
      return true
    } else {
      return false
    }
  }
  getCheckSkim(chesses: ChessTypes[], index: number): boolean{
    let sum = 1
    const width = this.state.width
    console.log(index)
    for (let i = 1; i < 5; i++) {
      // if (index % width === 9) {
      //   break
      // }
      if (chesses[index] === chesses[index + i * width - i]) {
        sum += 1
      } else {
        break
      }
    }
    for (let i = 1; i < 5; i ++) {
      if (chesses[index] === chesses[index - i * width + i]) {
        sum += 1
      } else {
        break
      }
    }
    if (sum === 5) {
      return true
    } else {
      return false
    }
  }
  getCheckRes(chesses: ChessTypes[], index: number): boolean{
    let sum = 1
    const width = this.state.width
    console.log(index)
    for (let i = 1; i < 5; i++) {
      // if (index % width === 9) {
      //   break
      // }
      if (chesses[index] === chesses[index + i * width + i]) {
        sum += 1
      } else {
        break
      }
    }
    for (let i = 1; i < 5; i ++) {
      if (chesses[index] === chesses[index - i * width - i]) {
        sum += 1
      } else {
        break
      }
    }
    if (sum === 5) {
      return true
    } else {
      return false
    }
  }
  // 获取当前的状态
  getGameState (chesses: ChessTypes[], index: number):GameState {
    // 1 判断是否有一方获得胜利
    // 横向判断
    let checkHor = this.getCheckHor(chesses, index)
    // 纵向判断
    let checkVer = this.getCheckVer(chesses, index)
    // 右上到左下
    let checkSkim = this.getCheckSkim(chesses, index)
    // 捺
    let checkRes = this.getCheckRes(chesses, index)
    if (checkHor || checkVer || checkSkim || checkRes) {
      if (chesses[index] === ChessTypes.red) {
        alert('红方胜利')
        return GameState.redWin
      } else {
        alert('黑方胜利')
        return GameState.blackWin
      }
    }
    if (this.state.currentLenght === this.state.width * this.state.width - 1) {
      alert('平局')
      return GameState.equal
    } else {
      return GameState.gaming
    }
  }
}
