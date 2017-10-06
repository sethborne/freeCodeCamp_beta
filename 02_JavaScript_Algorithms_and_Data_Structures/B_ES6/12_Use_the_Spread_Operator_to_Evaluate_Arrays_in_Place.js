const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
const arr2 = [...arr1]; 

// change this line
arr1.push('JUN');
console.log(arr2); 
// arr2 should not be affected
