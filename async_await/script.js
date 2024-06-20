// async function gau() {
//     console.log("A");
//     const resp = await fetch("https://mocki.io/v1/d8e92b27-bffa-49c8-82d3-37d653520cde");
//     console.log("C");
//     const res = resp.json();

//     return res;

// }
// gau().then((res) => {
//     console.log(res)
// }).catch(() => {
//     console.log("Error")
// });
// console.log("D");
// console.log("E");

// var x = Symbol("Hello");
// var y = Symbol("Hell")
// console.log(x === y)
// var x = Symbol.for("Hello");
// var y = Symbol.for("Hello");
// console.log(x === y);

// let age = Symbol("gender")
// let user = {
//     name: "Gaurav",
//     class: 'Btech'
//         // [age]: 20

// }
// user[age] = 0;
// ///canot use in for in loop
// //cannot convet it into json form
// //it will skips
// console.log(JSON.stringify(user));
// // for (let key in user) {
// //     console.log(key)
// // }
// console.log(user);
// // console.log(user[age])
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(function(numbers) {
//     console.log(numbers)
// });let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.map(function(numbers) {
//     console.log(numbers)
// });
//not have control if started than stop at given conditions
// iterators   lop


const num = [1, 2, 3, 4, 5]
let itr = num[Symbol.iterator]()
    // console.log(itr.next()) //show false if eleme
    //nt is there

let re = itr.next();
while (!re.done) {
    console.log(re.value);
    re = itr.next();
}