const base = '/api/huashang/'

const abnormal = {
  getSaleAbnormalProduct: 'bi/abnormal/getSaleAbnormalProduct'
}

function joinBase(exports) {
  _.forIn(exports, (val, key) => {
    _.forIn(val, (v, k) => {
      val[k] = base + val[k]
    })
  })

  return exports
}

joinBase({ abnormal })

export { abnormal }
