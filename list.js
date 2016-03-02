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