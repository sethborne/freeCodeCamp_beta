// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    let replaceString = "-";
    title = title.toLowerCase().trim();
    let replaceTitle = title.split(/\s+/);
    replaceTitle = replaceTitle.join(replaceString);
    return replaceTitle;
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);
console.log(urlSlug(" Winter Is  Coming"));