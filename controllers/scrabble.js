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
    var locals = ScrabbleController.locals

    Word.findOrCreateByWord(word, function (error, result, next) {
      if (error) {
        next(error)
      } else {
        locals.word = result.word
        locals.score = result.score
        
        res.render('scored', locals)       
      }
    })
  }
}

module.exports = ScrabbleController
