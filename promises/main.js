// function prom(complete) {
//     return new Promise(function(resolve, reject) {
//         console.log("Fetching Data");
//         setTimeout(() => {
//             if (complete) {
//                 resolve("Completed")
//             } else {
//                 reject("Incomplete");
//             }
//         }, 3000)
//     })

// }

// prom(0).then(() => {
//     console.log("Completed....")
// }).catch(() => {
//     console.log("Incompleted.....")
// })
// function prom(a, b) {
//     return new Promise(function(resolve, reject) {
//         console.log("Fetching Data");
//         var c = a / b;
//         setTimeout(() => {
//             if (a, b) {
//                 resolve(`Result is ${c}`)
//             } else {
//                 reject("Incomplete");
//             }
//         }, 1000)
//     })

// }

// prom(100, 20).then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// })

////promise all


let p1 = new Promise((res, reject) => {
    setTimeout(() => {
        console.log("First Promise")
        res(10);
    }, 1000)
})
let p2 = new Promise((resolve, rej) => {
    setTimeout(() => {
        console.log("Second Promise")
        rej(20);
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("tird Promise")
        resolve(30);
    }, 3000)
})

Promise.all([p1, p2, p3]).then((res) => {
    console.log(`Result : ${res}`)
}).catch((err) => {
    console.log("error")
})