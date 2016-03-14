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
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

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