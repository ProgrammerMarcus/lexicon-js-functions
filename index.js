function greeting() {
    alert("Hello there my friend!");
}
// greeting()

function greetingWithName(name) {
    alert(`Hello there my friend! You must be ${name}!`);
}
// greetingWithName("Firstname Lastname")

function addition(num1, num2) {
    return num1 + num2;
}
let additionSum = addition(1, 3);
console.log(additionSum);

function division(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by 0!");
    } else {
        return num1 / num2;
    }
}
let divisionQuotient = division(4, 2);
console.log(divisionQuotient);

function area(length, width) {
    return length * width;
}
console.log(`To area of a box with a length of 4 and a height of 4 is ${area(4, 4)}.`);
