import React from 'react';
import { CountComp } from './Compontents/CountComp';

interface IState {
  num: number
}
export default class App extends React.Component<{}, IState> {
  state = {
    num: 0
  }
  render () {
    return (
      <div>
        <h1>helllo</h1>
        <CountComp num={this.state.num} onChange={(n) => {
          this.setState({
            num: n
          })
        } }></CountComp>
      </div>
    )
  }
}