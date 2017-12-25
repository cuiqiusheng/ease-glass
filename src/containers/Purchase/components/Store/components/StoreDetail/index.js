/**
 * @summary 采购入库单详情
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { Button, Icon, Tabs, Table } from 'antd'
import { object } from 'prop-types'
import style from './style.css'

const { TabPane } = Tabs
const propTypes = {
  match: object.isRequired
}

const columns = [
  { title: '采购单号', dataIndex: 'a' },
  { title: '采购类型', dataIndex: 'b' },
  { title: '供应商', dataIndex: 'c' },
  { title: '状态', dataIndex: 'd' },
  { title: '收入仓位', dataIndex: 'e' },
  { title: '制单人', dataIndex: 'f' },
  { title: '单据日期', dataIndex: 'g' }
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

class StoreDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { match } = this.props
    const { params: { id } } = match
    return [
      <div className={classnames(style.wrapper)} key="1">
        <div className="p20">
          <div className={classnames('clearfix', 'content-header')}>
            <div className={classnames('fl')}>采购入库单 #{id}</div>
            <div className={classnames('fr')}>
              <Button type="primary">提交</Button>
              <Button><Icon type="edit" /></Button>
              <Button>···</Button>
            </div>
          </div>
          <div className={classnames('clearfix', style['info-box'])}>
            <ul className={classnames('fl')}>
              <li><p>单据编号</p><p>PIN2347628346</p></li>
              <li><p>供应商</p><p>济南</p></li>
              <li><p>采购类型</p><p>隐形眼镜</p></li>
              <li><p>收入仓库</p><p>是</p></li>
              <li><p>运单号</p><p>2347664329</p></li>
            </ul>
            <ul className={classnames('fl')}>
              <li><p>制单人</p><p>黄旭</p></li>
              <li><p>单据日期</p><p>2017-10-10</p></li>
              <li><p>备注</p><p>无</p></li>
            </ul>
          </div>
        </div>
      </div>,

      <div className={style['table-wrapper']} key="2">
        <Tabs defaultActiveKey="1">
          <TabPane tab="商品详情" key="1">
            <Table className={style.table} columns={columns} dataSource={data} rowSelection={rowSelection} />
          </TabPane>
          <TabPane tab="商品调拨" key="2">
            <Table className={style.table} columns={columns} dataSource={data} rowSelection={rowSelection} />
          </TabPane>
        </Tabs>
      </div>
    ]
  }
}

StoreDetail.propTypes = propTypes
export default StoreDetail
