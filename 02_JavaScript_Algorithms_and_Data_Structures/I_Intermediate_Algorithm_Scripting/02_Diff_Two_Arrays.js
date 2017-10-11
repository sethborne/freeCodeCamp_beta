function diffArray(inputArrayOne, inputArrayTwo) {
    var newArr = [];
    var doesContain = false;
    
    function checkForDifference(checkArrayOne, checkArrayTwo){
        for(var i = 0; i < checkArrayOne.length; i += 1){
            for(var j = 0; j < checkArrayTwo.length; j += 1){
                if(checkArrayOne[i] === checkArrayTwo[j]){
                    doesContain = true;
                    break;
                } else {
                    doesContain = false;
                }
            }
            // if(doesContain){
            //     console.log("True, don't Push Anything");
            // } else {
            //     newArr.push(checkArrayOne[i])
            // }
            if(!doesContain){
                newArr.push(checkArrayOne[i]);
            }
        }
    }
    
    checkForDifference(inputArrayOne, inputArrayTwo);
    checkForDifference(inputArrayTwo, inputArrayOne);
    
    return newArr;
    
    // REFACTOR
    // for(i = 0; i < inputArrayOne.length; i += 1){
    //     var doesContain = false;
    //     for(j = 0; j < inputArrayTwo.length; j += 1){
    //         console.log(`${i} and ${j} | doesContain: ${doesContain}`);
    //         if(inputArrayOne[i] == inputArrayTwo[j]){
    //             doesContain = true;
    //             break;
    //         }
    //     }
    //     if(doesContain == false){
    //         newArr.push(inputArrayTwo[i]);

    //     }
    // }
    // for(j = 0; j < inputArrayTwo.length; j += 1){
    //     var doesContain = false;
    //     for(i = 0; i < inputArrayOne.length; i += 1){
    //         console.log(`${i} and ${j} | doesContain: ${doesContain}`);
    //         if(inputArrayOne[i] == inputArrayTwo[j]){
    //             doesContain = true;
    //             break;
    //         }
    //     }
    //     if(doesContain == false){
    //         newArr.push(inputArrayTwo[j]);

    //     }
    // }
    // return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));