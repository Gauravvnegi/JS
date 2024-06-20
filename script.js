// let user = "Sagar Negi"
// console.log(`Heloo ${user} Welcome to 2024`)

// let fname = "GAURAV"
// let Lname = "NEGI"

// function fullname(fname, Lname) {
//     return `${fname} ${Lname}`
// }
// let fun = (fname, Lname) => {
//         return `${fname} ${Lname}`
//     }
//     // let fun = (fname, Lname) => `${fname} ${Lname}` 

// let hello = `Hello ${fun(fname,Lname)}`;
// document.write(hello);


//argument function convet into object // Rest name
// function sum(n1, n2) {
//     return n1 + n2;
// }
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;;\\<-?->//
// function sum(n1, n2, n3) {
//     return n1 + n2 + n3
// }

// function sum(n1) {
//     return n1
// }
// console.log(sum(10));
// console.log(sum(10, 20, 30))


// function sum(name, ...arguments) {
//     let ans = 0;
//     for (let i in arguments) {
//         ans += arguments[i];
//     }
//     document.write(`Your name is ${name} and marks is :  ${ans}`);
// }
// sum(10);
// sum(10, 20);
// sum("Gaurav", 10, 203);


// ---------------------------spread operator

// function sum(name, ...arg) {
//     let ans = 0;/// is leye 0 bhi print ho raha h
//     for (let i in arg) {
//         ans += arg[i]
//     }
//     document.write(`Hello ${name} and array is sum is ${ans}`);
// }
// let arr = [1, 2, 3, 4, 5]
// sum("Gaurav Negi", arr);

// function sum(name, ...arg) {
//     let ans;
//     for (let i in arg) {
//         ans += arg[i]
//     }
//     document.write(`Hello ${name} and array is sum is ${ans}`);
// }
// let arr = [1, 2, 3, 4, 5]



// var a1 = [1, 2, 3, 4, 5]
// var a2 = [6, 7];
// var a3 = [8, 9];
// var a4 = [11, ...a1, ...a2, ...a3, "sdaf"]
//     // console.log(a4)
// var a2 = [...a1]; // shalow copy
// a1.push(10)
// console.log(a1);
// console.log(a2);


// let obj1 = {
//     name: "Gaurav Negi"
// }
// let obj2 = {
//     age: 20
// }
// let obj3 = {
//     ...obj1,
//     ...obj2,

// }
// console.log(obj3);

////--------object literals


// let name = "Gaurav Negi"
// let course = "Btech";
// var obj1 = {
//     name: name,
//     course,
// }
// console.log(obj1)

// let name = "Student"
// let course = "Btech";
// var obj1 = {
//     [name + " Name "]: "Gaurav Negi",
//     course,
//     detail: function() {
//         return `${this.name} is student of ${course}`;
//     }
// }
// console.log(obj1.detail())
// console.log(obj1)
///////////////////////////////////////interview
// for (var i = 1; i <= 3; i++) {
//     console.log(i);
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)

// }
// {
//     let a = 1
//     let b = 2

//     console.log(a)
//     console.log(b);
// }


//temporal dead zone
// The temporal dead zone (TDZ) is a
//specific period in the execution of JavaScript
//code where variables declared with 
//let and const exist but cannot be accessed or //
//assigned any value
// console.log(a)
// console.log(b);
// var a
// console.log(a)
// a = 10;
// let i = 10;
// console.log(i)


// function ga() {
//     let a = 1,
//         b = 2
//     c = 0;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// ga()
//     // console.log(a);
//     // console.log(b);
// console.log(c);

// const arr = [1, 2, 3]
// arr[4] = 5
// console.log(arr[30])

// var x = 19console.log("St")
// setTimeout(() => {
//     console.log("Time")
// }, 0)
// console.log("End")

// function foo() {
//     console.log(x);
//     var y = 10 x
// }
// foo();\
//The setTimeout function in JavaScript is designed to execute its callback function after a specified delay. Even if you provide a delay of 0 milliseconds, it doesn't mean the callback will execute immediately. Instead, it will be pushed to the event queue, and its execution will be scheduled after the current execution context is completed.
// const obj1 = {
//         name: "Gaurav",
//         age: 20,
//         add: {
//             city: "Hal",
//             no: 239987
//         }
//     }
//     //The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments
// const obj2 = {...obj1, kam: "aksjdhfkasdhkj" };
// obj2.name = "Sagar"
// console.log(obj2)
// console.log(obj1)
//the content of the array or object is not protected, 
//and you can still modify the elements or properties.

// var x = 0;

// function inc() {
//     x++;
//     console.log(x);
//     update_X();
// }

// function dnc() {
//     if (x != 0) {
//         x--;
//     }
//     update_X();
//     console.log(x)
// }

// function update_X() {
//     document.getElementById('help').innerHTML = x
// }

///array distructing --------------------
// let user = ["Gaurav", 22, "Haldwani", ["Male", 25000]];
// let name = arr[0];
// let age = arr[1];
// console.log(name);
// console.log(age)
///if not matched undefine
// let [name, age, city] = user
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(hell)
// let [name, age = 25, city, [gender, sal]] = user //can set defaut value
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender)
// console.log(sal)


//now gicing rest operator 
// let [name, ...arg] = user //can set defaut value
// console.log(name);
// console.log(arg);


//using with function

// function user([name, age, city]) {
//     console.log(name)
//     console.log(age)
//     console.log(city);
// }
// user(["Gaurav", 22, "Haldwani"])

// function user() {
//     return ["Gaurav", 22, "Hald"]
// }

// let [name, age, city] = user();
// console.log(city)


///distrcuting objects
//his is because the assignment is based on the property names
// let user = {
//     name: "Gaurav",
//     age: 23,
//     city: "Hld"
// }

// let { name, city, age } = user;
// console.log(name)
// console.log(age)
// console.log(city)


//we can use ahort name or alice name 
// let user = {
//     name: "Gaurav",
//     age: 23,
//     city: "Hld"
// }

// let { name: n, city: c, age: a } = user;
// console.log(n)
// console.log(c)
// console.log(a)



///es - 6 vs oops



////uniqu data type 

// var x = Symbol("Hello");
// var y = Symbol("Hello")
// console.log(x === y)

// var a = function Hello(){
//     // console.log("Hello")
//     // console.log(Hello)
//     return function(){
//         console.log("kahsdfasldkdfkls")
//     }
// }
// function xyx(){
//     console.log("Hello xyz")
// }
// console.log(a())


//callback

// function x(callback){
//     console.log("x")
//     callback()
// }
// x(function(){
//     console.log("Y");
// })

// async function solve() {
//     try {
//         const data = await fetch('https://dummyjson.com/products');
//         const response = await data.json();
//         console.log(response); 
//     } catch (err) {
//         console.log("error");
//     }
// }
// solve();

// //promise
// function solve() {
//     return new Promise((resolve, reject) => {
//         fetch('https://dummyjson.com/products')
//             .then(response => {
//                return response.json()
//             })
//             .then(data => {
//                 resolve(data); // Resolve the promise with the fetched data
//             })
//             .catch(err => {
//                 reject(err); // Reject the promise with the error
//             });
//     });
// }

// solve()
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });



// const p = new Promise((res,rej)=>{
//     setTimeout(()=>{
//        res("Hello Gaurav Negi") 
//     },5000)
//     setTimeout(()=>{
//        res("Hello TWo Negi") 
//     },2000)
// })

// async function solve(){
//     const data2 = await p;
//     console.log(data2);
//     console.log("Hello hsdkjfhkjasdh")
//     const data = await p;
//     console.log(data);
//     console.log("Hello Sagar")


    
// }
// // function solve(){
// //     p.then((data)=> console.log(data));
// //     console.log("Hello Sagar")
// // }
// solve();

// async function solve() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
        
//         // Check if the response is okay (status in the range 200-299)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         // Handle any errors that occurred during the fetch or parsing
//         console.error('An error occurred:', error);
//     }
// }

// solve();


// function Person(name, age, city, gender, salary) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.gender = gender;
//     this.salary = salary;
// }

// const person = new Person("Pyush", 45, "New York", "FEmale", 85555);
// console.log(person);

// Person.prototype.displayName = function() {
//     console.log(this.name);
// }


// person.displayName(); 


// const obj = {
//     name :"string",
//     age:12
// }
// // const obj2 = Object.assign({}, obj);
// // const obj2 = {...obj}
// const obj2 = obj
// console.log(obj2)
// obj2.name = "st"
// console.log(obj2)
// console.log(obj)

//---------------------------------------------------------------------------call----apply---bind
// const obj1 = {
//   name : "Gaurav",
//   age : 12,
// //   displayName : function(){
// //     console.log(this.name  , this.age);
// // }
// }
// let displayName = function(sate , city  ){
//     console.log(this.name  , this.age , sate , city);
// }

// const obj2 ={
//   name:"Sagar",
//   age:13
// }
// // displayName.call(obj1);
// // displayName.call(obj2)
// // obj1.displayName.call(obj1);
// // obj1.displayName.call(obj2)
// // displayName.apply(obj1 ,["hal","city"])
// const anotherBoundFunction = displayName.bind(obj1, "Hello", "another city");
// anotherBoundFunction();
// let key = "ADDRESS"
// const obj ={
//   name:"Gaurav",
//   age:23,
//   add:{
//     city:"Haldwani"
//   },
//   ['Pin Code'] : 12345892739,
//   [key] : 'asdnfkjasd laskdjdflkasdjf sdjfla sd'
// }
// // delete obj.age;

// obj['Pin Code'] = 12133
// console.log(obj);
// console.log(obj['Pin Code']);
// const obj2 = new Object();

// obj.name = "Gaurav"
// obj2.name="Sagar"
// console.log(obj);

// console.log(obj2);


// for(const item in obj) {
//   console.log(obj[item]);
// }

// const sal ={
//   one:100,
//   two:200,
//   three:300,
//   four:400,
//   five:500,
//   six:600,
// }
// let sum=0;
// for(const item in sal) {
//   sum+=sal[item];
//   // .log(saconsolel[item]);
// }
// console.log(sum);

// var one=0;
// var one ="asdfasd"
// console.log(one)
// let one=0;
//  one ="asdfasd"
// console.log(one)
// const one=0;
// //  one ="asdfasd"
// console.log(one)

// for (const item in sal){
//   if(sal.hasOwnProperty(item)){
//     sum+=sal[item];
//   }
// }
// console.log(`Sal is ${sum}`);
