// let sum = function(a, b) {
//     return a + b;
// }

// let hello = function () {
//     console.log('Hello');
// }

// let id = setInterval( () => {
//     console.log("hello Aditya")
// }, 4000);

// setTimeout( () => {
//     clearInterval(id);
// },10000);

//Destructuring

const student = {
    name : "Karan",
    age : 14,
    class : 9,
    username : "Karan@.com",
    password : "1234"
};

// let username = student.username;
// let password = student.password;

let {username , password} = student;