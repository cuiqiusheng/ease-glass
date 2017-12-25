/**
 * @summary 页面架构
 */
import React, { Component } from 'react'
import { Switch as RouterSwitch, Route } from 'react-router-dom'
import { object } from 'prop-types'
import { Layout } from 'antd'

import Header from 'Components/Header'
import Nav from 'Components/Nav'
import Pandect from 'Containers/Pandect'
import Product from 'Containers/Product'
import Purchase from 'Containers/Purchase'
import Sell from 'Containers/Sell'
import Stock from 'Containers/Stock'
import Client from 'Containers/Client'
import Organize from 'Containers/Organize'
import Setting from 'Containers/Setting'

import style from './style.css'

const { Header: LayoutHeader, Sider: LayoutSider, Content: LayoutContent } = Layout

const propTypes = {
  match: object.isRequired
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <LayoutSider className={style['layout-sider']}>
          <Nav />
        </LayoutSider>
        <Layout className={style['layout-right']}>
          <LayoutHeader className={style['layout-header']}>
            <Header />
          </LayoutHeader>
          <LayoutContent className={style['layout-content']}>
            <RouterSwitch>
              <Route path="/pandect" component={Pandect} exact />
              <Route path="/product" component={Product} />
              <Route path="/purchase" component={Purchase} />
              <Route path="/sell" component={Sell} exact />
              <Route path="/stock" component={Stock} />
              <Route path="/client" component={Client} exact />
              <Route path="/organize" component={Organize} exact />
              <Route path="/setting" component={Setting} exact />
            </RouterSwitch>
          </LayoutContent>
        </Layout>
      </Layout>
    )
  }
}

App.propTypes = propTypes
export default App
