var Word = require('../models/word')

ScrabbleController = {
  locals: {
    title: 'SCRABBLE SCRABBLE SCRABBLE'
  },

  chart: function(req, res) {
    var chart = new Scorer().scoreChart()
    var locals = ScrabbleController.locals

    locals.chart = chart
    res.render('chart', locals)
  },

  scoreForm: function(req, res) {
    res.render('score_form', ScrabbleController.locals)
  },

  scorePost: function(req, res) {
    res.redirect(303, '/scrabble/score/' + req.body.word)
  },

  scoreWord: function(req, res) {
    var word = req.params.word

    Word.findOrCreateByWord(word, function (error, result, next) {
      if (error) {
        next(error)
      } else {
        var locals = ScrabbleController.locals
        locals.word = result.word
        locals.score = result.score
        locals.result = [error, result]
        
        res.render('scored', locals)       
      }
    })
  },

  _score: function(word) {
    var scorer = new Scorer()
    return scorer.score(word)
  }
}

module.exports = ScrabbleController
