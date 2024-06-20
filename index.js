//REverse the sentence
const str = "Hello world how are you hope you are doing great things"

// const rev = str.split(" ").reverse().join(" ")

// console.log(rev)
const rev = str.split(" ").map((words)=>{
     return words.split("").reverse().join("");
})
// console.log(rev.join(" "))

////Findin the elements are array or not
function check(eelements){
    return Array.isArray(eelements)
}
// console.log(check([]))
// console.log(check({}))


///removing the array elements
const array = [12,3,4,5,6 ,7,8,9,10,11,12,13,14]
// while(array.length>0){
//     array.pop();
// }
// console.log(array);
// array.length = 0;
array.splice(0,array.length);
// console.log(array)



///conacat array elements

const array1 = [1,3,4,5,6 ,7,8,9,10,11,12,13,14]
// const array2 = [12,3,4,5,6 ,7,8,9,10,11,12,13,14]
// console.log(array1.concat(array1))


///Reversing a number
function reverse(num){
    // let rem = 0;
    // while(num !== 0){
    //     rem = rem * 10 + num % 10;
    //     num = Math.floor(num / 10); // Use Math.floor to ensure integer division
    // }
    // return rem;
    var str = num.toString();
    var rev = str.split("").reverse().join("");
    return Number(rev);
}

// const num = 123456789;
// console.log(reverse(num)); // Outputs: 987654321



//REversing a number;

function reve(num){
    return Number(num.toString().split("").reverse().join(""));
}

const num = 123456789;
// console.log(reve(num)); // Outputs: 987654321


function capital(str){
    var res = str.split(" ").map(function(word){
         return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return res.join(" ");
}

const strings = "hello world how are you hope you are doing great things"
console.log(capital(strings));
