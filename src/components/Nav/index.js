/**
 * @summary 导航
 */
import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { FormattedMessage } from 'react-intl'
import style from './style.css'

const { SubMenu } = Menu

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Menu
          defaultSelectedKeys={[ '1' ]}
          defaultOpenKeys={[ '' ]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span><FormattedMessage id="pandect" /></span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span><FormattedMessage id="product" /></span></span>}>
            <Menu.Item key="2"><FormattedMessage id="product.item" /></Menu.Item>
            <Menu.Item key="3"><FormattedMessage id="product.all" /></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="mail" /><span><FormattedMessage id="purchase" /></span></span>}>
            <Menu.Item key="4"><FormattedMessage id="purchase.intention" /></Menu.Item>
            <Menu.Item key="5"><FormattedMessage id="purchase.store" /></Menu.Item>
            <Menu.Item key="6"><FormattedMessage id="purchase.ww" /></Menu.Item>
          </SubMenu>
          <Menu.Item key="7">
            <Icon type="pie-chart" />
            <span><FormattedMessage id="sell" /></span>
          </Menu.Item>
          <SubMenu key="sub3" title={<span><Icon type="appstore" /><span><FormattedMessage id="stock" /></span></span>}>
            <Menu.Item key="7"><FormattedMessage id="stock.out" /></Menu.Item>
            <Menu.Item key="8"><FormattedMessage id="stock.commit" /></Menu.Item>
            <Menu.Item key="9"><FormattedMessage id="stock.adjust" /></Menu.Item>
            <Menu.Item key="10"><FormattedMessage id="stock.break" /></Menu.Item>
            <Menu.Item key="11"><FormattedMessage id="stock.return" /></Menu.Item>
            <Menu.Item key="12"><FormattedMessage id="stock.check" /></Menu.Item>
          </SubMenu>
          <Menu.Item key="13">
            <Icon type="pie-chart" />
            <span><FormattedMessage id="client" /></span>
          </Menu.Item>
          <Menu.Item key="14">
            <Icon type="pie-chart" />
            <span><FormattedMessage id="organize" /></span>
          </Menu.Item>
          <Menu.Item key="15">
            <Icon type="pie-chart" />
            <span><FormattedMessage id="setting" /></span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Nav
