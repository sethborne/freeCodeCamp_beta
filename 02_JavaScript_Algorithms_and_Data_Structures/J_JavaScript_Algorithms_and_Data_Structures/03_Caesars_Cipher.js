// function rot13(inputString) { // LBH QVQ VG!
//     // all caps - so get char code
//     var a = "A";
//     var z = "Z";
//     var encryptedArray = [];
//     console.log(`A: ${a.charCodeAt(0)} | Z: ${z.charCodeAt(0)}`);
//     for(var c = 0; c < inputString.length; c += 1){
//         encryptedArray.push(inputString.charCodeAt(c));
//     }
//     // console.log(encryptedArray);
//     // if between 65 and 90 (inclusive) do something
//     // could make an decrypted array, but trying to not do another loop
//     for(var f = 0; f < encryptedArray.length; f += 1){
//         if(encryptedArray[f] >= 65 && encryptedArray[f] <= 90){
//             if(encryptedArray[f] >= 78 && encryptedArray[f] <= 90){
//                 encryptedArray[f] -= 13;
//                 encryptedArray[f] = String.fromCharCode(encryptedArray[f])
//             }
//             else{
//                 encryptedArray[f] += 13;
//                 encryptedArray[f] = String.fromCharCode(encryptedArray[f])
//             }
//         }
//         else{
//             encryptedArray[f] = String.fromCharCode(encryptedArray[f])
//         }
//     }
//     console.log(encryptedArray);
//     inputString = encryptedArray.join("")
//     console.log(inputString);
    
// return inputString;
// }

function rot13v2(inputString){
    const keyObj = {
        A: "N",
        B: "O",
        C: "P",
        D: "Q",
        E: "R",
        F: "S",
        G: "T",
        H: "U",
        I: "V",
        J: "W",
        K: "X",
        L: "Y",
        M: "Z",
        N: "A",
        O: "B",
        P: "C",
        Q: "D",
        R: "E",
        S: "F",
        T: "G",
        U: "H",
        V: "I",
        W: "J",
        X: "K",
        Y: "L",
        Z: "M"
    }
    // console.log(keyObj['A']);
    let cipherString = '';
    for(let i = 0; i < inputString.length; i += 1){
        // console.log('Loop: ', i);
        // console.log('Value: ', inputString[i]);
        // console.log('key: ', keyObj);
        // console.log('value: ', keyObj[inputString[i]]);
        if(keyObj[inputString[i]]){
            cipherString += keyObj[inputString[i]];
            console.log(keyObj[inputString[i]]);
        }
        else{
            cipherString += inputString[i];
        }
        
    }
    console.log(cipherString);
}

// rot13v2("AA BB CC")

// Change the inputs below to test
rot13v2("SERR PBQR PNZC");
// FREE CODE CAMP
rot13v2("SERR CVMMN!")
// should decode to FREE PIZZA!
rot13v2("SERR YBIR?")
// should decode to FREE LOVE?
rot13v2("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
// should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.


