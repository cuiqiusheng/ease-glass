# REST-API (general)

[TOC]

# 1 HTTP 头 #

HTTP头部至少包括含以下信息:

- `Content-Type`, 必须为 `application/json`
- `X-EG-CLIENT`, 对于网站，必须为 `egwebconsole`

对于用户态接口，HTTP头部需要以下额外字段：

- `X-EG-ACCESS`, 用户登录后生成的 access token
- `X-EG-COMPANY`, 用户的companyId，该ID会在用户登录时候传给前端 

示例如下:

```json
{
  "Content-Type": "application/json",
  "X-EG-ACCESS": "your-access-token",
  "X-EG-CLIENT": "egwebconsole"
}
```

# 2 基础RESTful 接口 #

- 商品相关API，可访问 `/api/egcommodity/XXX`
- 客户相关API，可访问 `/api/egcustomer/XXX`
- 订单相关API，可访问 `/api/egorder/XXX`
- 组织相关API，可访问 `/api/egorg/XXX`
- ... 敬请期待

> 更多API需求，请随时提出，一般保证48小时内提供.

假设操作的对象为 `OrderInStorageCommodity`,

| 操作 | Request Method | 示例 | 备注 |
|:---:|:---------------|:-----|:----|
| 获取数据实体 | GET | `/orderInStorageCommodity/{id}` | - |
| 获取数据列表 | GET | `/orderInStorageCommoditys/{listQuery}` | 注意复数形式的`s`后缀，无论是否符合英文语法/词法 |
| 更新时序数据 | GET | `/orderInStorageCommodityTimeseries/{timeSeriesQuery}` |
| 创建数据实体 | POST | `/orderInStorageCommoditys` | 注意复数形式的`s`后缀，无论是否符合英文语法/词法 |
| 更新数据实体 | PUT | `/orderInStorageCommodity` |
| 删除数据实体 | DELETE | `/orderInStorageCommodity` |

## 2.1 关于 `listQuery`

`listQuery` 非常灵活，目前只是 `==`,  `!=`,  `>`, `<`, `pageStart`, `pageIndex`.

假设操作的对象为 `Item`, `Item` 定义如下:

```json
{
	"id": "xxx",
	"price": 128,
	"soldOut": false,
	"createdAt": 1511298555000
}
```

现假设需要做如下查询：价格在 50~100之间，soldOut 为假，那么我们可以构造一个json字符串：

- `"{\"lt_price\": 101, \"gt_price\": 49}", "ne_soldOut": true}"`
- `"{\"lt_price\": 101, \"gt_price\": 49}", "soldOut": false}"` 也是可以的

过滤规则如下：

- `等于`，直接给出property名
- `不等于`，property名前面添加 `ne_` 前缀
- `大于`，property名前面添加 `gt_` 前缀
- `小于`，property名前面添加 `lt_` 前缀
- `区间`，由`pageStart` 和`pageSize` 来控制，`pageStart` 默认为0，`pageSize`默认为10

## 2.2 关于 `timeSeriesQuery`

与 listQuery 类似，`timeSeriesQuery` 的规则定义如下：

- `field`，需要进行时序聚合的字段名，必须传入.
- `aggregate`，聚合的方法，默认为`SUM`，支持`SUM`, `AVG`, `MIN`, `MAX`, `COUNT`.
- `timeBucket`，时序点的区间大小，必须传入，以秒为单位

假设操作的对象为 `Order`, `Item` 定义如下:

```json
{
	"id": "xxx",
	"product_id": "xxx",
	"createdAt": 1511298555000
}
```

`timeSeriesQuery`为：`"{\"field\": \"product_id\", \"timeBucket\": 86400}"`，返回如下：

```json
{
  "data": [
    {
      "time": 1511298555000,
      "value": 12
    },
    {
      "time": 1511212155000,
      "value": 18
    }
  ],
  "name": "order"
}