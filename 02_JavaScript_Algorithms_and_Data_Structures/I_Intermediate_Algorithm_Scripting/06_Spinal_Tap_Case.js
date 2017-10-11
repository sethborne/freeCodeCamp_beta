function spinalCase(inputString) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    let regexCase = /([a-z])([A-Z])/g;
    let spaceCamelCase = inputString.replace(regexCase, '$1 $2');
    // console.log(spaceCamelCase);
    let regex = /[\s_-]/g;
    let splitInputString = spaceCamelCase.split(regex);
    // console.log(splitInputString);
    let joinedString = splitInputString.join("-");
    // console.log(joinedString);
    let finalString = joinedString.toLowerCase();
    console.log(finalString);
    return finalString;
}


spinalCase("This Is Spinal Tap")
// should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap")
// should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show")
// should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh")
// should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things")
// should return "all-the-small-things".