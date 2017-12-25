/**
 * @summary 采购意向单详情
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
  { title: '序号', dataIndex: 'a' },
  { title: '产品', dataIndex: 'b' },
  { title: '本地库存数量', dataIndex: 'c' },
  { title: '需求数量', dataIndex: 'd' }
]

const data = [
  { key: '1', a: '1', b: '镜片', c: '', d: '' },
  { key: '2', a: '2', b: '镜片', c: '', d: '' },
  { key: '3', a: '3', b: '镜片', c: '', d: '' }
]

/* eslint-disable no-console */
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(selectedRows)
  }
}

class IntentionDetail extends Component {

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
            <div className={classnames('fl')}>采购意向单 #{id}</div>
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
                <Button type="primary">答复</Button>
              </Popover>
              <Button>···</Button>
            </div>
          </div>
          <div className={classnames('clearfix', style['info-box'])}>
            <ul className={classnames('fl')}>
              <li><p>单据编号</p><p>PIN2347628346</p></li>
              <li><p>需求类型</p><p>济南</p></li>
              <li><p>需求日期</p><p>隐形眼镜</p></li>
              <li><p>提交部门</p><p>是</p></li>
            </ul>
            <ul className={classnames('fl')}>
              <li><p>制单人</p><p>黄旭</p></li>
              <li><p>单据日期</p><p>2017-10-10</p></li>
              <li><p>备注</p><p>无</p></li>
            </ul>
          </div>
          <div className={classnames(style['info-box'], style['info-box-bottom'])}>
            <ul>
              <li className="clearfix">
                <div className="fl">流程</div>
                <div className="fl">
                  <Steps current={2} className={style.steps} size="small">
                    <Step title="已提交" description="黄旭 济南 2017-10-10" />
                    <Step title="已收到" description="艾福杰尼 总库 2017-10-11" />
                    <Step title="已答复" />
                    <Step title="已完成" />
                  </Steps>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>,

      <div className={style['table-wrapper']} key="2">
        <div className={style['table-title']}>商品详情</div>
        <Table className={style.table} columns={columns} dataSource={data} rowSelection={rowSelection} />
      </div>
    ]
  }
}

IntentionDetail.propTypes = propTypes
export default IntentionDetail
