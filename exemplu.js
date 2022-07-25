// // // // // 5. An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits.
// // // // //     Determine if the input number is an Armstrong number. Return either true or false.
// // // // //     Ex: 1^3 + 5^3 + 3^3 = 153

// // // // function isArmstrongNumber(number) {
// // // //   const digits = [];
// // // //   const allDigits = number.toString();

// // // //   const numberLength = allDigits.length;
// // // //   for(let i = 0; i < numberLength; i++) {
// // // //       digits.push(+allDigits.charAt(i));
// // // //   }

// // // //   let sum = 0;
// // // //   for(let i = 0; i < numberLength; i++) {
// // // //       sum += Math.pow(digits[i], numberLength);
// // // //   }

// // // //   if(sum === number) {
// // // //       console.log(`The number ${number} is an Armstrong Number`);
// // // //       return true;
// // // //   } else {
// // // //       console.log(`The number ${number} is not an Armstrong Number`);
// // // //       return false;
// // // //   }
// // // // };

// // // // /// Tests

// // // // isArmstrongNumber(153);
// // // // isArmstrongNumber(50);

// // // // 4. Create a class called CustomList with these methods:
// // // //     insertFirst(data)
// // // //     insertLast(data)
// // // //     getFirst()
// // // //     getLast()

// // // // Make sure you test the functionality by creating some objects.
// // // // Bonus: Create a class for a LinkedList.

// // // class CustomList {

// // //   constructor(list) {
// // //       this.list = list;
// // //   };

// // //   insertFirst(data) {
// // //       if(this.list[0] === undefined) {
// // //           this.list[0] = data;
// // //       } else {
// // //           for(let i = this.list.length; i > 0; i--) {
// // //               this.list[i] = this.list[i -1];
// // //           }
// // //           this.list[0] = data;
// // //       }
// // //       console.log(`Data inserted on first position, value: ${this.list[0]}`);
// // //   };

// // //   insertLast(data) {
// // //       this.list.push(data);
// // //       console.log(`Data inserted on position ${this.list.length - 1} with the value: ${this.list[this.list.length - 1]}`);
// // //   }

// // //   getFirst() {
// // //       return this.list[0];
// // //   };

// // //   getLast() {
// // //       return this.list[this.list.length - 1];
// // //   };
// // // };

// // // let arr = [];
// // // const myList = new CustomList(arr);

// // // //Tests

// // // myList.insertFirst(1);
// // // console.log(myList);
// // // myList.insertFirst(50);
// // // console.log(myList);
// // // myList.insertLast(100);
// // // console.log(myList);

// // // console.log(myList.getFirst());
// // // console.log(myList.getLast());

// // // EXERCITIUL 3: 3. Write a function that takes an array of strings as argument.
// // // Group those strings by their first letter.
// // //     Return an object that contains properties with keys representing first letters
// // //     The values should be arrays of strings containing only the corresponding strings
// // //     For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// // //     Ex: { a: ['Alf', 'Alice'], b: ['Ben']}
// // let array = ["Alf", "Alice", "Ben"];
// // const groupByFirstLetter = () => {
// //   // console.log(array);
// //   // const obj = {};

// //   // for (const key of array) {
// //   //   console.log("Array key:",key);
// //   //   console.log("First character of k ey to lower case:",key[0].toLowerCase());
// //   // }
// //   // obj[array[0][0].toLowerCase()] = array[0]
// //   // obj[array[1][0].toLowerCase()] = array[1]
// //   // obj[array[2][0].toLowerCase()] = array[2]

// //   // console.log(obj);

// //   // const obj = Object.assign({}, array);
// //   // const obj = {...array};
// //   // for(let i = 0; i < obj.length; i ++){
// //   // }
// //   // // obj = Object.keys()
// //   // console.log(obj);

// // };

// // groupByFirstLetter(array);

// // const Arr = ['Alf', 'Alice', 'Ben', 'Jack'];
// // function groupByLetter(arr) {
// //     let result = {};
// //     for(let i = 0; i < arr.length; i ++) {
// //         let currentWord = arr[i];
// //         let firstChar = currentWord[0].toLowerCase();
// //         let innerArray = [];
// //         console.log("inner array:",innerArray);
// //         if(result[firstChar] === undefined) {
// //           innerArray.push(currentWord);
// //             result[firstChar] = innerArray;
// //         } else {
// //             result[firstChar].push(currentWord);
// //         }
// //     }
// //     return result;
// // }
// // console.log(groupByLetter(Arr));

// let result = {};
// const arr = ['Alf', 'Alice', 'Ben', 'Jack'];
// for(let i = 0; i < arr.length; i ++){
//   let currentWord = arr[i];
//   // console.log(currentWord);
//   let firstChar = currentWord[0].toLowerCase();
//   let innerArray = [];
//   console.log("aaa:",result[firstChar]);
//   console.log("result:", result);
//   if(result[firstChar] === undefined){
//     innerArray.push(currentWord);
//     result[firstChar] = innerArray;
//   }else{
//     result[firstChar].push(currentWord);
//   }
// }
// console.log(result);

// EXERCITIUL 0. Choose a public api, make a call and get the result by using both then method and async/await as well.

// const getCatFact = async () => {
//   fetch("https://catfact.ninja/fact")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("Error:", error));
// };
// getCatFact();

// const response = fetch("https://catfact.ninja/fact")

// const getCatFact = async () => {
//   try {
//     console.log(await response);
//   } catch (err) {
//     console.log(err);
//   }
// };
// getCatFact();

// const getCatFact = async () => {
//   const result = await fetch("https://catfact.ninja/fact");
//   console.log(result);
// }
// getCatFact();

// EXERCITIUL 1: 1. Given an array of objects that have a field called population,
//sort the objects by population size. Return the sorted array.

// const object1 = {
//   population: 200,
//   id: 1
// };
// const object2 = {
//   population: 150,
//   id: 2
// };
// const object3 = {
//   population: 250,
//   id: 3
// };

// const array = [object1, object2, object3];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// array.sort((a, b) => {
//   return a.population - b.population;
// });
// console.log("Sorted array:");
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// EXERCITIUL 2: 2. Write a function that takes two objects as arguments.
//Merge both objects and create another object that has fields from the arguments.
//Return the resulting object
//Ex: For an input {'a': 1, 'b': 2}, {'c': 3, 'd': 4}
//it should return another object with the properties 'a', 'b', 'c', 'd'.

// let obj1 = {
//   'a': 1,
//   'b': 2
// }
// let obj2 = {
//   'c': 3,
//   'd': 4
// }
// const mergeObjects = (obj1, obj2) => {
//   let obj3 = {
//     ...obj1,
//     ...obj2
//   }
//   console.log(obj3);
// };

// mergeObjects(obj1, obj2);
