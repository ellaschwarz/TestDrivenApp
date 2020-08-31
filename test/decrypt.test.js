const {decrypt, encrypt} = require('../main.js')
require('chai').should();
console.log("inne i decrypt!")

const input = "Ost"
const output= "Osostot"

describe('Testing Decrypt-module', () => {
    it('should encrypt ' + input + ' to equal ' + output, () => {
        
        encrypt(input).should.equal(output)

        
    })
    it('should decrypt ' + output + ' to equal ' + input, () => {
        
        decrypt(output).should.equal(input)
        
    })

    it('Should decrypt a Rövarspråket-text to normal text', () => {
        
        var result = encrypt('Ost');

        decrypt(result).should.equal("Ost");

        decrypt('123').should.equal('123');
        
        decrypt('345&/)!!!').should.equal('345&/)!!!');
        
    })

});



