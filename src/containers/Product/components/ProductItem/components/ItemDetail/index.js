/**
 * @summary 产品详情
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

const columnsProduct = [
  { title: '产品代码', dataIndex: 'a' },
  { title: '名称', dataIndex: 'b' },
  { title: '零售价', dataIndex: 'c' },
  { title: '可用库存量', dataIndex: 'd' },
  { title: '操作', dataIndex: 'e' }
]

const columnsStore = [
  { title: '', dataIndex: 'z' },
  { title: '总库', dataIndex: 'a' },
  { title: '台东一路店', dataIndex: 'b' },
  { title: '天桥店', dataIndex: 'c' },
  { title: '李村店', dataIndex: 'd' },
  { title: '合计', dataIndex: 'e' }
]

const columnsSell = [
  { title: '产品代码', dataIndex: 'a' },
  { title: '名称', dataIndex: 'b' },
  { title: '零售价', dataIndex: 'c' },
  { title: '可用库存量', dataIndex: 'd' },
  { title: '操作', dataIndex: 'e' }
]

const data = [
  { key: '1', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '' },
  { key: '2', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '' },
  { key: '3', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '' }
]

const dataStore = [
  { key: '1', z: '可用数量', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '' },
  { key: '2', z: '在途数量', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '' },
  { key: '3', z: '库存总量', a: 'PIN66890', b: '镜片', c: '济南', d: '', e: '' }
]

class ItemDetail extends Component {

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
            <div className={classnames('fl')}>唯尊维尔视高折高防1.78树脂片 #{id}</div>
            <div className={classnames('fr')}>
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
          <TabPane tab="产品信息" key="1">
            <Table className={style.table} columns={columnsProduct} dataSource={data} />
          </TabPane>
          <TabPane tab="库存信息" key="2">
            <Table className={style.table} columns={columnsStore} dataSource={dataStore} />
          </TabPane>
          <TabPane tab="销售情况" key="3">
            <Table className={style.table} columns={columnsSell} dataSource={data} />
          </TabPane>
        </Tabs>
      </div>
    ]
  }
}

ItemDetail.propTypes = propTypes
export default ItemDetail
