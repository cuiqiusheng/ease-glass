/**
 * @summary 产品
 */
import React, { Component } from 'react'

import style from './style.css'

class Product extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.wrapper}>
        Product
      </div>
    )
  }
}

export default Product
