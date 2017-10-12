function convertHTML(inputString) {
    // &colon;&rpar;
    let splitInputString = inputString.split("");
    let regexArray = [ ["&", "&amp;"], ["<", "&lt;"], [">", "&gt;"], ['\"', "&quot;"], ["\'", "&apos;"] ];
    for(let c = 0; c < splitInputString.length; c += 1){
        for(let r = 0; r < regexArray.length; r += 1){
            if(regexArray[r][0] === splitInputString[c]){
                splitInputString[c] = regexArray[r][1];
            }
        }
    }
    inputString = splitInputString.join("");
    console.log(inputString);
    return inputString;
}

convertHTML("Dolce & Gabbana");
// should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos");
// should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve");
// should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"');
// should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Schindler's List");
// should return Schindler&​apos;s List.
convertHTML("<>");
// should return &​lt;&​gt;.
convertHTML("abc");
// should return abc.