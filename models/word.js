var app = require('../app')
var db = app.get('db')

function Word() {}

// class functions
Word.find_by_word = function (word, callback) {
  db.words.findOne({ word: word }, callback)
}

if(app.get('env') === 'test') {
  Word.end = function() { db.end() }
}

module.exports = Word
