# cloud-mirror
cloud-mirror project.

### 目录结构

```
·
├── components                      复用组件
    ├── Header
    └── Nav                         导航
├── containers                      模块容器
    ├── Pandect                     - 总览
    ├── Product                     - 产品
        └── components
            ├── ProductItem         - 产品项
            └── ProductAll          - 所有产品
    ├── Purchase                    - 采购    
        └── components
            ├── Intention           - 采购意向单
            ├── Store               - 采购入库单
            └── Order               - 委外订单
    ├── Sell                        - 销售
    ├── Stock                       - 库存管理
        └── components
            ├── Out                 - 发料出库
            ├── Commit              - 商品调拨
            ├── Adjust              - 库存调整
            ├── Break               - 报损
            ├── Return              - 退货
            └── Check               - 库存盘点
    ├── Client                      - 客户
    ├── Organize                    - 组织
    └── Setting                     - 设置
·
```
