require('dotenv').config()
const fetch = require('node-fetch')
const fs = require('fs')

const options = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.SLACK_OAUTH_TOKEN}`
  }
}

// const method = 'team.info'
// const method = 'users.list'
const method = 'users.profile.get'
// const method = 'users.profile.get?user=W1234567890'
// const method = 'team.profile.get'

fetch(`https://slack.com/api/${method}`, options)
  .then(response => response.json())
  .then(json => {
    const data = JSON.stringify(json, null, 2)
    console.log(data)
    fs.writeFile(`./data/${method}.json`, data, err => console.log(err))
  })
