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
      collapsed: false,
      openKeys: [],
      selectedKeys: ''
    }
    this.rootSubmenuKeys = [ 'product', 'purchase', 'stock' ]
  }

  componentWillMount() {
    this.checkSidebarActiveStatus()
  }

  // 点击可展开的菜单项
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [ latestOpenKey ] : []
      })
    }
  }

  // 点击菜单项
  onSelectMenu = (e) => {
    this.setState({ selectedKeys: e.key })
    this.checkSidebarActiveStatus()
  }

  // 校正菜单激活状态
  checkSidebarActiveStatus = () => {
    const { pathname } = window.location
    const subKey = `${pathname.split('/')[1]}`
    this.setState({ selectedKeys: pathname })
    this.setState({ openKeys: [ subKey ] })
  }

  render() {
    return (
      <div className={style.wrapperNav}>
        <div className={style.logo}>LOGO</div>
        <Menu
          mode="inline"
          // theme="dark"
          inlineCollapsed={this.state.collapsed}
          selectedKeys={[ this.state.selectedKeys ]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onClick={this.onSelectMenu}
        >
          <Menu.Item key="/pandect">
            <Link to="/pandect">
              <Icon type="desktop" />
              <span><FormattedMessage id="pandect" /></span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="product"
            title={<span><Icon type="save" /><span><FormattedMessage id="product" /></span></span>}
          >
            <Menu.Item key="/product/item">
              <Link to="/product/item"><FormattedMessage id="product.item" /></Link>
            </Menu.Item>
            <Menu.Item key="/product/all">
              <Link to="/product/all">
                <FormattedMessage id="product.all" />
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="purchase"
            title={<span><Icon type="shopping-cart" /><span><FormattedMessage id="purchase" /></span></span>}
          >
            <Menu.Item key="/purchase/intention">
              <Link to="/purchase/intention">
                <FormattedMessage id="purchase.intention" />
              </Link>
            </Menu.Item>
            <Menu.Item key="/purchase/store">
              <Link to="/purchase/store">
                <FormattedMessage id="purchase.store" />
              </Link>
            </Menu.Item>
            <Menu.Item key="/purchase/order">
              <Link to="/purchase/order">
                <FormattedMessage id="purchase.order" />
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="/sell">
            <Link to="/sell">
              <Icon type="tag-o" />
              <span><FormattedMessage id="sell" /></span>
            </Link>
          </Menu.Item>
          <SubMenu key="stock" title={<span><Icon type="layout" /><span><FormattedMessage id="stock" /></span></span>}>
            <Menu.Item key="/stock/out">
              <Link to="/stock/out">
                <FormattedMessage id="stock.out" />
              </Link>
            </Menu.Item>
            <Menu.Item key="/stock/commit">
              <Link to="/stock/commit">
                <FormattedMessage id="stock.commit" />
              </Link>
            </Menu.Item>
            <Menu.Item key="/stock/adjust">
              <Link to="/stock/adjust">
                <FormattedMessage id="stock.adjust" />
              </Link>
            </Menu.Item>
            <Menu.Item key="/stock/break">
              <Link to="/stock/break">
                <FormattedMessage id="stock.break" />
              </Link>
            </Menu.Item>
            <Menu.Item key="/stock/return">
              <Link to="/stock/return">
                <FormattedMessage id="stock.return" />
              </Link>
            </Menu.Item>
            <Menu.Item key="/stock/check">
              <Link to="/stock/check">
                <FormattedMessage id="stock.check" />
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="/client">
            <Link to="/client">
              <Icon type="user" />
              <span><FormattedMessage id="client" /></span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/organize">
            <Link to="/organize">
              <Icon type="api" />
              <span><FormattedMessage id="organize" /></span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/setting">
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
