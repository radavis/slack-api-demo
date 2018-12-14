const fetch = require('node-fetch')

// const method = 'team.info'
// const method = 'users.list'
// const method = 'users.profile.get'
// const method = 'users.profile.get?user=W1234567890'
// const method = 'team.profile.get'

class Slack {
  constructor(token) {
    this.baseUrl = 'https://slack.com/api'
    this.token = token || process.env.SLACK_OAUTH_TOKEN
  }

  usersPromise() {
    return fetch(`${this.baseUrl}/users.list`, this._options())
      .then(response => response.json())
  }

  _options() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
    }
  }
}

module.exports = Slack
