const fetchLabel = require('.')

fetchLabel('http://rdf.pubannotation.org/sparql', 'http://www4.wiwiss.fu-berlin.de/diseasome/resource/diseasome/genes')
  .then(label => console.log(label))
