const {encrypt} = require('../main.js')
require('chai').should();

describe('Testing Encrypt-module', () => {
    it('Should encrypt a normal text to Rövarspråket ', () => {

        encrypt('Ost').should.equal("Osostot");

        encrypt('Ost').should.be.a('String');

        encrypt('').should.equal('');

        encrypt('29058&&/!###').should.equal('29058&&/!###');
        
    })
});