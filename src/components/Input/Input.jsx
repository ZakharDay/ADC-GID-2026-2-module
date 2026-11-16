import React, { PureComponent } from 'react'

export default class Input extends PureComponent {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleChange = () => {
    const { handleChange } = this.props
    const value = this.input.current.value
    handleChange(value)
  }

  render() {
    const { type, placeholder, value } = this.props

    return (
      <input
        ref={this.input}
        className="Input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
      />
    )
  }
}
