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


let number = 6;

switch (number) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thrusday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
    default :
        console.log("Invalid Input")
}