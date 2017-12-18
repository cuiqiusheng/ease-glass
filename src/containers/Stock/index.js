/**
 * @summary 库存
 */
import React, { Component } from 'react'
import { Switch as RouterSwitch, Route } from 'react-router-dom'

import Out from './components/Out'
import Commit from './components/Commit'
import Adjust from './components/Adjust'
import Break from './components/Break'
import Return from './components/Return'
import Check from './components/Check'
import style from './style.css'

class Stock extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.wrapper}>
        <RouterSwitch>
          <Route path="/stock/out" component={Out} exact />
          <Route path="/stock/commit" component={Commit} exact />
          <Route path="/stock/adjust" component={Adjust} exact />
          <Route path="/stock/break" component={Break} exact />
          <Route path="/stock/return" component={Return} exact />
          <Route path="/stock/check" component={Check} exact />
        </RouterSwitch>
      </div>
    )
  }
}

export default Stock
