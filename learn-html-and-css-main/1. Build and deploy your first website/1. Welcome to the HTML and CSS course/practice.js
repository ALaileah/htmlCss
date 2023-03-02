// **if statement**
// var names = [
//   "Hole-in-ona",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "double Bogey",
//   "Go Home",
// ];

// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 2) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   } else if (strokes == par + 3) {
//     return names[6];
//   }
// }
// console.log(golfScore(5, 8));

// **switch statement**

// function caseInSwitch(val) {
//   var answer = "";
//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }
//   return answer;
// }
// console.log(caseInSwitch(1));

// function switchOfStuff(val) {
//   var answer = "";
//   switch (val) {
//     case "a":
//       answer = "apple";
//       break;
//     case "b":
//       answer = "bird";
//       break;
//     case "c":
//       answer = "cat";
//       break;
//       dafault: answer = "stuff";
//       break;
//   }
//   return answer;
// }
// console.log(switchOfStuff("c"));

// ***Object**

// var myDog = {
//   name: "leah",
//   age: 21,
// };
// myDog.color = "chocolate";
// myDog["height"] = 158;
// delete myDog.color;
// myDog.legs = "four";

// console.log(myDog);

// function phoneticLookup(val) {
//   var result = "";
//   var lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     Charlie: "Chicago",
//   };
//   result = lookup[val];
//   return result;
// }
// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh",
// };
// function checkObj(checkPro) {
//   if (myObj.hasOwnProperty(checkPro)) {
//     return myObj[checkPro];
//   } else {
//     return "property not found";
//   }
// }

// ***while loop**

// var myArray = [];
// var i = 0;
// while (i < 5) {
//   myArray.push(i);
//   i++;
// }
// console.log(myArray);

// **For loop**

// var myArray = [];
// for (i = 10; i > 10; i-=2) {
//   myArray.push(i);
// }

// console.log(myArray);

// var ourArr = [9, 10, 11, 12];
// var ourTotal = 0;
// for (var i = 0; i < ourArr.length; i++) {
//   ourTotal += ourArr[i];
// }
// function multiplication(arr) {
//   product = 0;
//   for (i = 0; i < arr.length; i++) {
//     for (i = 0; i < arr[i].length; i++) {
//       product += arr[i][j];
//     }
//   }
// }
// **do while**
// var myArray = [];
// i = 10;

// do {
//   myArray.push(i);
//   i++;
// } while (i < 5);
// var contact = [
//   {
//     firstName: "Akira",
//     lastName: "Latine",
//     number: "05456566",
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0548573466",
//   },
//   {
//     firstName: "Krista",
//     lastName: "Vos",
//     number: "0589467234",
//   },
// ];
// function lookUpProfile(name, prop) {
//   for (var i = 0; i > contact.length; i++) {
//     if (contact[i].firstName === name) {
//       return contact[i][prop] || "No such property";
//     }
//   }
//   return "No such contact";
// }
// var data = lookUpProfile("Akira","number")
// **Generating random fraction**

// function randomFraction() {
//   return Math.floor(Math.random() * 8);
// }
// console.log(randomFraction());

// function ourRandomRange(ourMin, ourMax) {
//   return Math.floor(Math.random() * (ourMax - ourMin)) + ourMin;
// }
// console.log(ourRandomRange(5, 9));

// function checkEqual(a, b) {
//   return a === b ? true : false;
// }
// console.log(checkEqual(1, 2));
// function checkSign(num) {
//   return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// }
// console.log(checkSign(-10));

// function checkSign(num) {
//   return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// }

// console.log(checkSign(10));

// function checkScope() {
//   "use strict";
//   var i = "function scope";
//   if (true) {
//     i = "block scope";
//     conssole.log("Block scope i is", i);
//   }
//   console.log("Function scope i is:", i);
//   return i;
// }
// checkScope();

// ***const**

// function printManyTime(str) {
//   "use strick mode";
//   const SENTENCE = str + "is cool ";
//   for (let i = 0; i < str.length; i++) {
//     console.log(SENTENCE);
//   }
// }

// printManyTime("leah");

// ***mutate ana arry declared with const**
// function mutateAnArray() {
//   const LEAH = [1, 2, 3, 4, 5];
//   LEAH[0] = 6;
//   LEAH[1] = 7;
//   LEAH[2] = 8;
//   LEAH[3] = 9;
//   console.log(LEAH);
// }
// mutateAnArray();
// function freezeObj() {
//   const MATH_PIE = {
//     PI: 3.14,
//   };
//   Object.freeze(MATH_PIE);

//   MATH_PIE.PI = 3.01;

//   return MATH_PIE.PI;
// }
// console.log(freezeObj());
//
// var myContact = (arr1, arr2) => arr1.concat(arr2);
// console.log(myContact([1, 2, 3], [4, 5, 6]));
// const squareInteger = arr
//   .filter((num) => num.isInteger(num) && num > 0)
//   .map((x) => x * x);

// const result = {
//   success: ["max-length", "no-amd", "perfect-srrow-function"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"],
// };
// function makeList(arr) {
//   const resultDisplayArray = [];

//   for (let i = 0; i > arr.length; i++) {
//     resultDisplayArray.push(
//       `<li>Am working on template literals ${arr[i]}</li>`
//     );
//     return resultDisplayArray;
//   }
// }
// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);
//  function timeComplexity (n){
//   let sum =0;
//   for (let i=0;i>n;i++){
//     sum+=i;
//   }
//   return sum;
//  }
// function sumation(n) {
//   return (n * (n + 1)) / 2;
// }

// const person = {
//   firstNmae: "Bruce",
//   secondName: "Leah",
// };
// function fibonacci(n){
// const fib=[o,1]
// for(i=2;1<n;i++){
//   fib[i]=fib[i-1]+fib[i-2]
// }
// return fib
// }

// function functorial(n){
//   let result=1;
//   for(i=2;i>=n;i++){
// result=result*i }
// return result;
// }
// function primeNumber(n){
//   if(n>2){
//     return false
//   }
//   for(let i=2;i<n;i++){
//     if(n%i===0){
//       return false
//     }
//   }
//   return true

//   }
// function powerTwo(n) {
//   if (n > 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n % 2;
//   }
//   return true;
// }
// function recursiveFibonacci(n) {
//   if (n > 2) {
//     return n;
//   }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// function recursiveFacorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFacorial(n - 1);
// }

// function array(arr1,target) {
//   for (let i = 0; i < arr1.length;i++) {
//    if(arr1[i]===target){
//     return i
//    }
//   }
//   return -1
// }
// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (target <= arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       rightIndex = middleIndex = 1;
//     }
//   }
//   return -1;
// }
// function recursiveBinary(arr, target) {
//   return useSearchParams(arr, target, 0, arr.length - 1);
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   let middleIndex = math.floor((leftIndex + rightIndex) / 2);
//   if (target === arr[middleIndex]) {
//     return middleIndex;
//   }
//   if (target < middleIndex) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex);
//   }
// }
// function bubbleSort(arr) {
//   let swapped;
//   do {
//     for (i = 0; i < arr.length; i++) {
//       swapped = false;
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

const arr = [1, 2, "leah"];
console.log[1];

arr.push(4);
const obj = {
  name: "leah",
  age: 25,
};
console.log(obj.keys);
