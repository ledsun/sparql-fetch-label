const fetchLabel = require('.')
const fetch = fetchLabel()

fetch('http://rdf.pubannotation.org/sparql', 'http://www4.wiwiss.fu-berlin.de/drugbank/resource/targets/49')
  .then(label => {
    console.log('get label: ', label)

    // Use cache
    fetch('http://rdf.pubannotation.org/sparql', 'http://www4.wiwiss.fu-berlin.de/drugbank/resource/targets/49')
      .then(label => console.log('use cache: ', label))
  })

// without label
fetch('http://rdf.pubannotation.org/sparql', 'http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/possibleDiseaseTarget')
  .then(label => {
    console.log('without label1: ', label)

    // Use cache
    fetch('http://rdf.pubannotation.org/sparql', 'http://www4.wiwiss.fu-berlin.de/drugbank/resource/drugbank/possibleDiseaseTarget')
      .then(label => console.log('without label2: ', label))
  })
