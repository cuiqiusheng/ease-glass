/**
 * @summary 产品
 */
import React, { Component } from 'react'
import { Switch as RouterSwitch, Route } from 'react-router-dom'

import ProductItem from './components/ProductItem'
import ItemDetail from './components/ProductItem/components/ItemDetail'
import ProductAll from './components/ProductAll'
import style from './style.css'

class Product extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.wrapper}>
        <RouterSwitch>
          <Route path="/product/item" component={ProductItem} exact />
          <Route path="/product/item/:id" component={ItemDetail} exact />
          <Route path="/product/all" component={ProductAll} exact />
        </RouterSwitch>
      </div>
    )
  }
}

export default Product
