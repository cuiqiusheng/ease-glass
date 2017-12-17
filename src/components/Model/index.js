/**
 * @summary 模板组件，新建组件时可复制此文件夹，改名即可
 */
import React, { Component } from 'react'
import style from './style.css'

class Model extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.wrapper}>
        Model
      </div>
    )
  }
}

export default Model
