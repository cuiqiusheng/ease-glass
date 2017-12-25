/**
 * @summary Header
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { Icon, Input } from 'antd'

import style from './style.css'

const { Search } = Input

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  /* eslint-disable no-console */
  render() {
    return (
      <div className={style.wrapper}>
        <div className={classnames('clearfix', style.header)}>
          <div className={classnames('fl', style['header-left-box'])}>
            <div><Icon type="plus-circle" /></div>
            <div><Icon type="clock-circle-o" /></div>
            <div>
              <Search
                placeholder="请输入搜索内容"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
            </div>
          </div>
          <div className={classnames('fr', style['header-right-box'])}>
            <div><Icon type="bell" /></div>
            <div><Icon type="user" /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
