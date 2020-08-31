// let word = "Karl";
// console.log(word)

const encrypt = (word) => {
    
        let rovarsprak = '';
        let consonants = 'bcdfghjklmnpqrstvwxz';
        for(let letter of word){
          let smallLetter = letter.toLowerCase();
          rovarsprak = rovarsprak + letter;
          if(consonants.includes(smallLetter)){
            
            rovarsprak = rovarsprak + 'o' + smallLetter;
          }
        }
        console.log(rovarsprak)
        return rovarsprak;
      
}


const decrypt = (input) => {
    let rovarsprak = input;
    let consonants = 'bcdfghjklmnpqrstvwxz';
    let svenska = '';
    
    for(let i = 0; i < rovarsprak.length; i++){

        let letter = rovarsprak[i];
        svenska += letter;
        let smallLetter = letter.toLowerCase();

        if(consonants.includes(smallLetter)){
                i += 2;
        }
    }
    
        return svenska;
      
}

module.exports = {encrypt, decrypt}