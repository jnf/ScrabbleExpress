var Scorer = require('../lib/scrabble_scorer')

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
    var score = ScrabbleController._score(word)
    var locals = ScrabbleController.locals

    locals.word = word
    locals.score = score
    res.render('scored', locals)
  },

  _score: function(word) {
    var scorer = new Scorer()
    return scorer.score(word)
  }
}

module.exports = ScrabbleController
