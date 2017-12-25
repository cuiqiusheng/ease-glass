/**
 * @summary 委外订单
 */
import React, { Component } from 'react'
import { Button, Form, Select, Table } from 'antd'
import classnames from 'classnames'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'

import style from './style.css'

const { Item } = Form
const { Option } = Select

const propTypes = {
  form: object.isRequired
}

const columns = [
  {
    title: '委外订单号',
    dataIndex: 'a',
    render: text => <Link to={`/purchase/order/${text}`}>{text}</Link>
  },
  { title: '配镜单号', dataIndex: 'b' },
  { title: '订做类型', dataIndex: 'c' },
  { title: '供应商', dataIndex: 'd' },
  { title: '状态', dataIndex: 'e' },
  { title: '销售门店', dataIndex: 'f' },
  { title: '配镜时间', dataIndex: 'g' },
  { title: '取镜时间', dataIndex: 'h' }
]

const data = [
  { key: '1', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '', f: '', g: '', h: '' },
  { key: '2', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '', f: '', g: '', h: '' },
  { key: '3', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '', f: '', g: '', h: '' }
]

/* eslint-disable no-console */
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(selectedRows)
  }
}

class Order extends Component {

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
          <div className={classnames('fl')}>委外订单</div>
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
              label="委外订单号"
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
              label="订做类型"
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

Order.propTypes = propTypes

const OrderForm = Form.create()(Order)
export default OrderForm
