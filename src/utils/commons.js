import axios from 'axios'

/* eslint-disable no-console */
// eslint-disable-next-line
const token = 'ElU5DRFbwkVzB4d0gOHNUUJNV6s2vIcJb6dbCHyT3cHCuN0L7P0KRpo3xlLnX4RdTDc42FHYQ8Rq5gxY4rEf67qV8ILePIWhaP5X7jXMZF4VFDpFH7KZKYwy2CZb3V8x'

const noop = () => {}

export function httpGet(url, data = {}, handleRes = noop, handleErr = noop) {
  axios({
    url,
    methos: 'get',
    headers: {
      'X-EG-CLIENT': 'egwebconsole',
      'X-EG-ACCESS': token
    },
    data
  })
    .then((res) => {
      handleRes(res)
    })
    .catch((err) => {
      handleErr(err)
    })
}

export function httpPost(url, data = {}, handleRes = noop, handleErr = noop) {
  axios({
    url: 'aaa',
    methos: 'post',
    headers: {
      'X-EG-CLIENT': 'egwebconsole',
      'X-EG-ACCESS': token
    },
    data
  })
    .then((res) => {
      handleRes(res)
    })
    .catch((err) => {
      handleErr(err)
    })
}
