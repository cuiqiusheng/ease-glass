function getApiPath(url) {
  // return `///${window.location.host}${url}`
  // return `http://t.easeglass.com/api${url}`
  return `/api${url}`
}

const apiMap = {
  test: getApiPath('/test'),
  aaa: getApiPath('/egcommodity/commodityConsumableItemInfo/3')
}

export default apiMap
