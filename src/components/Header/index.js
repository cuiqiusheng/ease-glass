/**
 * @summary Header
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={classnames('clearfix', style.wrapper)}>
        <div className={classnames('fl', style.logo)}>LOGO</div>
        <div className={classnames('fl', style.header)}>header</div>
      </div>
    )
  }
}

export default Header
