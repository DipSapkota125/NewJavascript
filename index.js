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
// const title = document.getElementById("mytitle");
// title.innerText = "Gajal tyo timro metauedeuna!";
// title.style.backgroundColor = "red";
// title.style.color = "white";
// title.style.cursor = "pointer";

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

//function
// function name() {
//   console.log("Ram bahadur");
// }
// name();

// function add() {
//   let x = 9;
//   let y = 8;
//   let ans = x + y;
//   console.log(ans);
// }
// add();

//parameters & argument in function
// function sum(a=4, b=6, c=2) {
//   let result = a + b + c / 2;
//   console.log(result);
// }
// sum(9, 6,4);

// function sum(a, b) {
//   let ans = a + b;
//   return ans;
// }

// const result = sum(5, 8);
// console.log(result);

//
// function greeting(name, address) {
//   console.log(`My name is ${name}. I live at ${address}`);
// }
// greeting("Top", "Sindhuli");

// function add(arr = []) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const ans = add([8, 9, 3, 5, 2, 7, 9, 3, 4]);
// console.log(ans);

//scoping
// var x = 9;

// console.log(x);

// function scope() {
//   let y = 8 + 8;
//   console.log(x);
//   console.log(y);
// }
// scope
// const result = document.getElementById("myLife");
// const ans = document.getElementsByClassName("myHow");
// const view = document.getElementsByClassName("myYour");
// const email = document.getElementsByName("email");
// const tag = document.getElementsByTagName("span");
// const button = document.getElementById("myClick");
// const lol = document.querySelector("#myLife");
// const h2 = document.createElement("h2");

// lol.innerHTML = "Baklol";
// ans[0].innerHTML = "Why";
// view[0].innerHTML = "Our";
// tag[0].innerText = "Guithe";

// button.style.backgroundColor = "blue";
// button.style.padding = "2vmax 4vmax";
// button.style.color = "white";

// const deleteBtn = document.querySelectorAll("button");

// function Adding() {
//   const h2 = document.createElement("h1");
//   h2.innerHTML = "Yuwa harulai bahira jana nadinunai ajako priority ho!";
//   document.body.prepend(h2);
// }

// function deleting() {
//   const trash = document.querySelector("h1");
//   trash.remove();
// }

// button.onclick = Adding;
// deleteBtn[1].onclick = deleting;

// const arr = [6, 8, 3, 5, 2, 9];

// console.log(
//   arr.filter((value, index) => {
//     if (value > 4) {
//       return value;
//     }
//   })
// );

//DOM Manipulation
// const myHow = document.getElementById("how");
// const myIs = document.getElementsByClassName("is");
// const myInput = document.getElementsByName("email");
// const mySpan = document.getElementsByTagName("span");
// const meroDesh = document.querySelector("#nepal");
// const myButton = document.querySelector(".hey");
// const DeleteButton = document.querySelectorAll("button");

//mybutton
// myButton.style.backgroundColor = "purple";
// myButton.style.color = "white";
// myButton.style.padding = "2vmax 4vmax";
// myButton.style.cursor = "pointer";
// const newData = myattr.getAttribute("class");
// const newSay = myattr.setAttribute("class", "say");

// console.log(newData);
// console.log(newSay);

//for id
// myHow.innerHTML = "Why";
// myHow.style.backgroundColor = "Red";
// myHow.style.color = "white";

//for class
// myIs[0].innerHTML = "Hello";

//using function
// function myAdd() {
//   const newH1 = document.createElement("h1");
//   newH1.innerHTML = "Yubalai bidesh jana bata rokaum!";

//   document.body.prepend(newH1);
// }

// function DelBtn() {
//   const trash = document.querySelector("h1");
//   trash.remove();
// }

// myButton.onclick = myAdd;
// DeleteButton[1].onclick = DelBtn;
// DeleteButton[1].style.backgroundColor = "red";
// DeleteButton[1].style.color = "white";
// DeleteButton[1].style.padding = "2vmax 4vmax";

//ADVANCE ARRAY METHOD
// const arr = [6, 3, 7, 9, 8, 2, 5, 4];

//find method
// console.log(
//   arr.find((value, index) => {
//     if (value > 4) return value;
//   })
// );

//filter method
// console.log(
//   arr.filter((value, index) => {
//     if (value > 4) return value;
//   })
// );

//every method
// console.log(
//   arr.every((value, index) => {
//     if (value > 4) return value;
//   })
// );

//some method
// console.log(
//   arr.some((value, index) => {
//     if (value > 4) return value;
//   })
// );

//for each (it iterate main array only not return any new array);
//map(it returns new array after iterating main array)

// const result = arr.forEach((value, index) => {
//   return (value += 20);
// });
// console.log(result);
// console.log(arr);

// const result = arr.map((value, index) => {
//   return (value += 20);
// });
// console.log(result);
// console.log(arr);

//reduce method;

// const newArr = arr.reduce((prevValue, value, index) => {
//   return (prevValue += value);
// });

// console.log(newArr);

//events listeners
// const Btn = document.querySelector(".hey");
// Btn.addEventListener("click", () => {
//   alert(`My name is Ram Thapa!`);
// });

//AddEvents Listeners
// const myTitle = document.getElementsByClassName("title");
// const Box = document.getElementsByTagName("span");
// const Btn = document.getElementById("heyclick");
// const MyInput = document.querySelector("input");

// Box[0].style.padding = "20px";
// Box[0].style.backgroundColor = "purple";
// Box[0].style.color = "white";

// Btn.style.padding = "2vmax 4vmax";
// Btn.style.backgroundColor = "Orange";
// Btn.style.color = "white";

// Btn.addEventListener("click", () => {
//   myTitle[0].innerHTML = "Haina k ho yesto yo Chakka parchu";
//   myTitle[0].classList.add("myBox");
// });

// Box[0].addEventListener("mouseover", () => {
//   myTitle[0].style.backgroundColor = "Yellow";
//   Btn.style.transform = "scale(1.1)";
// });

// Box[0].addEventListener("mouseout", () => {
//   myTitle[0].style.backgroundColor = "red";
//   Btn.style.transform = "";
// });

// Btn.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   Btn.style.backgroundColor = "crimson";
// });

// addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   Btn.style.filter = "blur(10px)";
// });

// Box[0].addEventListener("dblclick", () => {
//   document.body.style.backgroundColor = "black";
// });
// Box[0].addEventListener("click", () => {
//   document.body.style.backgroundColor = "white";
// });

// MyInput.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

//Math Object
// const ans = Math.round(4.6);
// console.log(ans);

// const ans = Math.floor(4.6);
// console.log(ans);

// const ans = Math.ceil(4.2);
// console.log(ans);

// const ans = Math.trunc(3.123);
// console.log(ans);

// const ans = Math.pow(2, 3);
// console.log(ans);

// const ans = Math.sqrt(625);
// console.log(ans);

// const ans = Math.abs(-21);
// console.log(ans);

// function myFunc(a, b) {
//   return Math.abs(a - b);
// }

// console.log(myFunc(2, 9));

// const ans = Math.random() * 10;
// console.log(ans);

// const ans = Math.max(6, 9, 45);
// console.log(ans);

// const ans = Math.sin((90 * Math.PI) / 180);
// console.log(ans);

// const ans = Math.sin((30 * Math.PI) / 180);
// console.log(ans);

//Date
// const date = new Date();
// console.log(date.getTime());
// console.log(date.toISOString());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());

//
// const Text = document.getElementById("myText");
// const Add = document.getElementById("myAdd");
// const Delete = document.getElementById("myDelete");

// Add.style.backgroundColor = "green";
// Add.style.color = "white";
// Add.style.padding = "20px";
// Add.style.cursor = "pointer";
// Add.style.border = "none";

// Delete.style.backgroundColor = "red";
// Delete.style.color = "white";
// Delete.style.padding = "20px";
// Delete.style.cursor = "pointer";
// Delete.style.border = "none";

// const myAdd = () => {
//   localStorage.setItem(
//     "key",
//     JSON.stringify({ name: "Ram", age: 23, gender: "male" })
//   );
// };
// Add.addEventListener("click", myAdd);
// Delete.addEventListener("click", () => {
// localStorage.removeItem("key");
//   localStorage.clear();
// });

// if (localStorage.getItem("key")) {
//   console.log(JSON.parse(localStorage.getItem("key")));
// }

function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculateResult() {
  const result = document.getElementById("result").value;
  const calculatedResult = eval(result);
  document.getElementById("result").value = calculatedResult;
}

function clearResult() {
  document.getElementById("result").value = "";
}
