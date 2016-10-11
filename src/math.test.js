'use strict'

const math = require('./math')

const assert = require('assert')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('test some basic assertions', () => {

  describe('math object and function', () => {
    it('assert to be object', () => {
      assert.equal(typeof math, 'object');
    })
    it('assert to be function', () => {
      assert.equal(typeof math.isOdd, 'function');
      assert.equal(typeof math.isEven, 'function');
    })
    describe('math.isOdd', () => {
      it('assert to be true', () => {
        assert.equal(math.isOdd(1), true)
      })
    })
    describe('math.isEven', () => {
      it('assert to be true', () => {
        assert.equal(math.isEven(2), true)
      })
    })
  })

})

describe('test some math functions', () => {

  const num = 0

  beforeEach(function() {
    // console.log('num =', num)
  })

  describe('isOdd(): should be an odd number', () => {
    it('with should', () => {
      math.isOdd(1).should.be.true
      math.isOdd(num + 1).should.be.true
    })
    it('with expect', () => {
      expect(math.isOdd(5)).to.be.true
      expect(math.isOdd(num + 9)).to.be.true
    })
  })

  describe('isEven(): should be an even number ', () => {
    it('with should', () => {
      math.isEven(2).should.be.true
      math.isEven(num + 2).should.be.true
    })
    it('with expect', () => {
      expect(math.isEven(8)).to.be.true
      expect(math.isEven(num + 12)).to.be.true
    })
  })

  describe('isFactorialWith(): expect to be the factorial', () => {
    it('with expect', () => {
      expect(math.factorial(3)).to.be.equal(6)
    })
  })

})
