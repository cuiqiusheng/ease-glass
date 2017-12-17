/**
 * @summary 页面架构
 */
import React, { Component } from 'react'

import Header from 'Components/Header'
import Nav from 'Components/Nav'
import style from './style.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Header />
        <Nav />
        <div>app</div>
      </div>
    )
  }
}

export default App
