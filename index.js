const superagent = require('superagent')
const pify = require('superagent-promise')

const request = pify(superagent, Promise)

module.exports = function() {
  const cache = new Map()
  const withoutLabel = new Set()

  return function(endpoint, url, proxy) {
    if (cache.has(`${endpoint}:${url}`)) {
      return Promise.resolve(cache.get(`${endpoint}:${url}`))
    }

    if (withoutLabel.has(`${endpoint}:${url}`)) {
      return Promise.resolve()
    }

    return fetch(endpoint, url, proxy, cache, withoutLabel)
  }
}

function fetch(endpoint, url, proxy, cache, withoutLabel) {
  const query = `select ?label where { <${url}>  rdfs:label ?label }`
    // encodeURI does not encode #.
  let requestUrl = `${endpoint}?query=${encodeURIComponent(query) }`

  if (proxy) {
    requestUrl = `${proxy}?endpoint=${endpoint}&query=${encodeURIComponent(query)}`
  }

  return request
    .get(requestUrl)
    .set('Accept', 'application/sparql-results+json')
    .end()
    .then((res) => res.body)
    .then((result) => {
      if (result.results.bindings[0]) {
        const label = result.results.bindings[0].label.value

        // Cache result
        cache.set(`${endpoint}:${url}`, label)
        return label
      }

      withoutLabel.add(`${endpoint}:${url}`)
    })
}
