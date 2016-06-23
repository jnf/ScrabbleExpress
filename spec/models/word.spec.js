var Word = require('../../models/word')

describe('Word', function () {
  afterEach(function() {
    Word.end()
  })

  describe('.find_by_word', function () {
    it('returns one object from the database', function (done) {
      Word.find_by_word('elephant', function (error, result) {
        console.log(result)
        expect(error).toBe(null)
        expect(result).toNotBe(null)
        done()
      })
    })

    it('returns an object in the right format', function (done) {
      Word.find_by_word('elephant', function (error, result) {
        expect(Object.keys(result)).toEqual(['id', 'word', 'score'])
        done()
      })
    })
  })
})
