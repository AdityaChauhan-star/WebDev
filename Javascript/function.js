let sum = function(a, b) {
    return a + b;
}

let hello = function () {
    console.log('Hello');
}

let id = setInterval( () => {
    console.log("hello Aditya")
}, 4000);

setTimeout( () => {
    clearInterval(id);
},10000);