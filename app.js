require('dotenv').config()
const fs = require('fs')
const Slack = require('./slack')

let slack = new Slack()

slack.fetchUsers().then(data => console.log(data))
