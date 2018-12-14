require('dotenv').config()
const fs = require('fs')
const Slack = require('./slack')

let slack = new Slack()
// slack.users().then(data => console.log(data))

slack.usersPromise().then(data => console.log(data))
