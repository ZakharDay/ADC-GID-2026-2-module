import React, { PureComponent } from 'react'

import Button from '../components/Button/Button.jsx'
import ToggleButtonSet from '../components/ToggleButtonSet/ToggleButtonSet.jsx'
import LoginForm from '../components/LoginForm/LoginForm.jsx'
import Surface from '../components/Surface/Surface.jsx'

export default class Container extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      effects: [
        {
          name: 'synthVolume',
          active: false,
          position: [0, 0]
        },
        {
          name: 'effectWet',
          active: false,
          position: [100, 100]
        },
        {
          name: 'something',
          active: false,
          position: [50, 50]
        },
        {
          name: 'something2',
          active: false,
          position: [10, 90]
        }
      ]
    }
  }

  componentDidMount() {
    document.body.addEventListener('mouseup', () => {
      this.handleSurfacesInactive()
    })
  }

  handleSurfaceActive = (name) => {
    const effects = structuredClone(this.state.effects)

    effects.forEach((effect) => {
      if (effect.name == name) {
        effect.active = true
      }
    })

    this.setState({
      effects
    })
  }

  handleSurfacesInactive = () => {
    const effects = structuredClone(this.state.effects)

    effects.forEach((effect) => {
      effect.active = false
    })

    this.setState({
      effects
    })
  }

  handleSurfaceValueChange = (name, position) => {
    const effects = structuredClone(this.state.effects)

    effects.forEach((effect) => {
      if (effect.name == name) {
        effect.position = position
      }
    })

    this.setState({
      effects
    })
  }

  render() {
    const { effects } = this.state

    const elements = effects.map((effect) => (
      <Surface
        key={effect.name}
        name={effect.name}
        options={effect}
        handleSurfaceActive={this.handleSurfaceActive}
        handleSurfaceValueChange={this.handleSurfaceValueChange}
      />
    ))

    // const elements = []

    // effects.forEach((effect) => {
    //   const { name } = effect

    //   elements.push(
    //     <Surface
    //       key={name}
    //       name={name}
    //       options={effect}
    //       handleSurfaceActive={this.handleSurfaceActive}
    //       handleSurfaceValueChange={this.handleSurfaceValueChange}
    //     />
    //   )
    // })

    return (
      <div className="Container">
        <section className="EffectsZone">{elements}</section>
      </div>
    )
  }
}
