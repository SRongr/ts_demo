import React from "react"

interface CountCompProp {
  num: number
  onChange?: (n: number) => void
}
interface CountCompState {
  msg: string,
  content: string
}
// export class CountComp extends React.Component<CountCompProp, CountCompState> {
//   state: CountCompState = {
//     msg: '',
//     content: '',
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={() => {
//           if (this.props.onChange) {
//             this.props.onChange(this.props.num - 1) 
//             console.log(this.props.num - 1)
//           }
//         }}>-</button>
//         <span>{this.props.num}</span>
//         <button onClick={() => {
//           if (this.props.onChange) {
//             this.props.onChange(this.props.num - 1)
//           }
//         }}>+</button>
//       </div>
//     )
//   }
// }
export const CountComp: React.FC<CountCompProp> =  function(props) {
  return (
    <div>
      <button onClick={() => {
        if (props.onChange) {
          props.onChange(props.num - 1) 
        }
      }}>-</button>
      <span>{props.num}</span>
      <button onClick={() => {
        if (props.onChange) {
          props.onChange(props.num + 1)
        }
      }}>+</button>
    </div>
  )
}