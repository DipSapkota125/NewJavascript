//variables
// var x = 90;
// x = 120;
// var x = 7 + 9;
// console.log(x);

//for let
// let x = 70;
// console.log(x);
// x = 80;
// console.log(x);
// let x = 100;
// console.log(x);

//const
// const a = 75;
// console.log(a);
// a = 100;
// console.log(a);
// const a = 45;
// console.log(a);

//data type
// const y = 90;
// console.log(y);
// console.log(typeof y);

// const name = "Swoopma Suman";
// console.log(name);
// console.log(typeof name);

//another way of finding datatype
// const result = "Hari pradhan";

// console.log(result);
// console.log(typeof result);
// console.log(typeof Number(result));

// const nums = 80 + 90;
// console.log(nums);
// console.log(typeof nums);
// console.log(typeof String(nums));

//boolean
// let x = 90;
// let y = 60;
// let z = false;
// console.log(x + y + z);

// let x = "Harka rai";
// let y = 80;
// console.log(x + y);

// const name = "Bartika";
// const surname = "Rai";
// console.log(" My name is : " + name + " " + surname);
// console.log(`My name is : ${name} ${surname}.`);

// let z;
// console.log(z);
// console.log(typeof z);

// let z = null;
// console.log(z);
// console.log(typeof z);

//Strings method
// const result = "My name is Lod Krishna!";
//length
// console.log(result.length);

//concat
// console.log(result.concat("Yekdin ta sabai janunai xa!"));

//substring
// console.log(result.substring(1, 4));
// console.log(result.substr(1, 4));

//replace
// console.log(result.replace("is", "was"));

//includes
// console.log(result.includes("Lod"));

//charAt
// console.log(result.charAt(8));

//indexof
// console.log(result.indexOf("L"));

//last index of
// console.log(result.lastIndexOf("!"));

//split
// console.log(result.split(" "));

//lowercase
// console.log(result.toLowerCase());

//uppercase
// console.log(result.toUpperCase());

//trim
// console.log(result.trim());

//statement(if else statement);
// const email = "dipsapkota325@gmail.com";
// const password = "9999999999";

// if (email === "dipsapkota325@gmail.com" && password === "9999999999") {
//   console.log("Login successfully!");
// } else {
//   console.log("Invalid credentials!");
// }

//simple arithmetic
// let x = 10;

// if (x > 15) {
//   console.log("X is greater than 15!");
// } else if (x > 5) {
//   console.log("X is greater than 5, but not equal to 15!");
// } else {
//   console.log("X is not greater than 15!");
// }

// let weather = "cloudy";
// if (weather === "sunny") {
//   console.log("It's a sunny day!");
// } else if (weather === "winter") {
//   console.log("Aja dherai jado xa hai!");
// } else if (weather === "rainy") {
//   console.log("Aja pani parla jasto xa!");
// } else if (weather === "cloudy") {
//   console.log("Aja badal le akash dhakeko xa!");
// } else {
//   console.log("invalid weathers!");
// }

//switch statement

// let grade = "A";
// switch (grade) {
//   case "B":
//     console.log("Very good marks");
//     break;
//   case "C":
//     console.log("good marks");
//     break;
//   case "D":
//     console.log("average marks");
//     break;
//   case "E":
//     console.log("need to improve");
//     break;
//   case "A":
//     console.log("Excellent marks!");
//     break;

//   default:
//     console.log("Fail vaye mah!");
//     break;
// }

// let month = "october";
// switch (month) {
//   case "january":
//   case "february":
//   case "march":
//     console.log("The month is in Q1");
//     break;

//   case "april":
//   case "may":
//   case "june":
//     console.log("The month is in Q2");
//     break;

//   case "july":
//   case "august":
//   case "september":
//     console.log("The month is in Q3");
//     break;

//   case "october":
//   case "november":
//   case "december":
//     console.log("The month is in Q4");
//     break;

//   default:
//     console.log("vetiyena hai narisau!");
//     break;
// }

//dom(document object model);
const title = document.getElementById("mytitle");
title.innerText = "Gajal tyo timro metauedeuna!";
title.style.backgroundColor = "red";
title.style.color = "white";
title.style.cursor = "pointer";

// loop
//1.for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//sum of 10 positive numbers
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

//while loop
// let i = 1;
// let sum = 0;

// while (i <= 10) {
//   sum += i;
//   i++;
// }
// console.log(sum);

//do while
// let i = 0;
// let sum = 0;
// do {
//   sum += i;
//   i++;
// } while (i <= 10);

// console.log(sum);

//array
// const arr = [2, 4, 6, 7, 8, 9];
// const arr1 = ["Ram", "shyam", "Hari"];
// console.log(arr[2]);
// console.log(arr1);

// const arr = [7, 8, 3, 4, "Gita"];
// console.log(arr);

//array methods(basic array method);

// const arr = [6, 3, 2, 8, 9, 5, 4, 1];
//length
// console.log(arr.length);

//push
// arr.push(23);
// console.log(arr);

//pop
// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

//unshift
// arr.unshift(55);
// console.log(arr);

//includes
// const newArr = arr.includes(8);

// console.log(arr);
// console.log(newArr);

//reverse
// arr.reverse();
// console.log(arr);

//splice
// arr.splice(1, 3);
// console.log(arr);

//slice
// const newArr = arr.slice(1, 4);
// console.log(arr);
// console.log(newArr);

// const newArr = arr.filter((n) => n > 3);
// console.log(arr);
// console.log(newArr);

// let arr = [];
// for (let i = 0; i < 100; i++) {
// arr[i] = i;
//   arr.push(i);
// }

// console.log(arr);

//object
// const profile = {
//   firstName: "Ram bahadur",
//   lastName: "Badhal",
//   age: 55,
//   job: "minister",
//   isSalary: 1000000,
//   isSingle: function () {
//     console.log("Luna sake luta deshlai!");
//     return true;
//   },
// };
// console.log(profile);
