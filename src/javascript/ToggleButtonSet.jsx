import React, { PureComponent } from 'react'
import ToggleButton from './ToggleButton.jsx'

export default class ToggleButtonSet extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, options, value, handleClick } = this.props
    const buttonElements = []

    options.forEach((option, i) => {
      buttonElements.push(
        <ToggleButton
          text={option}
          active={option === value}
          handleClick={() => handleClick(option)}
          key={i}
        />
      )
    })

    return (
      <div className="ToggleButtonSet">
        <div className="title">{title}</div>
        <div>{buttonElements}</div>
      </div>
    )
  }
}
