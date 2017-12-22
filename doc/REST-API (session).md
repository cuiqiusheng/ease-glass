# REST-API (session)

[TOC]

## 注册 `POST /logon`

Payload,

```json
{
    "name": "必须",
    "companyType": "int",
    "loginMobile": "手机号",
    "verifyCode": "手机验证码",
    "password": "密码"
}
```

返回值，

```json
{
    "success": true,
    "message": ""
}
```

## 获取手机校验码 `GET /verifyCode/{phoneNum}`

注意：同一个IP做了限流，两分钟一次是上限。

前端请做好手机号检验。

## 登录 `POST /login`

Payload,

```json
{
    "key": "手机号",
    "password": "..."
}
```

返回值，

```json
{
  "cid": "companyId",
  "uid": "userId",
  "token": "accessToken"
}
```

登录成功后，客户端注意持有`cid` 和 `token`，后续所有的请求都要在HTTP头包含他们。

## 刷新Token `POST /refreshToken`

客户端在登录成功后，需要每隔29分钟往服务器申请token续期。

该接口不需要任何参数，但需要你在HTTP头部填入正确`cid` 和 `token`，续期成功后，服务器会返回一个新的Token，注意不是原来的Token !

## 登出 `DELETE /logout`

同上.
