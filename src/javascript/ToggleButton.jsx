import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class ToggleButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, active, handleClick } = this.props

    const classes = classnames({
      ToggleButton: true,
      active: active
    })

    return (
      <div className={classes} onClick={handleClick}>
        {text}
      </div>
    )
  }
}

// export default class ToggleButton extends PureComponent {
//   constructor(props) {
//     super(props)

//     this.state = {
//       active: false
//     }
//   }

//   handleClick = () => {
//     console.log('click')

//     this.setState({
//       active: !this.state.active
//     })
//   }

//   render() {
//     console.log('render')

//     const { text } = this.props
//     const { active } = this.state

//     const classes = classnames({
//       ToggleButton: true,
//       active: active
//     })

//     return (
//       <div className={classes} onClick={this.handleClick}>
//         {text}
//       </div>
//     )
//   }
// }
