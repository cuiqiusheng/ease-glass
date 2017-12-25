/**
 * @summary 采购
 */
import React, { Component } from 'react'
import { Switch as RouterSwitch, Route } from 'react-router-dom'

import Intention from './components/Intention'
import Store from './components/Store'
import StoreDetail from './components/Store/components/StoreDetail'
import StoreAdd from './components/Store/components/StoreAdd'
import Order from './components/Order'
// import style from './style.css'

class Purchase extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <RouterSwitch>
        <Route path="/purchase/intention" component={Intention} exact />
        <Route path="/purchase/store" component={Store} exact />
        <Route path="/purchase/store/add" component={StoreAdd} exact />
        <Route path="/purchase/store/:id" component={StoreDetail} exact />
        <Route path="/purchase/order" component={Order} exact />
      </RouterSwitch>
    )
  }
}

export default Purchase
