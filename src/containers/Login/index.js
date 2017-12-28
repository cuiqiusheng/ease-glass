/**
 * @summary 登录页面
 */
import React, { Component } from 'react'
import { Button } from 'antd'
import classnames from 'classnames'

import logo from './images/logo.svg'
import style from './style.css'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  onVrfChange = (e) => {
    const { value, className } = e.target
    const reg = new RegExp('^[0-9]*$')
    if (value) {
      if (value.length > 1) {
        e.target.value = value.charAt(0)
      }
      if (reg.test(value)) {
        const index = +className.charAt(className.length - 1)
        if (index < 6) {
          document.querySelector(`.vrf-${index + 1}`).focus()
        }
      } else {
        e.target.value = ''
      }
    }
    e.target.value.replace(/[^\d]/g, '')
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
            <div className={classnames('clearfix', style['input-box'])}>
              <div className="fl">
                <div>电话号码</div>
                <input type="text" />
              </div>
              <button className="fl">发送验证码</button>
            </div>

            <div className={style['verification-box']}>
              <input type="text" className="vrf-1" key="1" onChange={this.onVrfChange} />
              <input type="text" className="vrf-2" key="2" onChange={this.onVrfChange} />
              <input type="text" className="vrf-3" key="3" onChange={this.onVrfChange} />
              <input type="text" className="vrf-4" key="4" onChange={this.onVrfChange} />
              <input type="text" className="vrf-5" key="5" onChange={this.onVrfChange} />
              <input type="text" className="vrf-6" key="6" onChange={this.onVrfChange} />
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
