//import the function calculateDenominations for writing the tests
//import the assertion library from chai
import { expect } from 'chai';
import { calculateDenominations } from '../src/calculateDenominations.js';


//Test cases
describe('calculateDenominations', ()=>{
    it('Return denominations for given cost and payment', () => {
        expect(calculateDenominations(8000, 5376)).to.deep.equal([ 0, 0, 1, 0, 1, 1, 0, 2, 0, 4]);     
     });
    
      it('Return denominations when payment is equal to cost', () => {
        expect(calculateDenominations(1000, 1000)).to.deep.equal ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      });
    
      it('Return denominations when payment is less than cost', () => {
        expect(calculateDenominations(1000, 2000)).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      });
    
      it('Return zero array ', () => {
        expect(calculateDenominations(0, 0)).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      });

    });
