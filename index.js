// 1.  Write a function that declares variables using  var  ,  let  , and  const  . Attempt to reassign 
// each variable within the same function scope, and observe the outcome. Explain any 
// differences in behavior.

const arrFun = () => {
    var num1 = 10;
    num1 = 20;
    // console.log(num1);

    const num2 = 30;
    // num2 = 40;
    // console.log(num2); // TypeError: Assignment to constant variable.

    let num3 = 50;
    num3 = 60;
    // console.log(num3);
};

arrFun();

// 2.  Create a function named  greet  that takes two parameters:  name  and  greeting  , with 
// greeting  having a default value of  "Hello"  . If no  greeting is provided, the function 
// should output "Hello, [name]!".

const greet = (name, greeting = "Hello") => {
    // console.log(`${greeting}, ${name}!`);
};

greet('sifat');


// 3.  Using template literals, write a function that takes three parameters:  firstName  , 
// lastName  , and  age  , and returns a string in the format:  "My name is [firstName] 
// [lastName] and I am [age] years old." 

const threeParamsFun = (firstName, lastName, age) => `My name is ${firstName} ${lastName} and I am ${age} years old.`;

// console.log(threeParamsFun('John', 'Doe', 30));



// 4.  Write an arrow function named  add  that takes two parameters  and returns their sum. 
// Rewrite it as a one-line function without using the  return  keyword. 

const sum = (a, b) => a + b;

// console.log(sum(10,20));


// 5.  Write a function that accepts any number of arguments and returns the maximum value 
// among them using the spread operator. Test it with varying numbers of arguments.

const maxNum = (...nums) => Math.max(...nums);

// console.log(maxNum(10, 20, 30, 960, 40, 50));


// 6.  Create a function  mergeArrays  that takes two arrays  as arguments and returns a single 
// array containing all elements of the two arrays, without modifying the original arrays, using 
// the spread operator. 

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));


// 7.  Given an object  person  with properties  name  ,  age  ,  and  country  , write a function that 
// extracts  name  and  country  using object destructuring  and returns them in an array. 

const person = {
    name : 'John Doe',
    age : 30,
    country: 'USA'
};


const personInfo = ({name , age}) => {
    return [name, age];
    
};


// console.log(personInfo(person));


// 8.  Write a function that takes an array of numbers as input, and uses array destructuring to 
// extract the first, second, and third elements, returning them in an object with properties 
// first  ,  second  , and  third 

const arrayOfNums = () => {
    const numArray = [1, 2, 3, 4, 5];
    const [first, second, third , ...rest] = numArray;
    // console.log(first, second, third , ...rest);
    const numObject = {first, second, third};
    // console.log(numObject);
    return numObject;
};

// console.log(arrayOfNums());


// 9.  Create a function that takes an object representing a book with properties  title  ,  author  , 
// year  , and  publisher  . Use destructuring to extract  title  and  author  , and return a 
// formatted string:  "Title: [title], Author: [author]" 


const representingBook = () => {
    const representingB = {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951,
        publisher: 'J.B. Lippincott & Co.'
    }
    const { title, author } = representingB;
    return{title , author};
};

// console.log(representingBook());


// 10. Given an array of numbers, write a function that uses the spread operator to copy the array, 
// then adds a new number at the end without modifying the original array. 

const addNumberToArray = (arr, num) => [...arr, num];

// console.log(addNumberToArray([1, 2, 3], 4)); 