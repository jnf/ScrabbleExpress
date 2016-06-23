var app = require('../app')
var db = app.get('db')

function Word() {}

Word.find_by_word = function (word, callback) {
  db.words.findOne({ word: word }, callback)
}

module.exports = Word
