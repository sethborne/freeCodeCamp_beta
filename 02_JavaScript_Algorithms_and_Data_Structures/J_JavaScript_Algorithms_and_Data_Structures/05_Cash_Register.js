// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Currency     Unit	Amount
// Penny	    $0.01   (PENNY)
// Nickel	    $0.05   (NICKEL)
// Dime	        $0.1    (DIME)
// Quarter	    $0.25   (QUARTER)
// Dollar	    $1      (DOLLAR)
// Five Dlrs    $5      (FIVE)
// Ten Dlrs	    $10     (TEN)
// Twenty Dlrs	$20     (TWENTY)
// Hund Dlrs	$100    (ONE HUNDRED)

const changeValueLookup = {
    penny: .01,
    nickel: .05,
    dime: .10,
    quarter: .25,
    dollar: 1,
    fiveDollar: 5,
    tenDollar: 10,
    twentyDollar: 20,
    hundredDollar: 100
}

const changeStringLookup = {
    penny: 'PENNY',
    nickel: 'NICKEL',
    dime: 'DIME',
    quarter: 'QUARTER',
    dollar: 'ONE',
    fiveDollar: 'FIVE',
    tenDollar: 'TEN',
    twentyDollar: 'TWENTY',
    hundredDollar: 'ONE HUNDRED'
}

const decimalPlaceLookup = {
    0: 1,
    1: 10,
    2: 100
}

function checkCashRegister(price, payment, cid){
    // calculate change
    let change = (payment * decimalPlaceLookup['2']) - (price * decimalPlaceLookup['2']);
    
    console.log('Change: ', change);
    
    let changeObj = {
        penny: 0,
        nickel: 0,
        dime: 0,
        quarter: 0,
        dollar: 0,
        fiveDollar: 0,
        tenDollar: 0,
        twentyDollar: 0,
        hundredDollar: 0
    }
    // let loopIter = 5
    // while(loopIter){
    // while(change > 0){
    // let whilst = cid.some((item) => item[1] > 0)
    // console.log('change', change > 0, 'empty Till', cid.every((item) => item[1] === 0 ));
    let prevChange = change;
    while(change > 0){

        if(change >= (changeValueLookup['hundredDollar'] * decimalPlaceLookup['2']) && cid.find((item) => item[0] === changeStringLookup['hundredDollar'] && item[1] > 0 )){
            let unitIndex = cid.findIndex((item) => item[0] === changeStringLookup['hundredDollar']);
            if(unitIndex !== -1){
                if(cid[unitIndex][1] > 0){
                    changeObj['hundredDollar'] += 1;
                    change -= (changeValueLookup['hundredDollar'] * decimalPlaceLookup['2']);
                    // change -= 100;
                    cid[unitIndex][1] -= changeValueLookup['hundredDollar'];
                }
            }
        }
        else if(change >= (changeValueLookup['twentyDollar'] * decimalPlaceLookup['2']) && cid.find((item) => item[0] === changeStringLookup['twentyDollar'] && item[1] > 0 )){
            let unitIndex = cid.findIndex((item) => item[0] === changeStringLookup['twentyDollar']);
            console.log('hit here');
            if(unitIndex !== -1){
                if(cid[unitIndex][1] > 0){
                    changeObj['twentyDollar'] += 1;
                    change -= (changeValueLookup['twentyDollar'] * decimalPlaceLookup['2']);
                    // change -= 20;
                    cid[unitIndex][1] -= changeValueLookup['twentyDollar'];
                }
            }
        }
        else if(change >= (changeValueLookup['tenDollar'] * decimalPlaceLookup['2']) && cid.find((item) => item[0] === changeStringLookup['tenDollar'] && item[1] > 0 )){
            let unitIndex = cid.findIndex((item) => item[0] === changeStringLookup['tenDollar']);
            if(unitIndex !== -1){
                if(cid[unitIndex][1] > 0){
                    changeObj['tenDollar'] += 1;
                    change -= (changeValueLookup['tenDollar'] * decimalPlaceLookup['2']);
                    // change -= 10;
                    cid[unitIndex][1] -= changeValueLookup['tenDollar'];
                }
            }
        }
        else if(change >= (changeValueLookup['fiveDollar'] * decimalPlaceLookup['2']) && cid.find((item) => item[0] === changeStringLookup['fiveDollar'] && item[1] > 0 )){
            let unitIndex = cid.findIndex((item) => item[0] === changeStringLookup['fiveDollar']);
            if(unitIndex !== -1){
                if(cid[unitIndex][1] > 0){
                    changeObj['fiveDollar'] += 1;
                    change -= (changeValueLookup['fiveDollar'] * decimalPlaceLookup['2']);
                    // change -= 5;
                    cid[unitIndex][1] -= changeValueLookup['fiveDollar'];
                }
            }
        }
        else if(change >= (changeValueLookup['dollar'] * decimalPlaceLookup['2']) && cid.find((item) => item[0] === changeStringLookup['dollar'] && item[1] > 0 )){
            let unitIndex = cid.findIndex((item) => item[0] === changeStringLookup['dollar']);
            if(unitIndex !== -1){
                if(cid[unitIndex][1] > 0){
                    changeObj['dollar'] += 1;
                    change -= (changeValueLookup['dollar'] * decimalPlaceLookup['2']);
                    // change -= 5;
                    cid[unitIndex][1] -= changeValueLookup['dollar'];
                }
            }
        }
        else if(change >= (changeValueLookup['quarter'] * decimalPlaceLookup['2']) && cid.find((item) => item[0] === changeStringLookup['quarter'] && item[1] > 0 )){
            let unitIndex = cid.findIndex((item) => item[0] === changeStringLookup['quarter']);
            if(unitIndex !== -1){
                if(cid[unitIndex][1] > 0){
                    changeObj['quarter'] += 1;
                    change -= (changeValueLookup['quarter'] * decimalPlaceLookup['2']);
                    // ["QUARTER", 4.25]
                    cid[unitIndex][1] = Number((((cid[unitIndex][1] * decimalPlaceLookup['2']) - (changeValueLookup['quarter'] * decimalPlaceLookup['2'])) / decimalPlaceLookup['2']).toFixed(2));
                }
            }
        }
        else if(change >= (changeValueLookup['dime'] * decimalPlaceLookup['2']) && cid.find((item) => item[0] === changeStringLookup['dime'] && item[1] > 0 )){
            let unitIndex = cid.findIndex((item) => item[0] === changeStringLookup['dime']);
            if(unitIndex !== -1){
                if(cid[unitIndex][1] > 0){
                    changeObj['dime'] += 1;
                    change -= (changeValueLookup['dime'] * decimalPlaceLookup['2']);
                    cid[unitIndex][1] = Number((((cid[unitIndex][1] * decimalPlaceLookup['2']) - (changeValueLookup['dime'] * decimalPlaceLookup['2'])) / decimalPlaceLookup['2']).toFixed(2));
                }
            }
        }
        else if(change >= (changeValueLookup['nickel'] * decimalPlaceLookup['2']) && cid.find((item) => item[0] === changeStringLookup['nickel'] && item[1] > 0 )){
            let unitIndex = cid.findIndex((item) => item[0] === changeStringLookup['nickel']);
            if(unitIndex !== -1){
                if(cid[unitIndex][1] > 0){
                    changeObj['nickel'] += 1;
                    change -= (changeValueLookup['nickel'] * decimalPlaceLookup['2']);
                    cid[unitIndex][1] = Number((((cid[unitIndex][1] * decimalPlaceLookup['2']) - (changeValueLookup['nickel'] * decimalPlaceLookup['2'])) / decimalPlaceLookup['2']).toFixed(2));
                }
            }
        }
        else if(change >= (changeValueLookup['penny'] * decimalPlaceLookup['2']) && cid.find((item) => item[0] === changeStringLookup['penny'] && item[1] > 0 )){
            let unitIndex = cid.findIndex((item) => item[0] === changeStringLookup['penny']);
            if(unitIndex !== -1){
                if(cid[unitIndex][1] > 0){
                    changeObj['penny'] += 1;
                    change -= (changeValueLookup['penny'] * decimalPlaceLookup['2']);
                    cid[unitIndex][1] = Number((((cid[unitIndex][1] * decimalPlaceLookup['2']) - (changeValueLookup['penny'] * decimalPlaceLookup['2'])) / decimalPlaceLookup['2']).toFixed(2));
                }
            }
        }
        // if prevChange is equal to change - then there isn't enough in the till, or the till is empty, either way, you can't make more change so I'll break the loop.
        if(prevChange === change){
            // console.log('NOT DOING ANYTHING');
            break;
        }
        prevChange = change
        console.log(changeObj);
        console.log(cid);
    }
    console.log(change);
    console.log(changeObj);
    console.log(cid);
    
    // this converts the changeObj to a nested array of text/value pairs that mimic the CID data structure - which will return if the drawer is open / closed and can return, otherwise
    let changeArray = [];
    if(change === 0){
        // then return a change array
        if(changeObj['hundredDollar']){
            changeArray.push([changeStringLookup['hundredDollar'], changeObj['hundredDollar'] * changeValueLookup['hundredDollar']])
        }
        if(changeObj['twentyDollar']){
            changeArray.push([changeStringLookup['twentyDollar'], changeObj['twentyDollar'] * changeValueLookup['twentyDollar']])
        }
        if(changeObj['tenDollar']){
            changeArray.push([changeStringLookup['tenDollar'], changeObj['tenDollar'] * changeValueLookup['tenDollar']])
        }
        if(changeObj['fiveDollar']){
            changeArray.push([changeStringLookup['fiveDollar'], changeObj['fiveDollar'] * changeValueLookup['fiveDollar']])
        }
        if(changeObj['dollar']){
            changeArray.push([changeStringLookup['dollar'], changeObj['dollar'] * changeValueLookup['dollar']])
        }
        if(changeObj['quarter']){
            changeArray.push([changeStringLookup['quarter'], Number((changeObj['quarter'] * changeValueLookup['quarter']).toFixed(2))])
        }
        if(changeObj['dime']){
            changeArray.push([changeStringLookup['dime'], Number((changeObj['dime'] * changeValueLookup['dime']).toFixed(2))])
        }
        if(changeObj['nickel']){
            changeArray.push([changeStringLookup['nickel'], Number((changeObj['nickel'] * changeValueLookup['nickel']).toFixed(2))])
        }
        if(changeObj['penny']){
            changeArray.push([changeStringLookup['penny'], Number((changeObj['penny'] * changeValueLookup['penny']).toFixed(2))])
        }
    }
    console.log(changeArray);
    // this will return true if all nested values in the register are 0...(empty till)
    let emptyTill = cid.every(item => item[1] === 0)
    
    console.log('Change left to make: ', change, ' | is the Till empty? ', emptyTill);
    
    if(change > 0){
        // console.log('Insufficent Funds');
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    }
    else if(change === 0 && cid.every((item) => item[1] === 0 )){
        // and if not all find([1] === 0)
        let changeArray = [];
            // then return a change array
            changeArray.push([changeStringLookup['penny'], Number((changeObj['penny'] * changeValueLookup['penny']).toFixed(2))])
            changeArray.push([changeStringLookup['nickel'], Number((changeObj['nickel'] * changeValueLookup['nickel']).toFixed(2))])
            changeArray.push([changeStringLookup['dime'], Number((changeObj['dime'] * changeValueLookup['dime']).toFixed(2))])
            changeArray.push([changeStringLookup['quarter'], Number((changeObj['quarter'] * changeValueLookup['quarter']).toFixed(2))])
            changeArray.push([changeStringLookup['dollar'], changeObj['dollar'] * changeValueLookup['dollar']])
            changeArray.push([changeStringLookup['fiveDollar'], changeObj['fiveDollar'] * changeValueLookup['fiveDollar']])
            changeArray.push([changeStringLookup['tenDollar'], changeObj['tenDollar'] * changeValueLookup['tenDollar']])
            changeArray.push([changeStringLookup['twentyDollar'], changeObj['twentyDollar'] * changeValueLookup['twentyDollar']])
            changeArray.push([changeStringLookup['hundredDollar'], changeObj['hundredDollar'] * changeValueLookup['hundredDollar']])
        return {
            status: "CLOSED",
            change: changeArray
        }
    }
    else if(change === 0){
        // and if all find([1] === 0) then return
        return {
            status: 'OPEN',
            change: changeArray
        }
    }
    else {
        console.log('This is a condition you have not thought of');
    }
}


// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) 
// // should return {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// // should return {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}


// if there is leftover $ at the end of the while, its insuffident funds
// if there is 0 change, and all items in cid are value 0, then close the reg
