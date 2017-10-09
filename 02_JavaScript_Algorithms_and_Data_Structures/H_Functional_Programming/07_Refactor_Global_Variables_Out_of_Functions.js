// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add(bookList, bookName) {
    let newBookList = [...bookList];
    newBookList.push(bookName);
    return newBookList;
    // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(bookList, bookName) {
    let bookToRemIndexVal = bookList.indexOf(bookName);
    if (bookList.indexOf(bookName) >= 0) {
        let remBookList = [...bookList];
        remBookList.splice(bookToRemIndexVal, 1);
        return remBookList;
        // Add your code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);
