# cloud-mirror FrontEnd
> Don't panic!

## 运行环境

  * `node` v9.2.0
  * `npm` v5.6.0

## Getting Started

  * 安装 `node` 和 `npm` 对应版本
  * 在项目根目录下执行 `npm install` 安装所需依赖
  * 执行 `npm start` 在dev模式下启动项目
> Now visit [http://localhost:5090](http://localhost:5090), it works!

## 目录结构说明

  * `dist/` 是项目打包文件夹
  * `src/`  是项目源代码
  * `webpack-config/` 里面是webpack的加载器和插件配置

```
·
├── components                                      - 复用组件
    ├── Header                                      - 页面头部
    ├── Model                                       - component模板
    └── Nav                                         - 导航
├── containers                                      - 模块容器
    ├── Model                                       - container模板
    ├── Pandect                                     - 总览
    ├── Product                                     - 产品
        └── components
            ├── ProductItem                         - 产品项
            └── ProductAll                          - 所有产品
    ├── Purchase                                    - 采购    
        └── components
            ├── Intention                           - 采购意向单
                └── components
                    ├── IntentionAdd                - 新增采购意向单
                    └── IntentionDetail             - 采购意向单详情
            ├── Store                               - 采购入库单
                └── components
                    ├── StoreAdd                    - 新增采购入库单
                    └── StoreDetail                 - 采购入库单详情
            └── Order                               - 委外订单
                └── components
                    └── OrderDetail                 - 委外订单详情
    ├── Sell                                        - 销售
    ├── Stock                                       - 库存管理
        └── components
            ├── Out                                 - 发料出库
            ├── Commit                              - 商品调拨
            ├── Adjust                              - 库存调整
            ├── Break                               - 报损
            ├── Return                              - 退货
            └── Check                               - 库存盘点
    ├── Client                                      - 客户
    ├── Organize                                    - 组织
    └── Setting                                     - 设置
·
```

## Workflow Commands

### 本地5090启动

* 安装依赖: `npm install`
* 启动项目: `npm start`

### 发布上线打包

* 安装依赖: `npm install`
* 便已打包: `npm run build`
