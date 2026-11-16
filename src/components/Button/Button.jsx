import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, disabled, handleClick } = this.props

    const classes = classnames({
      Button: true,
      disabled: disabled
    })

    return (
      <div className={classes} onClick={handleClick}>
        {text}
      </div>
    )
  }
}
