function rot13(inputString) { // LBH QVQ VG!
    // all caps - so get char code
    var a = "A";
    var z = "Z";
    var encryptedArray = [];
    console.log(`A: ${a.charCodeAt(0)} | Z: ${z.charCodeAt(0)}`);
    for(var c = 0; c < inputString.length; c += 1){
        encryptedArray.push(inputString.charCodeAt(c));
    }
    // console.log(encryptedArray);
    // if between 65 and 90 (inclusive) do something
    // could make an decrypted array, but trying to not do another loop
    for(var f = 0; f < encryptedArray.length; f += 1){
        if(encryptedArray[f] >= 65 && encryptedArray[f] <= 90){
            if(encryptedArray[f] >= 78 && encryptedArray[f] <= 90){
                encryptedArray[f] -= 13;
                encryptedArray[f] = String.fromCharCode(encryptedArray[f])
            }
            else{
                encryptedArray[f] += 13;
                encryptedArray[f] = String.fromCharCode(encryptedArray[f])
            }
        }
        else{
            encryptedArray[f] = String.fromCharCode(encryptedArray[f])
        }
    }
    console.log(encryptedArray);
    inputString = encryptedArray.join("")
    console.log(inputString);
    
return inputString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
// FREE CODE CAMP
rot13("SERR CVMMN!")
// should decode to FREE PIZZA!
rot13("SERR YBIR?")
// should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
// should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.