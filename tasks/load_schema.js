var massive = require('massive')
var connectionString = "postgres://localhost/scrabble_express_"
var envs = ['development', 'test']
var complete = []

envs.forEach(function(env) {
  var db = massive.connectSync({ connectionString: connectionString + env })

  db.setup.schema([], function(err, res) {
    if (err) {
      throw(new Error(err.message))
    }

    console.log("yay " + env + " schema!")
    complete.push(env)

    if (complete.length === envs.length) { process.exit() }
  })  
})
