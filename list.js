/* Make the following code work:
sum(2, 3) // 5
sum(2)(3) // 5
*/

///////////////////////

/*
Add a sum method to the array prototype
var arr = [1,2,3,4];
arr.sum();  //returns 10

var arr = [10, 28, 14, 33];
arr.sum(); //returns 85
*/

///////////////////////

/*
Write a function that takes a number parameter 
and returns the smallest palindrome number higher than the parameter

nextPal(11) == 22

nextPal(188) == 191

nextPal(191) == 202

nextPal(2541) == 2552
*/

////////////////////////

/*
'anane' === 1
'adak' === 2

amazonCounting(1) // 'anane'
amazonCounting(2) // 'adak'
amazonCounting(13) // 'adak adak adak adak adak adak anane'

No trailing spaces!
*/

/////////////////////////

/*
write a function that will console log the numbers 1 through 5, 
with delays between each log equaling the logged number.
delayLog() // pauses 1 second, then logs 1
// pauses 2 seconds after the previous log, then logs 2
// pauses 3 seconds after the previous log, then logs 3
// pauses 4 seconds after the previous log, then logs 4
// pauses 5 seconds after the previous log, then logs 5
*/

/////////////////////////

/*
 Write a function that takes in an array of numbers and determines whether those numbers are in order
 ordered( [1, 2, 3, 7, 12] ); // true
 ordered( [4, 9, 42, 22, 56] ); // false
*/

//////////////////////////

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

////////////////////////////

/*

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
personTmpl({ name: "John", animalType: "dogs" }); // John likes dogs

*/

/////////////////////////////

/*
You'll be passed an array of objects - you must sort them in descending order based on the value of an arbitrarily specified property. For example, when sorted by a, this:

[
  {a: 1, b: 3},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 4, b: 12}
]

[
  {a: 4, b: 12},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 1, b: 3}
]

your function must take the form function sortList (sortBy, list)

The values will always be numbers, and the properties will always exist.
*/

///////////////////////////////

/*

You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

arraySum([2, 3]) // 5
arraySum([4, 4, [3, 2]) // 13

*/

///////////////////////////////

/*
write a function that makes a triangle of the character `#`. (it can be a lopsided triangle.) do this without manually writing each line in your code. example result:

#
##
###
####
#####
######
#######
*/

///////////////////////////////

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case
*/

///////////////////////////////
/*
Write a generic function chainer

Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input). Return the final value after execution is complete.



function add(num) {
  return num + 1
}

function mult(num) {
  return num * 30
}

chain(2, [add, mult]);
// returns 90;
*/

///////////////////////////////

/*
we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

    square() must return a copy of the array, containing all values squared, the original array must not be changed
    cube() must return a copy of the array, containing all values cubed, the original array must not be changed
    average() must return the average of all array values, average() on an empty array must return NaN
    sum() must return the sum of all array values
    even() must return an array of all even numbers, the original array must not be changed
    odd() must return an array of all odd numbers, the original array must not be changed

var numbers = [1, 2, 3, 4, 5];
numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]

*/

///////////////////////////////

/*

make the following code work

three(times(five())) // 15
five(plus(three())) // 8

*/

///////////////////////////////

/*
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/

///////////////////////////////

/*
Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.

If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.
*/
var data = [1, 2, 3, 4, 5];

rotate(data, 1) // => [5, 1, 2, 3, 4]
rotate(data, 2) // => [4, 5, 1, 2, 3]
rotate(data, 3) // => [3, 4, 5, 1, 2]
rotate(data, 4) // => [2, 3, 4, 5, 1]
rotate(data, 5) // => [1, 2, 3, 4, 5]

rotate(data, 0) // => [1, 2, 3, 4, 5]

rotate(data, -1) // => [2, 3, 4, 5, 1]
rotate(data, -2) // => [3, 4, 5, 1, 2]
rotate(data, -3) // => [4, 5, 1, 2, 3]
rotate(data, -4) // => [5, 1, 2, 3, 4]
rotate(data, -5) // => [1, 2, 3, 4, 5]

rotate(data, 7)     // => [4, 5, 1, 2, 3]
rotate(data, 11)    // => [5, 1, 2, 3, 4]
rotate(data, 12478) // => [3, 4, 5, 1, 2]

///////////////////////////////
/*
Your job is to build a function which determines whether or not there are double characters in a string (including whitespace characters). For example aa, !! or .

You want the function to return true if the string contains double characters and false if not. The test should not be case sensitive; for example both aa & aA return true.
*/
  doubleCheck("abca")
  //returns false

  doubleCheck("aabc")
  //returns true

  doubleCheck("a 11 c d")
  //returns true

  doubleCheck("AabBcC")
  //returns true

  doubleCheck("a b  c")
  //returns true

  doubleCheck("a b c d e f g h i h k")
  //returns false

  doubleCheck("2020")
  //returns false

  doubleCheck("a!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~")
  //returns false

///////////////////////////////

/*
Write a function that takes in two object parameters, 'input' and 'changed'. 'changed' will be an object that roughly matches the structure of the 'input'.
Your function should update 'input' with the matching properties of 'changed'. Any properties on only one object should be ignored. Arrays should be concatenated. 
Your function should support any level of nesting.
*/

var test = {
    one: true
  , two: false
  , three: true
  , four: {
    innerOne: true
    , innerTwo: {
      deepOne: false
      , deepTwo: true
    }
  }
  , five: [1, 2, 3, 4]
};

var changed = {
  two: true
  , four: {
    innerTwo: {
      deepOne: true
    }
  }
  , five: [5, 6, 7, 8]
  , six: false
}

nestSetter(test, changed);
// output = {
//   one: true
//   , two: true
//   , three: true
//   , four: {
//       innerOne: true
//       , innerTwo: {
//           deepOne: true
//         , deepTwo: true
//     }
//   }
//   , five: [1, 2, 3, 4, 5, 6, 7, 8]
// }

///////////////////////////////

/*

For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them 
into a single array. If any of the arguments passed in are an 
array then the individual objects within the array will be flattened 
so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the 
single array result.

The following are examples of how this function would be used and 
what the expected results would be:

*/

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

///////////////////////////////
/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples:
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false
validParentheses( "(" ) => returns false
validParentheses( "(())((()())())" ) => returns true 
*/

///////////////////////////////

Write a new nestedFilter method on the Array prototype, it should work the same as filter, 
but work on all nested arrays within the initial array.

[false, true, [true, false, false], true].nestedFilter( item => item ); // returns [true, [true], true]
[2, 4, 8, 7, [9, 12, 13, 99, [87, 64, 3022]]].nestedFilter( item => item % 2 === 0); // returns [2, 4, 8, [12, [64, 3022]]]

///////////////////////////////

Write a function that takes in an array of objects, each with a name property, and creates a new array
of objects based on their structure. The strings will be seperated by '/''s.

Example:

var data = [
  {
    name: 'App/AFCU/sanity'
  },
  {
    name: 'App/AFCU/product/'
  },
  {
    name: 'Mobile/somethingElse/'
  }
];

formatter( data )
//returns 
[
  {
      name: 'App'
    , children: [
        {
            name: 'AFCU'
          , children: [
              {
                name: 'sanity'
              }
              , {
                name: 'product'
              }
            ]
        }
      ]
  }
  , {
    name: 'Mobile'
    , children: [{ name: 'somethingElse' }]
  }
]

///////////////////////////////

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)
*/

humanReadable(0) // '00:00:00'
humanReadable(5) // '00:00:05'
humanReadable(60) // '00:01:00'
humanReadable(86399) // '23:59:59'
humanReadable(359999) // '99:59:59'

///////////////////////////////

/*

Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()

*/

///////////////////////////////

/*

Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of evaluating a function on each element.

The method should return an object, in which for each different value returned by the function there is a property whose value is the array of elements that return the same value.

If no function is passed, the element itself should be taken.

*/

[1,2,3,2,4,1,5,1,6].groupBy()
{
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
}

[1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
{
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
}

///////////////////////////////

/*
TL;DR: write a nouveau function that replicates all the behavior of the new operator.

New

So what about new? Well, the unary operator new is intended to create "instances" of a constructor function. To be more precise, the operation new Constructor(arg1, arg2, ...argX) does the following:

    Creates an empty object (which we'll call instance) which prototypally inherits from Constructor.prototype
    Binds Constructor to instance (meaning this is instance) and invokes Constructor with any arguments passed in
    If the return value of Constructor is an object (including arrays, functions, dates, regexes, etc.) the operation evaluates to that object
    Otherwise, the operation evaluates to instance

Let's see some examples:
*/

function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function(){
  return 'My name is ' + this.name + ' and I am ' + this.age;
};
var john = new Person('John', 30);
var jack = new Person('Jack', 40);
console.log( john.introduce() ); // My name is John and I am 30
console.log( jack.introduce() ); // My name is Jack and I am 40

function ReturnsArray (name) {
  this.name = name;
  return [1, 2, 3];
}
var arr = new ReturnsArray('arr?');
console.log( arr.name ); // undefined
console.log( arr ); // [1, 2, 3]

/*

Exercise

Your mission: write a function nouveau (that's French for "new") which takes one function parameter 
(the constructor), plus an unknown number of additional parameters of any type (arguments for the constructor).
 When invoked, nouveau should do everything new does and return the same object new would evaluate to, 
 as specified above.

 var john = nouveau(Person, 'John', 30); // same result as above

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */