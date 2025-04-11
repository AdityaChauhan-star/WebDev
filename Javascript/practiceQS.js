let size = "S";

if (size === "XL") {
    console.log('Price is RS.250');
} else if (size === "L") {
    console.log('Price is RS.200');
} else if (size === "M") {
    console.log('Price is RS.100');
} else {
    console.log("Price is RS.50")
}

let str = "aditya";

if(str[0] === "a" && str.length > 3) {
    console.log("Good String");
} else {
    console.log("Not a good stirng");
}

let num = 12;

if((num%3 === 0) && (( num+1 ==15 ) || (num-1 == 11) ) ) {
    console.log("Safe");
} else {
    console.log("Unsafe");
}