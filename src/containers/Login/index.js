/**
 * @summary 登录页面
 */
import React, { Component } from 'react'
import { Button } from 'antd'

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
          
          <div className={style['bottom-box']}>
            <div className={style['input-box']}>
              <input type="text" />
              <button>发送验证码</button>
            </div>

            <div className={style['verification-box']}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>

            <div className={style['btn-box']}><Button type="primary">提交</Button></div>

            <div className={style['tip-box']}>电话不可用？<a>其他登录方式</a></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
