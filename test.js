const expect = require('chai').expect
const woerter = require('.')
const they = it

describe('ASCII-woerter', () => {
  they('are in an array', () => {
    expect(woerter).to.be.an('array')
  })

  they('are over 1,500,000 in number', () => {
    expect(woerter.length).to.be.above(1.5 * 1000 * 1000)
  })

  they('can have one letter', () => {
    expect(woerter.filter(word => word.length === 1).length).to.be.above(4)
  })

  they('can have two letters', () => {
    expect(woerter.filter(word => word.length === 2).length).to.be.above(50)
  })

  they('are all lowercase ASCII', () => {
    expect(woerter.every(word => /^[a-z0-9-]*$/.test(word))).to.equal(true)
  })

  they('all have length', () => {
    expect(woerter.every(word => word.length > 0)).to.equal(true)
  })
})
