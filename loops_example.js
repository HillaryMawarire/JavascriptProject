var num = 10;

while (num <= 20) {
    console.log(num);
    num = num + 1;
}
console.log("While loop completed");

console.log("Odd numbers between 1 to 20");
var num2 = 1;
while (num2 <= 20) {
    console.log(num2);
    num2 = num2 + 2;
}
console.log("Print 1 to 10 using For Loop");

for (var num3 = 1; num3 <= 10; num3++) {
    console.log(num3);
}
console.log("Print all the numbers in array using for each loop");
var arr1 = [4, 7, 12, 10, 15, 20];

for (var num of arr1) {
    console.log(num);
}

console.log("Print all the numbers in array normal for loop");
for (var index = 0; index < arr1.length; index++) {

    console.log(arr1[index]);
}
var num = 13;
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
