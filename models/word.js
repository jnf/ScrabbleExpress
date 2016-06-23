var app = require('../app')
var db = app.get('db')

function Word(data) {
  this.id = data.id
  this.word = data.word
  this.score = data.score
}

// class functions
Word.find_by_word = function (word, callback) {
  db.words.findOne({ word: word }, function (error, result) {
    if (error) {
      callback(error, undefined)
    } else {
      // if we have a result, send it to the constructor. else send an empty object
      callback(null, new Word(result || {}))
    }
  })
}

if(app.get('env') === 'test') {
  Word.end = function () { db.end() }
}

module.exports = Word
