const aritGeo = require('../aritgeo').aritGeo;
const expect = require('chai').expect;

// fat arrows are strongly discouraged by the mocha
// see documentation


// aritGeo Test Suite
describe('aritGeo suite', () => {
  it('should return arithmetic for arrray of A.P',() => {
       expect(aritGeo([2,4,6,8])).to.equal("arithmetic");
    })

  it('should return geometric for an array of G.P',() => {
       expect(aritGeo([2,6,18,54])).to.equal("geometric");
    })

  it('should return 0 for empty list',() => {
       expect(aritGeo([])).to.equal(0);
    })

  it('should return -1 for a random string',() => {
       expect(aritGeo("randomString")).to.equal(-1);
    })

  it('should return -1 for a an array of strings',() => {
       expect(aritGeo(["list", "of", "strings"])).to.equal(-1);
    })

  it('should return -1 for an array of strings and numbers',() => {
       expect(aritGeo(["a", 1, "b", 2])).to.equal(-1);
    })

  it('should return -1 for an array of positive and negative numbers',() => {
       expect(aritGeo([1,2,-1,-2])).to.equal(-1);
    })

  it('should return -1 for an array that contains both A.P and G.P numbers',() => {
       expect(aritGeo([2,4,6,2,6,18])).to.equal(-1);
    })

  it('should return -1 for an array of numbers in arithmetic progression except 1',() => {
       expect(aritGeo([2,4,6,8,9])).to.equal(-1);
    })
    // asert that a list of zeros is an arithmetic progression
  it('should return arithmetic for a list of zero arrays',() => {
       expect(aritGeo([0,0,0,0])).to.equal("arithmetic"); }) 
})
