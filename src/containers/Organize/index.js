/**
 * @summary 组织
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { Button, Dropdown, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import OrgCard from './components/OrgCard'

import style from './style.css'

class Organize extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.operateItemsMenu = (
      <Menu onClick={this.addFormItem}>
        <Menu.Item><Icon type="upload" /><span className={style['operate-item']}>导入</span></Menu.Item>
        <Menu.Item><Icon type="download" /><span className={style['operate-item']}>导出</span></Menu.Item>
        <Menu.Item><Icon type="sync" /><span className={style['operate-item']}>刷新列表</span></Menu.Item>
      </Menu>
    )
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={classnames('clearfix', 'content-header')}>
          <div className={classnames('fl')}>组织</div>
          <div className={classnames('fr')}>
            <Button type="primary"><Link to="/pandect">新增</Link></Button>
            <Dropdown
              overlay={this.operateItemsMenu}
              trigger={[ 'click' ]}
              placement="bottomRight"
            >
              <Button>···</Button>
            </Dropdown>
          </div>
        </div>

        <div className={style['card-box']}>
          <OrgCard />
          <OrgCard />
          <OrgCard />
          <OrgCard />
          <OrgCard />
        </div>
      </div>
    )
  }
}

export default Organize
