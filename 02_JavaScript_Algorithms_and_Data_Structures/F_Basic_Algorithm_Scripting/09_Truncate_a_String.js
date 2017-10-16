function truncateString(str, num) {
    // Clear out that junk in your trunk
    let strLength = str.length;
    if(strLength > num){
        let splitStr = str.split("");
        splitStr = splitStr.slice(0, num);
        console.log(str);
        str = splitStr.join("")
        str += "..."
        return str;
    }
    else{
        return str;
    }
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));