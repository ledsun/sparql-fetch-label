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

// Test endpoints listed in http://targets.lodqa.org/targets

// QALD-BioMed requires application/sparql-results+json
fetch('http://ep.lodqa.org/qald-biomed/query', 'http://www4.wiwiss.fu-berlin.de/diseasome/resource/genes/SOX10')
  .then(label => console.log('QALD-BioMed: ', label))
  .catch(e => console.error('QALD-BioMed: ', e))

// bio2rdf-mashup
fetch('http://bio2rdf.org/sparql', 'http://bio2rdf.org/omim:131244')
  .then(label => console.log('bio2rdf-mashup: ', label))
  .catch(e => console.error('bio2rdf-mashup: ', e))

// DisGeNET
fetch('http://rdf.disgenet.org/sparql/', 'http://www4.wiwiss.fu-berlin.de/diseasome/resource/genes/SOX10')
  .then(label => console.log('DisGeNET: ', label))
  .catch(e => console.error('DisGeNET: ', e))

// Open-TG-GATEs-test
fetch('https://integbio.jp/rdf/sparql', 'http://purl.jp/bio/101/opentggates/ChemicalCompound/00009')
  .then(label => console.log('Open-TG-GATEs-test: ', label))
  .catch(e => console.error('Open-TG-GATEs-test: ', e))

// ncats-experimental
// commment out because this endpoint does now work
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// fetch('https://ncats-experimental.dumontierlab.com/sparql', 'http://www4.wiwiss.fu-berlin.de/drugbank/resource/targets/49')
//   .then(label => console.log('ncats-experimental: ', label))
//   .catch(e => console.error('ncats-experimental: ', e))
