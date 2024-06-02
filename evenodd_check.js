var num = 14;
if (num % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd")
}
var num = "16";

if (typeof num !== 'number') {
    console.log("Not a number");
}
else if (num % 2 === 0) {
    console.log("it is even");
}
else {
    console.log("it is odd");
}
var num = 14;
console.log(num % 2)
  
var num = 12;
var isprime = true;


if (typeof num !== 'number') {
    console.log("It is not a number");
}
else if (num === 1) {
    console.log("Number is not prime or composite");
}
else if (num > 1) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            isprime = false;
            break;
        }

    }
    if (isprime) {
        console.log("Number is prime");

    } else {
        console.log("Number is not prime");
    }
} else {
    console.log("Number is negative number")

}
