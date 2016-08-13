'use strict';

const chai = require('chai');
const expect = chai.expect;

describe("Caesar's Cipher", () => {
  const caesar = require('../code/caesar');

  it('should return a string', ()=> {
    expect(caesar('SERR PBQR PNZC')).to.be.a('string');
  });

  it('should decode messages by 13 places', () => {
    expect(caesar('SERR PBQR PNZC')).to.equal('FREE CODE CAMP');
    expect(caesar('SERR CVMMN!')).to.equal('FREE PIZZA!');
  });
});
