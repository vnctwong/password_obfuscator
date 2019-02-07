//obfuscates string
function obfuscate(string) {     //taking string & return string
    if (string === 'a') {
      return 4;
    }
    else if (string === 'e') {
      return 3;
    }
    if (string === 'o') {
      return 0;
    }
    if (string === 'l') {
      return 1;
    }
    else {
      return string;
    }
}

// pass argv to obfuscate function
function passArguementToObf() {
  var CmdLineArguement = process.argv.slice(2)[0];  //process or no
  var obfuscatedString = "";

  console.log(CmdLineArguement);

  for(var i = 0; i < CmdLineArguement.length; i++ ) {
    obfuscatedString = obfuscatedString + obfuscate(CmdLineArguement.charAt(i)); //need to run obfuscate function through each character of string
  }

  return obfuscatedString;
}


console.log(passArguementToObf());
// new fnc
// input myArgs into OBF to obtain string
// prints string as obString


/*
node password.js password
p4ssw0rd
node password.js abracadabra
4br4c4d4br4
node password.js audaciously
4ud4ci0us1y
*/
