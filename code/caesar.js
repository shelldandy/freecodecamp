const caesar = str => {

  var upperCase = str.toUpperCase();

  // Make an array with utf-16 codes
  var originalCoded = [];
  for (var i = 0; i < upperCase.length; i++) {
    originalCoded.push( upperCase.charCodeAt(i) );
  }

  var shiftedNumbers = [];

  for (var j = 0; j < originalCoded.length; j++) {
    // If the number falls between range
    if ( originalCoded[j] >= 65 && originalCoded[j] <= 77 ) {
      shiftedNumbers.push( originalCoded[j] + 13 );
    } else if ( originalCoded[j] >= 78 && originalCoded[j] <= 90 ) {
      var left = 90 - originalCoded[j];
      shiftedNumbers.push(64 + (13 - left));
    } else {
      shiftedNumbers.push(originalCoded[j]);
    }
  }

 var decodedStr = '';
 for (var k = 0 ; k < shiftedNumbers.length; k++) {
   decodedStr += String.fromCharCode(shiftedNumbers[k]);
 }

  return decodedStr;
};

module.exports = caesar;
