// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("Hello world", i);
// }

// console.log("Bye");

let args = process.argv;

for(let i=0; i<args.length; i++){
    console.log("Hello to ",args[i]);
}