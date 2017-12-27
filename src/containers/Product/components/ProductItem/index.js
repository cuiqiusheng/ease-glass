/**
 * @summary 产品项
 */
import React, { Component } from 'react'
import { Button, Form, Select, Table, Menu, Dropdown, Message, Icon } from 'antd'
import classnames from 'classnames'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import style from './style.css'

const { Item } = Form
const { Option } = Select

const propTypes = {
  form: object.isRequired
}

const columns = [
  { title: '图片', dataIndex: 'a' },
  {
    title: '产品名称',
    dataIndex: 'b',
    render: text => <Link to={`/product/item/${text}`}>{text}</Link>
  },
  { title: '产品类别', dataIndex: 'c' },
  { title: '供应商', dataIndex: 'd' },
  { title: '含税成本价', dataIndex: 'e' },
  { title: '零售价', dataIndex: 'f' },
  { title: '创建时间', dataIndex: 'g' }
]

const data = [
  { key: '1', a: 'PIN66890', b: '镜片1', c: '济南', d: '', e: '', f: '', g: '' },
  { key: '2', a: 'PIN66890', b: '镜片2', c: '济南', d: '', e: '', f: '', g: '' },
  { key: '3', a: 'PIN66890', b: '镜片3', c: '济南', d: '', e: '', f: '', g: '' }
]

const alternativeFormItems = [
  { key: 'a', value: '供应商' },
  { key: 'b', value: '仓库名称' },
  { key: 'c', value: '商品状态' }
]

/* eslint-disable no-console */
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(selectedRows)
  }
}

class ProductItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      extraFormItem: []
    }
    this.formItemsMenu = (
      <Menu onClick={this.addFormItem}>
        {
          _.isArray(alternativeFormItems) ?
            alternativeFormItems.map(i => <Menu.Item key={i.key} value={i.value}><a>{i.value}</a></Menu.Item>) :
              <Menu.Item><a>暂无可选项</a></Menu.Item>
        }
      </Menu>
    )
    this.operateItemsMenu = (
      <Menu onClick={this.addFormItem}>
        <Menu.Item><Icon type="upload" /><span className={style['operate-item']}>导入</span></Menu.Item>
        <Menu.Item><Icon type="download" /><span className={style['operate-item']}>导出</span></Menu.Item>
        <Menu.Item><Icon type="sync" /><span className={style['operate-item']}>刷新列表</span></Menu.Item>
      </Menu>
    )
  }

  addFormItem = (item) => {
    const { extraFormItem } = this.state
    let has = false
    extraFormItem.forEach((i) => {
      if (i.key === item.key) {
        has = true
      }
    })
    if (has) {
      Message.warning('已存在此筛选条件')
    } else {
      this.setState({
        extraFormItem: extraFormItem.concat([ { key: item.key, value: item.item.props.value } ])
      })
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { extraFormItem } = this.state
    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 }
    }

    return (
      <div className={style.wrapper}>
        <div className={classnames('clearfix', 'content-header')}>
          <div className={classnames('fl')}>产品项</div>
          <div className={classnames('fr')}>
            <Button type="primary"><Link to="/purchase/intention/add">新增</Link></Button>
            <Dropdown
              overlay={this.operateItemsMenu}
              trigger={[ 'click' ]}
              placement="bottomRight"
            >
              <Button>···</Button>
            </Dropdown>
          </div>
        </div>

        <div className={style['form-box']}>
          <Form
            className={style.form}
            layout="inline"
          >
            <Item
              {...formItemLayout}
              label="产品名称"
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
              label="产品类别"
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
              label="供应商"
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
              label="零售价"
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
            {
              extraFormItem.map(i => (
                <Item
                  key={i.key}
                  {...formItemLayout}
                  label={i.value}
                >
                  {getFieldDecorator(i.key, {
                    initialValue: ''
                  })(
                    <Select placeholder="Please select a country">
                      <Option value="china">China</Option>
                      <Option value="use">U.S.A</Option>
                    </Select>
                  )}
                </Item>
              ))
            }
          </Form>
          <div className={style['add-condition']}>
            <Dropdown
              overlay={this.formItemsMenu}
              trigger={[ 'click' ]}
            >
              <span>+ 添加筛选条件</span>
            </Dropdown>
          </div>
        </div>

        <Table className={style.table} columns={columns} dataSource={data} rowSelection={rowSelection} />
      </div>
    )
  }
}

ProductItem.propTypes = propTypes

const ProductItemForm = Form.create()(ProductItem)
export default ProductItemForm
