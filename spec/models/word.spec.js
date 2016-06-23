var Word = require('../../models/word')

describe('Word', function () {
  afterEach(function() {
    Word.end()
  })

  describe('.find_by_word', function () {
    it('returns one object from the database', function (done) {
      Word.find_or_create_by_word('elephant', function (error, result) {
        expect(error).toBe(null)
        expect(result).toNotBe(null)
        done()
      })
    })

    it('returns an object in the right format', function (done) {
      Word.find_or_create_by_word('elephant', function (error, result) {
        expect(Object.keys(result)).toEqual(['id', 'word', 'score'])
        done()
      })
    })

    it('return an empty instance of Word when it can not find a word', function(done) {
      Word.find_or_create_by_word("jeremy", function(error, result) {
        expect(error).toBe(null)
        expect(result).toNotBe(undefined)
        expect(result instanceof Word).toBeTruthy()

        done()
      })
    })
  })
})
