var Word = require('../../models/word')

describe('Word', function () {
  afterEach(function() {
    Word.end()
  })

  describe('.findOrCreateByWord', function () {
    it('returns one object from the database', function (done) {
      Word.findOrCreateByWord('elephant', function (error, result) {
        expect(error).toBe(null)
        expect(result).toNotBe(null)
        done()
      })
    })

    it('returns an object in the right format', function (done) {
      Word.findOrCreateByWord('elephant', function (error, result) {
        expect(Object.keys(result)).toEqual(['id', 'word', 'score'])
        done()
      })
    })

    it('always returns an instance of Word', function(done) {
      Word.findOrCreateByWord('jeremy', function(error, result) {
        expect(error).toBe(null)
        expect(result).toNotBe(undefined)
        expect(result instanceof Word).toBeTruthy()

        done()
      })
    })
  })
})
