/**
 * @summary 首页
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import style from './style.css'

class Landing extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={classnames('clearfix', style.header)}>
          <div className={classnames('fl', style.logo)}>LOGO</div>
          <div className={classnames('fr', style.nav)}>
            <div>产品</div>
            <div>关于</div>
            <div>新闻</div>
            <div><Link to="/login">登录</Link></div>
          </div>
        </div>
        <div className={style['part-one']}>1</div>
        <div className={style['part-two']}>2</div>
        <div className={style['part-three']}>3</div>
        <div className={style['part-four']}>4</div>
        <div className={style['part-five']}>5</div>
      </div>
    )
  }
}

export default Landing
