import React from "react"
import { ChessTypes } from "../../types/enums"
import './index.less'
interface IProps {
  type: ChessTypes
  handleClickItem?: () => void
}

// export function ChessComp({ type, handleClickItem }: IProps) {
//   let chess = null
//   if (type === ChessTypes.red) {
//     chess = <div className="chess-red chess"></div>
//   }
//   if (type === ChessTypes.black) {
//     chess = <div className="chess-black chess"></div>
//   }
//   return (
//     <div className="chess-box" onClick={() => {
//       if (type === ChessTypes.none && handleClickItem) {
//         handleClickItem()
//       }
//     }}>
//       {chess}
//     </div>
//   )
// }

export class ChessComp extends React.Component<IProps, {}> {
  render () {
    let chess = null
    if (this.props.type === ChessTypes.red) {
      chess = <div className="chess-red chess"></div>
    }
    if (this.props.type === ChessTypes.black) {
      chess = <div className="chess-black chess"></div>
    }
    return (
      <div className="chess-box" onClick={() => {
        if (this.props.type === ChessTypes.none && this.props.handleClickItem) {
          this.props.handleClickItem()
        }
      }}>
        {chess}
      </div>
    )
  }
}