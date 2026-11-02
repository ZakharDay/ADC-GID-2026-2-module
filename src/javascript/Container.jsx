import React, { PureComponent } from 'react'

import Button from './Button.jsx'
import ToggleButtonSet from './ToggleButtonSet.jsx'

export default class Container extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      toggle1State: 'none',
      toggle2State: 'none'
    }
  }

  handleClick1 = (value) => {
    this.setState({
      toggle1State: value
    })
  }

  handleClick2 = (value) => {
    this.setState({
      toggle2State: value
    })
  }

  render() {
    const { toggle1, toggle2 } = this.props
    const { toggle1State, toggle2State } = this.state

    return (
      <div className="Container">
        <Button
          text="Привет"
          handleClick={() => {
            console.log('Hi')
          }}
        />
        <br />
        <Button
          text="Пока"
          handleClick={() => {
            console.log('Bye')
          }}
        />
        <br />
        <ToggleButtonSet
          title={toggle1.title}
          value={toggle1State}
          options={toggle1.options}
          handleClick={this.handleClick1}
        />
        <br />
        <ToggleButtonSet
          title={toggle2.title}
          value={toggle2State}
          options={toggle2.options}
          handleClick={this.handleClick2}
        />
      </div>
    )
  }
}
