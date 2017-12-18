/**
 * @summary 产品项
 */
import React, { Component } from 'react'

import style from './style.css'

class ProductItem extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.wrapper}>
        ProductItem
      </div>
    )
  }
}

export default ProductItem
