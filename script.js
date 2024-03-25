//Task:- 1 and Task:- 2

//1.a Print odd numbers
//Anonymos
let res1 = [];
let oddNumbers = function(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2!=0){
            res1.push(arr[i])
        }
    }
    return res1
}
console.log(oddNumbers([1,2,3,4,5,6,7,8,9,10]));

//IIFE
var result1 = (function (arr){
    var resposd1 = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2!=0){
            resposd1.push(arr[i])
        }
    }
    return resposd1
})([1,2,3,4,5,6,7,8,9,10]);

console.log(result1);

//2.a
//Arrow 
let results1 = [];
let oddNumbers1 = (arr) => {
    for(let i = 0; i<arr.length; i++){
        if(arr[i]%2!=0){
            results1.push(arr[i])
        }
    }
    return results1
}
console.log(oddNumbers1([1,2,3,4,5,6,7,8,9,10]));

//1.b
//Anonymos
let res2 = [];
let uppercase = function(arr){
    for(let i in arr){
       let upper = arr[i][0].toUpperCase();
       let newString = arr[i].replace(arr[i][0], upper);
       res2.push(newString);
    }
    return res2
}

console.log( uppercase(['apple','dheena','yalan']));

//IIFE
let result2 = (function(arr){
    let resposd2 = []
    for(let i in arr){
        let upper = arr[i][0].toUpperCase();
        let newString = arr[i].replace(arr[i][0], upper);
        resposd2.push(newString);
     }
     return resposd2;
})(['apple','dheena','yalan']);

console.log(result2);

//2.b Strings to title caps
//Arrow
let results2 = [];
let uppercase1 = (arr) => {
    for(let i in arr){
        let upper = arr[i][0].toUpperCase();
        let newString = arr[i].replace(arr[i][0], upper);
        results2.push(newString);
     }
 return results2;
}

console.log(uppercase1(['apple','dheena','yalan']));

//1.c Sum of all numbers in array
//Anonymos
let res3 = 0;
let addNumber = function (arr){
    for(let i in arr){
        res3 = res3 + arr[i];
    }
    return res3
}

console.log(addNumber([1,2,3,4,5,6,7,8,9,10]));

//IIFE
let result3 = (function(arr){
    let resposd3 = 0;
    for(let i in arr){
        resposd3 = resposd3 + arr[i];
    }
    return resposd3;
})([1,2,3,4,5,6,7,8,9,10]);

console.log(result3);

//2.c
//Arrow
let results3 = 0;
let addNumber1 = (arr) => {
    for(let i in arr){
        results3 = results3 + arr[i];
    }
    return results3
}

console.log(addNumber1([1,2,3,4,5,6,7,8,9,10]));

//1.d
// Common function to find all prime numbers, so all methods can asscess
function isPrimeFunction (number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

//Anonymos
let res4 = [];
let isPrime = function (arr){
    for(let i in arr){
        let a = isPrimeFunction (arr[i]);
        if(a === true){
            res4.push(arr[i]);
        }
    }
    return res4;
    
}

console.log(isPrime([11,12,13,14,15,16,17,18,19,20]));

// IITE 
let result4 = (function(arr){
    let resposd4 = [];
    for(let i in arr){
        let a = isPrimeFunction (arr[i]);
        if(a === true){
            resposd4.push(arr[i]);
        }
    }
    return resposd4;
})([1,2,3,4,5,6,7,8,9,10]);

console.log(result4);


//2.d Arrow 
let results4 = [];
let isPrimes = (arr) => {
    for(let i in arr){
        let a = isPrimeFunction (arr[i]);
        if(a === true){
            results4.push(arr[i]);
        }
    }
    return results4;
} 

console.log(isPrimes([21,22,23,24,25,26,27,28,29,30]));


// 1.e common function to palindromes
function isPalindrome (num) {
    let isPalindrome = []
    for(let o in num){
        const numStr = num[o].toString();
        const reversedStr = numStr.split('').reverse().join('');
        let istrue = true;
        if(numStr === reversedStr){
            istrue = true
        }else{
            istrue = false
        }
      
    if(istrue == true){
        isPalindrome.push(true)
    }else{
        isPalindrome.push(false)
    }
    }
    
    return(isPalindrome);
    
}

// Anonymous
let res5 = function (arr) {
    return isPalindrome(arr);
}

console.log(res5([2002,30103]))

// IITF 
let result5 = (function(arr){
    return isPalindrome( arr )
})([51015, 3623]);

console.log(result5);

//2.e Arrow 
let results5 = (arr) => {
    return isPalindrome(arr)
}

console.log(results5([1204, 98089]));


// 1.f Common function to find median
function twoArrayMedien(arr,arr1){
    let cArr = arr.concat(arr1)
    cArr.sort((a, b) => a - b);
const middle = cArr.length / 2;
if (cArr.length % 2 === 0) {
    return (cArr[middle] + cArr[middle - 1]) / 2;
  } else {
    return cArr[middle];
  }
}

//Anonymous 
let res6 = function (arr, arr1) {
    return twoArrayMedien(arr,arr1)
}

console.log(res6([1,3,4,2,5],[9,6,7,8,10]));

//IITF 
let result6 = (function (arr, arr1){
    return twoArrayMedien(arr, arr1)
})([11,13,14,12,15],[19,16,17,18,20]);

console.log(result6);

// 1.g Remove duplicates from an array

let s = [1,2,3,2,5,6,3];
// Anonymous 
 let res7 = function (arr){
    return arr.filter((item, index)=> arr.indexOf(item) === index)
}
console.log(res7(s));

//IITF 
let result7 = (function(arr){
    return arr.filter((item, index)=> arr.indexOf(item) === index)
})(s);

console.log(result7);

// 1.h Rotate an array by k times
//Anonymous
let res8 = function(arr, k) {
    let array = arr;
    for(let i = 0; i<k; i++){
        let popn = array.pop()
        array.splice(i,0,popn)
    }
    return array;
}

console.log(res8([1,2,3,4,5], 3));


//IITF
let result8 = (function(arr,k){
    let array = arr;
    for(let i = 0; i<k; i++){
        let popn = array.pop()
        array.splice(i,0,popn)
    }
    return array;
})([1,2,3,4,5], 1);

console.log(result8);