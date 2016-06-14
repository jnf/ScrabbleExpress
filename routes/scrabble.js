var express = require('express');
var router = express.Router();
var Controller = require('../controllers/scrabble')

router.get('/', function(req, res) {
  res.json({scrabble: 'yes'})
})

router.get('/chart', Controller.chart)
router.get('/score', Controller.scoreForm)
router.post('/score', Controller.scorePost)
router.get('/score/:word', Controller.scoreWord)

module.exports = router
