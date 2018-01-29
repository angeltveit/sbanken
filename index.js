const { getAccessToken, getTodaysTransactions } = require('./lib')
const moment = require('moment')

async function run() {
  const accessToken = await getAccessToken()
  const today = await getTodaysTransactions(accessToken)

  let total = 0
  today.forEach(item=> {
    if(moment().isSame(item.registrationDate, 'day')) {
      total += Math.abs(item.amount)
    }
  })

  console.log('Forbruk hittil i dag: ', total, 'kr')
}

run()
