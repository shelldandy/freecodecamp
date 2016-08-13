const chai = require('chai')
const expect = chai.expect


describe('Roman Numeral Converter', () => {
  const roman = require('../code/romanNumeral')

  it('should return a number', () => {
    expect(roman(5)).to.be.a('number')
  })

  it('should transform roman numbers', () => {
    expect(roman(2)).to.equal('II')
    expect(roman(5)).to.equal('V')
    expect(roman(25)).to.equal('XXV')
    expect(roman(60)).to.equal('LX')
    expect(roman(1000)).to.equal('M')
    expect(roman(1999)).to.equal('MCMXCIX')
  })
})
