# Fetch the label of the url from sparql end points

# Feuture

- Fetch the label of the url from sparql end points
- Use the proxy Server to avoid the Cross-Origin Resource Sharing
- Cache the result of queries

# Usage
## Basic
```js
const fetchLabel = require('sparql-fetch-label')
const fetch = fetchLabel()

fetch('http://rdf.pubannotation.org/sparql', 'http://www4.wiwiss.fu-berlin.de/drugbank/resource/targets/49')
  .then(label => console.log('get label: ', label))
```

=> `get label:  Endothelin B receptor`

## Use proxy
```js
const fetchLabel = require('sparql-fetch-label')
const fetch = fetchLabel()

fetch('http://rdf.pubannotation.org/sparql', 'http://www4.wiwiss.fu-berlin.de/drugbank/resource/targets/49', 'http://myproxy.exaple.com/proxy')
  .then(label => console.log('get label: ', label))
```

# Try

```
npm i
npm start
```
