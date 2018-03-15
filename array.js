// NON-ARRAY GENERATING ITERATOR FUNCTION

var nums = [3,1,3,100,4,200];

// Array.sort() function will try to sort to give 

// num1 - num2 >=0

function compare(num1, num2) {

    return num1 - num2

}

// compare function

console.log(nums.sort(compare));

// Array.forEach() will run function to the every member of the array

function square(num) {

    console.log(num*num)

}

// forEach function

console.log(nums.forEach(square));

// Array.every() function will return true if all member of array return 

// true when evaluated with the supplied function

function isEven(num) {

    return num % 2 === 0;

}

(nums.every(isEven) ? console.log("true") : console.log("false"));

// for use with Array.reduce()

function add(runningTotal, currentValue) {

    return runningTotal + currentValue;

}

// reduce function

var sum = nums.reduce(add);

console.log(sum);

// map function will take each member of array 

// as input to the argument function

function curve(grade) {

    return grade += 5;

}

var grades = [77, 65, 81, 92, 83];

var newgrades = grades.map(curve);

console.log(newgrades)

// filter function will return array with member

// that satisfy boolean statement supplied in the argument function

var evens = nums.filter(isEven);

console.log(evens);