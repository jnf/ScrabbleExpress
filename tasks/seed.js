var massive = require('massive')
var connectionString = "postgres://localhost/scrabble_express"
var db = massive.connectSync({connectionString : connectionString})

var data = require('../db/seeds/words.json')
var records = data.length

function checkFinish() {
  db.words.count(function(err, res) {
    console.log("words in db: ", res)
    if (res >= records) { process.exit() }
  })
}

for (var record of data) {
  db.words.save(record, function(err, res) {
    console.log('saved: ', JSON.stringify(res))
    checkFinish()
  })
}

// here's a synchronous version
// for (var record of data) {
//   console.log(record.word, record.score)
//   // { word: "elephant", score: 63 }
//   db.words.saveSync(record)
// }

// console.log("seeding done!")
// process.exit()
