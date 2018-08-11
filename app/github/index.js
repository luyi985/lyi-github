const request = require('superagent');

const query = ` __schema {
    types {
      name
      kind
      description
      fields {
        name
      }
    }
  }`;

module.exports = (req, res) => {
    request
    .get('https://api.github.com/graphql')
    .set('Authorization', `bearer ${process.env.gitToken}`)
    .send({ query: query })
    .then(data => res.json(JSON.parse(data.text)))
}