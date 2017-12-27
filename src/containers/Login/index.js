/**
 * @summary 登录页面
 */
import React, { Component } from 'react'

import logo from './images/logo.svg'
import style from './style.css'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style['login-form-box']}>
          <div className={style['logo-box']}>
            <img src={logo} alt="" />
            <div className={style.title}>云镜</div>
            <p>用心做好镜</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
