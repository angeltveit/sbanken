const request = require('request-promise')
const config = require('../config')
const { apiUri } = config

module.exports = async function getTodaysTransactions(token) {
  const { items } = await request({
    uri: `${apiUri}/transactions/${config.customerId}/${config.account}`,
    qs: {
      startDate: new Date(),
      endDate: new Date(),
    },
    json: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accent: 'application/json',
    },
  }).catch(err=> {
    console.log(err.message)
  })
  return items
}
