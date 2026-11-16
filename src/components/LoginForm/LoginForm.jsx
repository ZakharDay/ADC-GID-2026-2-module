import React, { PureComponent } from 'react'
import Input from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'

export default class LoginForm extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { options, handleChangeEmail, handleChangePassword } = this.props
    const { email, password, buttonDisabled } = options

    return (
      <div className="LoginForm">
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          handleChange={handleChangeEmail}
        />
        <br />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          handleChange={handleChangePassword}
        />
        <br />
        <Button
          text="Login"
          disabled={buttonDisabled}
          handleClick={() => console.log('click')}
        />
      </div>
    )
  }
}
