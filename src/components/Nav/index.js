/**
 * @summary 导航
 */
import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
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
      <div className={style.wrapperNav}>
        <Menu
          defaultSelectedKeys={[ '1' ]}
          defaultOpenKeys={[ '' ]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Link to="/pandect">
              <Icon type="desktop" />
              <span><FormattedMessage id="pandect" /></span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="save" /><span><FormattedMessage id="product" /></span></span>}>
            <Menu.Item key="2">
              <Link to="/product/item"><FormattedMessage id="product.item" /></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/product/all">
                <FormattedMessage id="product.all" />
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="shopping-cart" /><span><FormattedMessage id="purchase" /></span></span>}
          >
            <Menu.Item key="4">
              <Link to="/purchase/intention">
                <FormattedMessage id="purchase.intention" />
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/purchase/store">
                <FormattedMessage id="purchase.store" />
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/purchase/order">
                <FormattedMessage id="purchase.order" />
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="7">
            <Link to="/sell">
              <Icon type="tag-o" />
              <span><FormattedMessage id="sell" /></span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub3" title={<span><Icon type="layout" /><span><FormattedMessage id="stock" /></span></span>}>
            <Menu.Item key="8">
              <Link to="/stock/out">
                <FormattedMessage id="stock.out" />
              </Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link to="/stock/commit">
                <FormattedMessage id="stock.commit" />
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link to="/stock/adjust">
                <FormattedMessage id="stock.adjust" />
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/stock/break">
                <FormattedMessage id="stock.break" />
              </Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Link to="/stock/return">
                <FormattedMessage id="stock.return" />
              </Link>
            </Menu.Item>
            <Menu.Item key="13">
              <Link to="/stock/check">
                <FormattedMessage id="stock.check" />
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="14">
            <Link to="/client">
              <Icon type="user" />
              <span><FormattedMessage id="client" /></span>
            </Link>
          </Menu.Item>
          <Menu.Item key="15">
            <Link to="/organize">
              <Icon type="api" />
              <span><FormattedMessage id="organize" /></span>
            </Link>
          </Menu.Item>
          <Menu.Item key="16">
            <Link to="/setting">
              <Icon type="setting" />
              <span><FormattedMessage id="setting" /></span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Nav
