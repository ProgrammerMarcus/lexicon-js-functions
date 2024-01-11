function greeting() {
    alert("Hello there my friend!");
}
// greeting()

function greetingWithName(name) {
    alert(`Hello there my friend! You must be ${name}!`);
}
// greetingWithName("Firstname")

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

function greetingWithNameAgain(firstName, lastName) {
    return `Hello ${firstName} ${lastName}! How are you doing?`;
}

function distanceConverter(kilometers) {
    return Math.round(kilometers / 1.609344);
}
let distanceConverterConverted = distanceConverter(100);
console.log(`100 kilometers is approximately ${distanceConverter(100)} miles.`);

function temperatureConverter(celsius) {
    return Math.round(celsius * 1.8 + 32);
}
let temperatureConverterConverted = temperatureConverter(100);
console.log(`100 degrees celsius is approximately ${temperatureConverter(100)} fahrenheit.`);

function meanValue(array) {
    mean = 0;
    array.forEach((element) => {
        mean += element;
    });
    return mean / array.length;
}
let meanValueSaved = meanValue([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(`Mean is ${meanValueSaved}`);

function ageCheck(age) {
    if (0 <= age < 14) {
        return "Get out of here!";
    } else if (15 <= age < 17) {
        return "Sorry, you are not old enough";
    } else if (18 <= age < 19) {
        return "Sorry, you must be at least 20. Why don't you try a bar instead?";
    } else if (20 <= age < 80) {
        return "Thank you! Welcome!";
    } else if (age >= 80) {
        return "I'm sorry, where is your caretaker?";
    } else {
        return "Please wait until you are born.";
    }
}

function sum(array) {
    if (array.length !== 10) {
        return "The array must be a size of 10";
    }
    let sum = 0;
    array.forEach((element) => {
        sum += element;
    });
    return sum;
}
console.log(sum([10, 10, 10, 10, 10, 10, 10, 10, 10, 11]));

let person = {
    name: "John Smith",
    age: 44,
    city: "New York",
    skills: ["Anonymity", "Deception", "Murder", "Cooking", "Assassination"],
};

function skillList(target) {
    let text = `Name: ${target.name}\nAge: ${target.age}\nCity: ${target.city}\nSkills:\n`;
    return (text + person.skills.reduce(
            (skills, skill) => skills.concat("   -").concat(skill).concat("\n"), ""));
}
console.log(skillList(person));
