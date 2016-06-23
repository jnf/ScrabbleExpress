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
    // var db = req.app.get('db')
    var word = req.params.word
    
    // look in the db for the word
    db.words.where("word=$1", [word], function(err, result) {
      var locals = ScrabbleController.locals

      // if we found the word, use it
      if (result.length > 0) {
        var score = result[0].score
      } else { // if we didn't, score it, then send it to the database
        var score = ScrabbleController._score(word)
        // how do I send it to the database?
        db.words.save({ word: word, score: score }, function(err, inserted) {
          //do I care about this callback?
          if (err) { throw new Error(err.message) }
        })
      }

      locals.word = word
      locals.score = score
      locals.result = [err, result]
      
      res.render('scored', locals)  
    })
  },

  _score: function(word) {
    var scorer = new Scorer()
    return scorer.score(word)
  }
}

module.exports = ScrabbleController
