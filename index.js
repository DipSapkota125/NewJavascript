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
// const Btn = document.querySelector("button");
// const greeting = (name, age, income) => {
//   console.log(
//     `my name is ${name}. I am ${age} year old & my income is only ${income}`
//   );
// };

// const id = setInterval(greeting, 1000, "Dip", 23, 25000);

// Btn.addEventListener("click", () => {
//   clearInterval(id);
// });

//SetTimeout and SetInterval;

// setTimeout(() => {
//   console.log("Hello world!");
// }, 5000);

// setInterval(() => {
//   console.log("Hello world!");
// }, 2000);

// const Btn = document.querySelector("button");
// const greeting = (name, age, income) => {
//   console.log(`My name is ${name}.My age is:${age} and my income is:${income}`);
// };

// const closeTime = setInterval(greeting, 2000, "Ram", 23, 50000);

// Btn.addEventListener("click", () => {
//   clearInterval(closeTime);
// });

//OOP concept

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = function (amount) {
//     this.balance += amount;
//   };

//   this.withdraw = function (amount) {
//     this.balance -= amount;
//   };
// }

// const ramAccount = new BankAccount("Ram", 1000);
// const hariAccount = new BankAccount("Hari");

// ramAccount.deposit(5000);
// ramAccount.withdraw(2000);
// console.log(ramAccount);

//OOP in javascript

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

// this.deposit = function (amount) {
//   this.balance += amount;
// };

// this.reduce = function (amount) {
//   this.balance -= amount;
// };
// }
// const sitaAccount = new BankAccount("Sita", 4000);

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };
// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };
// sitaAccount.deposit(5000);
// console.log(sitaAccount);

// const myForm = document.querySelector("#myForm");
// const customername = document.querySelector("#customername");
// const balance = document.querySelector("#balance");

// const DepositForm = document.querySelector("#depositForm");
// const accountNumber = document.querySelector("#accountnumber");
// const amount = document.querySelector("#amount");

// let accounts = [];
// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const newAccount = new BankAccount(customername.value, +balance.value);
//   accounts.push(newAccount);
//   console.log(accounts);
// });

// DepositForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const account = accounts.find(
//     (item) => item.accountNumber === +accountNumber.value
//   );
//   if (account) {
//     account.deposit(+amount.value);
//     console.log(accounts);
//   }
// });

// const ramAccount = new BankAccount("Ram", 9000);
// const hariAccount = new BankAccount("hari", 8000);

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// ramAccount.deposit(7000);
// ramAccount.withdraw(5000);
// hariAccount.deposit(4000);
// console.log(ramAccount);
// console.log(hariAccount);

// const ramAccount = new BankAccount("Ram", 6000);
// const hariAccount = new BankAccount("Hari");

// console.log(ramAccount);
// console.log(hariAccount);
// const myForm = document.querySelector("#myForm");
// const customername = document.querySelector("#customername");
// const balance = document.querySelector("#balance");

// const depositForm = document.querySelector("#depositForm");
// const accountNumber = document.querySelector("#accountnumber");
// const amount = document.querySelector("#amount");

// let accounts = [];
// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const neObj = new BankAccount(customername.value, +balance.value);
//   accounts.push(neObj);
//   console.log(accounts);
// });

// depositForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const account = accounts.find(
//     (item) => item.accountNumber === +accountNumber.value
//   );
//   if (account) {
//     account.deposit(+amount.value);
//     console.log(accounts);
//   }
// });

// class BankAccount {
//   constructor(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     this.balance -= amount;
//   }
// }

// const ramAccount = new BankAccount("ram", 5000);
// ramAccount.deposit(4000);
// console.log(ramAccount);

//class in javascript

// class BankAccount {
//   constructor(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//   }
//   deposit(amount) {
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     this.balance -= amount;
//   }
// }

// const ramAccount = new BankAccount("Ram", 6000);
// ramAccount.deposit(6000);
// const hariAccount = new BankAccount("Hari", 9000);
// hariAccount.deposit(5000);
// hariAccount.withdraw(2000);

// console.log(ramAccount);
// console.log(hariAccount);

// function BankAccount(customerName, balance) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function SavingAccount(customerName, balance) {
//   BankAccount.call(this, customerName, balance);
//   this.transactionLimit = 10000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalAccount = function (amount) {
//   console.log("Taking personal loan is :" + amount);
// };

// const sitaAccount = new SavingAccount("Sita", 8000);
// const gitaAccount = new SavingAccount("Sita", 8000);
// gitaAccount.takePersonalAccount(2000);

// gitaAccount.deposit(6000);

// console.log(gitaAccount);

// class BankAccount {
//   #balance;
//   constructor(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.#balance = balance;
//   setBalance(amount) {
//     if (isNaN(amount)) {
//       throw new Error("Invlaid input");
//     }
//     this.#balance = amount;
//   }
//   getBalance() {
//     return this.#balance;
//   }
// }

// class SavingAccount extends BankAccount {
//   transactionLimit = 50000;
//   constructor(customerName, balance) {
//     super(customerName, balance);
//   }

//   #calculateInterest(amount) {
//     console.log("calculating interest");
//   }

//   takePersonalLoan(amount) {
//     this.#calculateInterest(amount);
//     console.log(`Taking personal loan is : ${amount}`);
//   }
// }

// const ramAccount = new SavingAccount("Ram", 9000);
// ramAccount.setBalance(6000); }
// deposit(amount) {
//   this.#balance += amount;
// }

// withdraw(amount) {
//   this.#balance -= amount;
// }

//
// ramAccount.deposit(5000);
// ramAccount.calculateInterest(40000);
// console.log(ramAccount);
// console.log(ramAccount.getBalance());

// class BankAccount {
//   #balance = 0;
//   constructor(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     this.#balance -= amount;
//   }

//   setBalance(amount) {
//     this.#balance = amount;
//   }
//   getBalance(amount) {
//     return this.#balance;
//   }
// }

// class SavingAccount extends BankAccount {
//   transactionSLimit = 50000;
//   constructor(customerName, balance) {
//     super(customerName, balance);
//   }

//   #calculatingInterest(amount) {
//     console.log("Calculating interest is :" + amount);
//   }
//   takePersonalLoan(amount) {
//     this.#calculatingInterest(amount);
//     console.log("Taking personal Loan is :" + amount);
//   }
// }

// class CurrentAccount extends BankAccount {
//   transactionSLimit = 10000;
//   constructor(customerName, balance) {
//     super(customerName, balance);
//   }
//   takePersonalLoan(amount) {
//     console.log("Taking personal Loan is :" + amount);
//   }
// }

// const ramAccount = new BankAccount("ram", 6000);
// ramAccount.#balance = 9000;
// console.log(ramAccount);

// class Profile {
//   constructor(name, age, income) {
//     this.name = name;
//     this.age = age;
//     this.income = income;
//   }

//   static SortByAge(user1, user2) {
//     return user1.age - user2.age;
//   }
// }

// const user1 = new Profile("ram", 34, 6000);
// const user2 = new Profile("shyam", 30, 9000);
// const user3 = new Profile("hari", 20, 7000);

// const users = [user1, user2, user3];
// users.sort(Profile.SortByAge);
// console.log(users);

//instance method

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   calculateArea() {
//     return Math.PI * this.radius * this.radius;
//   }
//   static compare(rad1, rad2) {
//     return rad1.radius - rad2.radius;
//   }

//   static defaultRadius = 2;
// }

// const rad1 = new Circle(8);
// const rad2 = new Circle(4);

// console.log(rad1, rad2);
// console.log(Circle.defaultRadius);
// console.log(Circle.compare(rad1, rad2));
// console.log(rad1.calculateArea());

// class Profile {
//   constructor(name, age, income) {
//     this.name = name;
//     this.age = age;
//     this.income = income;
//   }

//   static sortByAge(user1, user2) {
//     return user1.age - user2.age;
//   }
// }

// const user1 = new Profile("Ram", 23, 5000);
// const user2 = new Profile("shyam", 19, 9000);
// const user3 = new Profile("Ram", 20, 6000);

// const users = [user1, user2, user3];
// users.sort(Profile.sortByAge);
// console.log(users);

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  //instance method
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  //static method
  static compareByNumber(rad1, rad2) {
    return rad1 - rad2;
  }

  //property
  static defaultValue = 3;
}

const rad1 = new Circle(8);
const rad2 = new Circle(5);

console.log(rad1, rad2);
console.log(Circle.defaultValue);
console.log(Circle.compareByNumber(9, 5));
console.log(rad1.calculateArea());
