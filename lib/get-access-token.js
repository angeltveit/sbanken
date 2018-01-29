const btoa = require('btoa')
const request = require('request-promise')
const config = require('../config')

module.exports = async function getAccessToken() {
  const token = btoa(`${config.clientId}:${config.secret}`)
  const response = await request({
    method: 'POST',
    uri: 'https://api.sbanken.no/identityserver/connect/token',
    json: true,
    form: {
      grant_type: 'client_credentials',
    },
    headers: {
      Authorization: `Basic ${token}`,
      Accept: 'application/json',
    }
  }).catch(err=> {
    console.log(err.message)
  })

  return response.access_token
}
