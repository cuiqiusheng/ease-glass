/**
 * @summary 卡片
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class OrgCard extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={classnames('clearfix', style.wrapper)}>
        <div className={classnames('fl', style.left)}>101</div>
        <div className={classnames('fl', style.right)}>
          <div>总库</div>
          <div>库存 销售 运维</div>
          <div>台东一路</div>
          <div>010-123456</div>
        </div>
      </div>
    )
  }
}

export default OrgCard
