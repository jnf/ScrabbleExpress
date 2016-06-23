var app = require('../app')
var db = app.get('db')

function Word(data) {
  this.id = data.id
  this.word = data.word
  this.score = data.score
}

// class functions
Word.findOrCreateByWord = function (word, callback) {
  db.words.findOne({ word: word }, function (error, result) {
    if (error) { callback(error, undefined) }

    if (result) { // already in the db
      var wordInstance = new Word(result)
      callback(null, wordInstance)
    } else { // not in the db
      Word.save(word, callback)
    }
  })
}

Word.save = function (word, callback) {
  var score = app.get('scorer').score(word)

  db.words.save({ word: word, score: score }, function (error, result) {
    if (error) { callback(error, undefined) }
    callback(null, new Word(result))
  })
}

if(app.get('env') === 'test') {
  Word.end = function () { db.end() }
}

module.exports = Word
