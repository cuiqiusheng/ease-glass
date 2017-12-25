/**
 * @summary 新增采购入库单
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { Form, Select, Row, Col, Table, Input, Icon, Button } from 'antd'
import { object, string, func } from 'prop-types'
import _ from 'lodash'
import style from './style.css'

const { Item } = Form
const { Option } = Select
const propTypes = {
  form: object.isRequired
}
const propTypesEditableCell = {
  value: string.isRequired,
  onChange: func.isRequired
}

const EditableCell = ({ value, onChange }) => (
  <div>
    <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
  </div>
)

EditableCell.propTypes = propTypesEditableCell

class StoreAdd extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: [ { key: '1', a: 'PIN66890', b: '镜片', c: '济南', d: '' } ]
    }
    this.columns = [
      { title: '产品', dataIndex: 'a', render: (text, record) => this.renderColumns(text, record, 'a') },
      { title: '产品条码', dataIndex: 'b', render: (text, record) => this.renderColumns(text, record, 'b') },
      { title: '库存数量', dataIndex: 'c', render: (text, record) => this.renderColumns(text, record, 'c') },
      { title: '采购数量', dataIndex: 'd', render: (text, record) => this.renderColumns(text, record, 'd') },
      {
        title: '',
        dataIndex: 'e',
        render: (text, record) => (
          <Icon
            type="close-circle-o"
            onClick={() => this.removeRow(record)}
            style={{ color: '#f57788', cursor: 'pointer' }}
          />
        )
      }
    ]
    this.initKey = 999
  }

  // 添加一行
  addNewRow = () => {
    const { dataSource } = this.state
    this.setState({
      dataSource: dataSource.concat({ key: `${this.initKey}`, a: '', b: '', c: '', d: '' })
    })
    this.initKey += 1
  }

  // 删除一行
  removeRow = (record) => {
    const { dataSource } = this.state
    _.remove(dataSource, n => n.key === record.key)
    this.setState({
      dataSource
    })
  }

  renderColumns(text, record, column) {
    return (
      <EditableCell
        value={text}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    )
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 }
    }
    const formItemLayoutAlone = {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 }
    }
    return (
      <div className={style.wrapper}>
        <div className={classnames('clearfix', 'content-header', 'p20')}>
          <div className={classnames('fl')}>新增采购入库单</div>
        </div>
        <Form className={style.form}>
          <Row>
            <Col span={24}>
              <Item
                {...formItemLayoutAlone}
                label="单据编号"
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
            </Col>
          </Row>
          <Row>
            <Col span={8}>
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
            </Col>
            <Col span={8}>
              <Item
                {...formItemLayout}
                label="采购类型"
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
            </Col>
            <Col span={8}>
              <Item
                {...formItemLayout}
                label="收入仓库"
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
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Item
                {...formItemLayout}
                label="运单号"
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
            </Col>
            <Col span={8}>
              <Item
                {...formItemLayout}
                label="制单人"
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
            </Col>
            <Col span={8}>
              <Item
                {...formItemLayout}
                label="单据日期"
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
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Item
                {...formItemLayoutAlone}
                label="备注"
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
            </Col>
          </Row>
        </Form>

        <Table className={style.table} columns={this.columns} dataSource={this.state.dataSource} pagination={false} />
        <div className={style['add-new-row']}><a onClick={this.addNewRow} role="button">+ 添加另一行</a></div>

        <div className={style['btn-box']}>
          <Button type="primary">保存</Button>
          <Button type="primary">保存并提交</Button>
          <Button>取消</Button>
        </div>
      </div>
    )
  }
}

StoreAdd.propTypes = propTypes
const StoreAddForm = Form.create()(StoreAdd)
export default StoreAddForm
