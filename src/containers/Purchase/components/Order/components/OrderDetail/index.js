/**
 * @summary 委外订单详情
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import { Button, Table, Steps, Popover, Input } from 'antd'
import { object } from 'prop-types'
import style from './style.css'

const { Step } = Steps
const { TextArea } = Input

const propTypes = {
  match: object.isRequired
}

const columns = [
  { title: '产品代码', dataIndex: 'a' },
  { title: '产品名称', dataIndex: 'b' },
  { title: '镜片类型', dataIndex: 'c' },
  { title: '数量', dataIndex: 'd' },
  { title: '球镜', dataIndex: 'e' },
  { title: '柱镜', dataIndex: 'f' },
  { title: '轴向', dataIndex: 'g' },
  { title: '下加光', dataIndex: 'h' },
  { title: '棱镜', dataIndex: 'i' },
  { title: '直径', dataIndex: 'j' },
  { title: '销售备注', dataIndex: 'k' }
]

const data = [
  { key: '1', a: '1', b: '镜片', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '' },
  { key: '2', a: '2', b: '镜片', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '' },
  { key: '3', a: '3', b: '镜片', c: '', d: '', e: '', f: '', g: '', h: '', i: '', j: '', k: '' }
]

class OrderDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visiblePopover: false
    }
  }

  handleVisibleChange = (visible) => {
    this.setState({ visiblePopover: visible })
  }

  render() {
    const { match } = this.props
    const { params: { id } } = match
    return [
      <div className={classnames(style.wrapper)} key="1">
        <div className="p20">
          <div className={classnames('clearfix', 'content-header')}>
            <div className={classnames('fl')}>委外订单 #{id}</div>
            <div className={classnames('fr')}>
              <Popover
                placement="bottomLeft"
                content={
                  <div className={style.popover}>
                    <div><Input placeholder="答复人" /></div>
                    <div><TextArea placeholder="请输入答复" rows={3} /></div>
                    <div>
                      <Button type="primary">确定</Button>
                      <Button>取消</Button>
                    </div>
                  </div>
                }
                trigger="click"
                visible={this.state.visiblePopover}
                onVisibleChange={this.handleVisibleChange}
              >
                <Button type="primary">审核</Button>
              </Popover>
              <Button>···</Button>
            </div>
          </div>
          <div className={classnames('clearfix', style['info-box'])}>
            <ul className={classnames('fl')}>
              <li><p>单据编号</p><p>PIN2347628346</p></li>
              <li><p>定做类型</p><p>镜框</p></li>
              <li><p>配镜单号</p><p>88453786</p></li>
              <li><p>顾客姓名</p><p>黄旭</p></li>
              <li><p>销售门店</p><p>济南</p></li>
              <li><p>配镜时间</p><p>2017-10-10</p></li>
              <li><p>取镜时间</p><p>2017-10-10</p></li>
            </ul>
            <ul className={classnames('fl')}>
              <li><p>供应商</p><p>黄旭</p></li>
              <li><p>收货联系人</p><p>艾福杰尼</p></li>
              <li><p>收货联系电话</p><p>7579976</p></li>
              <li><p>收货地址</p><p>济南</p></li>
            </ul>
          </div>
          <div className={classnames(style['info-box'], style['info-box-bottom'])}>
            <ul>
              <li className="clearfix">
                <div className="fl">流程</div>
                <div className="fl">
                  <Steps current={1} className={style.steps} size="small">
                    <Step title="待审核" description="黄旭 济南 2017-10-10" />
                    <Step title="已审核" description="艾福杰尼 总库 2017-10-11" />
                    <Step title="已收货" />
                  </Steps>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>,

      <div className={style['table-wrapper']} key="2">
        <div className={style['table-title']}>商品详情</div>
        <Table className={style.table} columns={columns} dataSource={data} size="small" />
      </div>
    ]
  }
}

OrderDetail.propTypes = propTypes
export default OrderDetail
