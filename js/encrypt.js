function encrypt() {
    var plaintextMsg = document.getElementById("encrypt");
    var lowerCase = plaintextMsg.toUpperCase();
    var key = document.getElementById("shiftnum");

    // Encrypt
    var encryptShift = function(str, amount) 
    {
        if (amount < 0) {
            return encryptShift(str, amount+26); 
        }

        // Output
        var output = "";

        // Go through each character
        for (var i = 0; i < str.length; i++) {
            var c = str[i];
        }

        // If it's a letter...
        if (c.match(/[a-z]/i)) 
        {
            // Get its code
            var code = str.charCodeAt(i);
  
            // Uppercase letters
            if (code >= 65 && code <= 90) 
            {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }
  
            // Lowercase letters
            else if (code >= 97 && code <= 122) 
            {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }

        output += c;
        alert(output);
    }
    encryptShift(lowerCase,key);
    alert("Hello");
    //document.getElementById("enc-output") = "Your secret message is: " + output;
}