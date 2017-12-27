/**
 * @summary 发料出库
 */
import React, { Component } from 'react'
import { Button, Form, Select, Table } from 'antd'
import classnames from 'classnames'
import { object } from 'prop-types'
// import { Link } from 'react-router-dom'

import style from './style.css'

const { Item } = Form
const { Option } = Select

const propTypes = {
  form: object.isRequired
}

const columns = [
  {
    title: '配镜单号',
    dataIndex: 'a'
  },
  { title: '配镜类型', dataIndex: 'b' },
  { title: '状态', dataIndex: 'c' },
  { title: '顾客姓名', dataIndex: 'd' },
  { title: '销售门店', dataIndex: 'e' },
  { title: '配镜时间', dataIndex: 'f' },
  { title: '取镜时间', dataIndex: 'g' }
]

const data = [
  { key: '1', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '', f: '', g: '' },
  { key: '2', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '', f: '', g: '' },
  { key: '3', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '', f: '', g: '' }
]

/* eslint-disable no-console */
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(selectedRows)
  }
}

class Out extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 }
    }

    return (
      <div className={style.wrapper}>
        <div className={classnames('clearfix', 'content-header')}>
          <div className={classnames('fl')}>发料出库</div>
          <div className={classnames('fr')}>
            <Button>···</Button>
          </div>
        </div>

        <div className={style['form-box']}>
          <Form
            className={style.form}
            layout="inline"
          >
            <Item
              {...formItemLayout}
              label="配镜单号"
            >
              {getFieldDecorator('select', {
                initialValue: ''
              })(
                <Select placeholder="Please select a country">
                  <Option value="china">China</Option>
                  <Option value="use">U.S.A</Option>
                </Select>
              )}
            </Item>
            <Item
              {...formItemLayout}
              label="配镜类型"
            >
              {getFieldDecorator('select', {
                initialValue: ''
              })(
                <Select placeholder="Please select a country">
                  <Option value="china">China</Option>
                  <Option value="use">U.S.A</Option>
                </Select>
              )}
            </Item>
            <Item
              {...formItemLayout}
              label="状态"
            >
              {getFieldDecorator('select', {
                initialValue: ''
              })(
                <Select placeholder="Please select a country">
                  <Option value="china">China</Option>
                  <Option value="use">U.S.A</Option>
                </Select>
              )}
            </Item>
            <Item
              {...formItemLayout}
              label="顾客姓名"
            >
              {getFieldDecorator('select', {
                initialValue: ''
              })(
                <Select placeholder="Please select a country">
                  <Option value="china">China</Option>
                  <Option value="use">U.S.A</Option>
                </Select>
              )}
            </Item>
          </Form>
          <div className={style['add-condition']}>
            <span>+ 添加筛选条件</span>
          </div>
        </div>

        <Table className={style.table} columns={columns} dataSource={data} rowSelection={rowSelection} />
      </div>
    )
  }
}

Out.propTypes = propTypes

const OutForm = Form.create()(Out)
export default OutForm
