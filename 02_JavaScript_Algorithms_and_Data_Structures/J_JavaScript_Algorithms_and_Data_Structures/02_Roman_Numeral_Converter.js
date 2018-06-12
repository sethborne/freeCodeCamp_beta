function convertToRoman(numVal) {
    // input is a numVal - subtract down
    let romanString = "";
    // edge cases are 10 base, 9 base, 5 base, 4 base, 1 base
    // M - 1000, D - 500, C - 100, L - 50, X - 10, V - 5, I - 1;
    while(numVal > 0){
        if(numVal >= 1000){
            numVal -= 1000;
            romanString += "M";
        }
        else if(numVal >= 900 && numVal < 1000){
            numVal -= 900;
            romanString += "CM"
        }
        else if(numVal >= 500 && numVal < 900){
            numVal -= 500;
            romanString += "D"
        }
        else if(numVal >= 400 && numVal < 500){
            numVal -= 400;
            romanString += "CD"
        }
        else if(numVal >= 100 && numVal < 400){
            numVal -= 100;
            romanString += "C"
        }
        else if(numVal >= 90 && numVal < 100){
            numVal -= 90;
            romanString += "XC"
        }
        else if(numVal >= 50 && numVal < 90){
            numVal -= 50;
            romanString += "L"
        }
        else if(numVal >= 40 && numVal < 50){
            numVal -= 40;
            romanString += "XL"
        }
        else if(numVal >= 10 && numVal < 40){
            numVal -= 10;
            romanString += "X"
        }
        else if(numVal === 9){
            numVal -= 9;
            romanString += "IX"
        }
        else if(numVal >= 5 && numVal < 9){
            numVal -= 5;
            romanString += "V"
        }
        else if(numVal === 4){
            numVal -= 4;
            romanString += "IV"
        }
        else if(numVal >= 1 && numVal < 4){
            numVal -= 1;
            romanString += "I"
        }
    }
    console.log(romanString);
    return romanString;
}