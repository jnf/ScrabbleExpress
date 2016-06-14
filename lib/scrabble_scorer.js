var Scrabble = function () {
  this._scores = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  }

  this.scoreChart = function() { return this._scores }
}

Scrabble.prototype.score = function (word) {
  var total = 0
  var clean = word.toUpperCase().replace(/[^A-Z]/g, '')

  for (var letter of clean) {
    total += this._scores[letter]
  }

  if (clean.length >= 7) {
    total += 50 // point bonus for long words
  }

  return total
}

module.exports = Scrabble
