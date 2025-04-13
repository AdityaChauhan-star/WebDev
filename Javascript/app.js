let color = "red";

// Traffic Light Simulation
if (color === "red") {
    console.log("Stop!");
} else if (color === "yellow") {
    console.log("Get ready to stop!");
} else if (color === "green") {
    console.log("Go!");
} else {
    console.log("Traffic light is broken")
}

let marks = 90;

if (marks >= 90){
    console.log("A+");
} else if (marks >= 60) {
    console.log("B");
} else if (marks >= 40) {
    console.log("C");
} else if (marks <= 33) {
    console.log("F");
}

let age = 13;
if (age >= 18) {
    console.log("You can Vote");
} else {
    console.log("You can't Vote");
}

//Switch Statement
let col = "red";
switch(col) {
    case "red" :
        console.log("Stoopp");
        break;
    case "yellow" :
        console.log("Slow down");
        break;
    case "green" :
        console.log("GO");
        break;
    default :
        console.log("Light Break")
}

//Logical Operators

if (marks >= 33 && marks >= 80 ) {
    console.log("Pass");
    console.log("A+");
}


// alert("This is a simple alert");
// let name = prompt("Enter your name ");
// console.log(name);
// console.log("This is a simple log");
// console.error("This is an error message");
// console.warn("This is a warning message");


let msg = "  Hello World! ";
let msg2 = "ILoveCoding";
