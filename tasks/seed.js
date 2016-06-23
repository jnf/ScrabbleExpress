var massive = require('massive')
var connectionString = "postgres://localhost/scrabble_express_"
var data = require('../db/seeds/words.json')
var envs = ['dev', 'test']


envs.forEach(function(env) {
  var db = massive.connectSync({ connectionString: connectionString + env })
  for (var record of data) {
    console.log('saved in ' + env + ': ', JSON.stringify(record))
    db.words.saveSync(record)
  }
})

console.log("seeding done!")
process.exit()
