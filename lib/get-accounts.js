const request = require('request-promise')
const config = require('../config')
const { apiUri } = config

module.exports = async function getAccounts(token) {
  const accountUri = `${apiUri}/accounts/${config.customerId}`
  const { items } = await request({
    uri: accountUri,
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
