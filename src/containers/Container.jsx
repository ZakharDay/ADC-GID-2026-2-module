import React, { PureComponent } from 'react'

import Button from '../components/Button/Button.jsx'
import ToggleButtonSet from '../components/ToggleButtonSet/ToggleButtonSet.jsx'
import LoginForm from '../components/LoginForm/LoginForm.jsx'
import Surface from '../components/Surface/Surface.jsx'

export default class Container extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      toggle1State: 'none',
      toggle2State: 'none',
      loginForm: {
        email: '',
        password: '',
        buttonDisabled: true
      },
      synthVolume: {
        name: 'synthVolume',
        active: false,
        position: [0, 0]
      },
      effectWet: {
        name: 'effectWet',
        active: false,
        position: [100, 100]
      }
    }
  }

  componentDidMount() {
    document.body.addEventListener('mouseup', () => {
      this.handleSurfacesInactive()
    })
  }

  handleSurfaceActive = (name) => {
    const surfaceData = Object.assign({}, this.state[name], { active: true })

    this.setState({
      [`${name}`]: surfaceData
    })
  }

  handleSurfacesInactive = () => {
    const synthVolume = Object.assign({}, this.state.synthVolume, {
      active: false
    })

    const effectWet = Object.assign({}, this.state.effectWet, { active: false })

    this.setState({
      synthVolume,
      effectWet
    })
  }

  handleSurfaceValueChange = (name, position) => {
    const surfaceData = Object.assign({}, this.state[name], {
      position: position
    })

    this.setState({
      [`${name}`]: surfaceData
    })
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

  handleChangeEmail = (value) => {
    const { loginForm } = this.state
    const nextLoginForm = Object.assign({}, loginForm, { email: value })

    if ((value != '') & (this.state.loginForm.password != '')) {
      nextLoginForm.buttonDisabled = false
    } else {
      nextLoginForm.buttonDisabled = true
    }

    this.setState({
      loginForm: nextLoginForm
    })
  }

  handleChangePassword = (value) => {
    const { loginForm } = this.state
    const nextLoginForm = Object.assign({}, loginForm, { password: value })

    if ((value != '') & (this.state.loginForm.email != '')) {
      nextLoginForm.buttonDisabled = false
    } else {
      nextLoginForm.buttonDisabled = true
    }

    this.setState({
      loginForm: nextLoginForm
    })
  }

  render() {
    const { toggle1, toggle2 } = this.props

    const { toggle1State, toggle2State, loginForm, synthVolume, effectWet } =
      this.state

    return (
      <div className="Container">
        <Button
          text="Привет"
          disabled={false}
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
        <br />
        <LoginForm
          options={loginForm}
          handleChangeEmail={this.handleChangeEmail}
          handleChangePassword={this.handleChangePassword}
        />
        <br />
        <section className="EffectsZone">
          <Surface
            name="synthVolume"
            options={synthVolume}
            handleSurfaceActive={this.handleSurfaceActive}
            handleSurfaceValueChange={this.handleSurfaceValueChange}
          />

          <Surface
            name="effectWet"
            options={effectWet}
            handleSurfaceActive={this.handleSurfaceActive}
            handleSurfaceValueChange={this.handleSurfaceValueChange}
          />
        </section>
      </div>
    )
  }
}
