const fetchLabel = require('.')
const fetch = fetchLabel()

fetch('http://rdf.pubannotation.org/sparql', 'http://www4.wiwiss.fu-berlin.de/drugbank/resource/targets/49')
  .then(label => console.log(label))

// Use cache
fetch('http://rdf.pubannotation.org/sparql', 'http://www4.wiwiss.fu-berlin.de/drugbank/resource/targets/49')
  .then(label => console.log(label))
