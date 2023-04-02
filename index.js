// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function evenOrOdd(number){
//     if (number % 2 === 0) {
//        return 'Even'
//     }
// return 'Odd'
// }
// console.log(evenOrOdd(2));
// console.log(evenOrOdd(3));
// console.log(evenOrOdd(4));

// You get an array of numbers, return the sum of all of the positives ones.
//Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0)continue
//         else {
//             sum += arr[i];
//         }
//     }
//     return sum
// }
// console.log(positiveSum( [1,-4,7,12]));

/**
 * Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
 */

// function sumArray(array) {
//   if (array == null) return 0;
//   return array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, element) => acc + element, 0);
// }

// console.log(sumArray([6, 2, 1, 8, 10]));
// console.log(sumArray([1, 1, 11, 2, 3]))

/**
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
 * 6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
 */
// if (n == null && n == undefined) throw new Error('can not repeat this, OoO')
// function repeatStr (n, s) {

//     // return s.repeat(n)
//     let newString = ''
//     for (let i = 0; i < n; i++) {
//       newString +=s
//     }
//     return newString
//   }
//   console.log(repeatStr(5, 'Hello'));
//   console.log(repeatStr(5, 'I'));
//   console.log(repeatStr(null, 6));

/**
 * Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse orde
Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
 */

// function digitize(number) {
//     //code here
//     let arr = [...number.toString()].map((num)=> Number(num))
//     return arr.reverse()
//   }

//   console.log(digitize(35123));

/**
 * Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
 * [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
 */

// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
// let arr2 = [];
// if (arrayOfSheep == null && arrayOfSheep == undefined) return;
// for (let i = 0; i < arrayOfSheep.length; i++) {
//   if (arrayOfSheep[i] == true) {
//     arr2.push(arrayOfSheep[i]);
//   } else continue;
// }
// return arr2.length
// }
// console.log(countSheeps( [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ]));

// another solution
// function countSheeps(arrayOfSheep){
//   let counter = 0
//   arrayOfSheep.map((element)=> {
//     if (element === true) counter++
//   })
//   return counter
// }
// let array =  [
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
//   ]
// console.log(countSheeps(array));

/**
 * Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
 */

// function opposite(number) {
//   //your code here
//   return number * -1
// }
// console.log(opposite(1));
// console.log(opposite(9));
// console.log(opposite(1));

/**
 * In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
 * makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
 */

// function makeNegative(num) {
//   // Code?
//   if (num > 0) return -num;
//   else return num;
// }

// console.log(makeNegative(-5));

/**
 * Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
 */

// (1)
// function greet(name) {
//   if (name === "Johnny") {
//     return "Hello, my love!";
//   }
//   return "Hello, " + name + "!";
// }

// console.log(greet('Johnny'));
// (2)
// function greet(name){
//   return `Hello , ${name === 'Jony' ? 'my Love' : name}`;
// }
// console.log(greet('Jony'));

/************************************************************************************************
 * Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
 ***************************************************************************************************/

// const haystack = [
//   "hay",
//   "junk",
//   "hay",
//   "hay",
//   "moreJunk",
//   "needle",
//   "randomJunk",
// ];
// function findNeedle(haystack) {
//   // your code here
//   // for (let i = 0; i < haystack.length; i++) {
//   //   if (haystack[i] === "needle") {
//   //     return `found the needle at position ${i}`;
//   //   }
//   }
//   return `found the needle at position ${haystack.indexOf("needle")}`;
// }

// console.log(findNeedle(haystack));

/************************************************************************************************
 * Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
*********************************************** */
// function countPositivesSumNegatives(input) {
//   // your code here
//   // first solution

//   // let counter = 0;
//   // let sumOfNegative = 0;
//   // for (let i = 0; i < input.length; i++) {
//   //    if (input[i] > 0) {
//   //     counter++;
//   //   } else {
//   //     sumOfNegative += input[i];
//   //   }
//   // }
//   // return [counter, sumOfNegative];
//   // second solution
//   if (input == [] || input == null) {
//     return []
//   }
//   let positiveNumbers = input.filter((x) => x > 0)
//   let sumNegatives = input.filter((x) => x < 0).reduce((acc, value) => acc + value , 0)
//   return [positiveNumbers.length , sumNegatives]
// }

// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );
// // console.log(countPositivesSumNegatives(null));

/************************************************************************************************
 * DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  
 */

// function doubleChar(str) {
//   // Your code here
//   let newStr = ''
//   for (const x of str) {
//     newStr += x.repeat(2)
//   }
//   return newStr
// }

// console.log(doubleChar('String'));
// console.log(doubleChar('Hello World'));
// console.log(doubleChar('1234!_ '));

/************************************************************************************************
 * Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
 */

// function basicOp(operation, value1, value2)
// {
//   // Code
//   let result;
//   if (operation == '+') {
//     result = value1 + value2;
//   }
//   else if (operation == '-') {
//     result = Number(value1) - Number(value2);
//   } else if (operation == '*') {
//     result = Number(value1) * Number(value2);
//   } else if (operation == '/') {
//     result = Number(value1) / Number(value2);
//   }
//   return result
// }

// console.log(basicOp("*", 5, 5));

/************************ ********************************
 * DESCRIPTION:
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
 */
// *** note :/ Keep this in mind With that in mind, we can now check if n is a perfect square. If the square root result is a whole number, the function will return true and if not, return false.

// function squareOrSquareRoot(array) {
//   // first solution
//   // let newArr = [];
//   // for (let i = 0; i < array.length; i++) {
//   //   if (Number.isInteger(Math.sqrt(array[i]))) {
//   //     newArr.push(Math.sqrt(array[i]));
//   //   } else {
//   //     newArr.push(array[i] * array[i]);
//   //   }
//   // }
//   // return newArr;
//   // second solution
//   let newArr = [];
//   array.forEach((element) => {
//     Number.isInteger(Math.sqrt(element))
//       ? newArr.push(Math.sqrt(element))
//       : newArr.push(element * element);
//   });
//   return newArr
// }

// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

/************************************************************************************************
 * Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */

// function countBy(x, n) {
//   // first solution
//   //  let newArr = []
//   //  for (let i = 1; i <= n; i++) {
//   //   newArr.push(x * i)

//   //  }
//   //  return newArr
//   // second solution
//   // check length is equal n
//   return Array.from(Array(n + 1).keys())
//     .slice(1)
//     .map((number) => number * x);
// }
// console.log(countBy(1, 10));

/************************************************************************************************
 * Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
 */

// function noSpace(x) {
//   return x.split(" ").join("");
// }
// console.log(noSpace('8 j 8 '));
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

/************************************************************************************************
 * DESCRIPTION:
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
 */

// function invert(array) {
//   return array.map((x)=> x * -1)
// }

// console.log(invert([1,-2,3,-4,5]));

/****************************************************************
 * Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given
 */

// function booleanToString(b){
//   //your code here
//   return String(b)
// }
// console.log(booleanToString(true));

/************************************************************************************************
 * DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
 */

// function solution(str){
//   return [...str].reverse().join("")
// }
// console.log(solution('world'));
// console.log(solution('word'));

/****************************************************************
 * Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
 */

// function litres(time) {
//  return Math.trunc(time * 0.5)
// }

// console.log(litres(3));
// console.log(litres(6.7));
// console.log(litres( 11.8));

/****************************************************************
 * DESCRIPTION:
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
 */

// function numberToString(num) {
//   // Return a string of the number here!
//   return String(num)
// }

// console.log(numberToString(123));

/**
 * DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

// function findAverage(array) {
//   // your code here
//   if (array.length) {
//     return  array.reduce((acc, value)=> acc + value , 0) / array.length
//   }
//   return 0
// }
// console.log(findAverage([6,6]));
// console.log(findAverage([]));

/****************************************************************
 * We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
 */

// const stringToNumber = function(str){
//   // put your code here
//   return Number(str)
// }

// console.log(stringToNumber("123"));

/************************************************************************************************
 * DESCRIPTION:
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
 */

// function monkeyCount(n) {
//   // your code here
//   let newArr = [];
//   for (let i = 1; i <= n; i++) {
//     newArr.push(i);
//   }
//   return newArr;
// }

// console.log(monkeyCount(10));

/****************************************************************
 * DESCRIPTION:
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
 */

// console.log(objWelcome.english);

// function greet(language) {

//   let objWelcome = {
//     english: "Welcome",
//     czech: "Vitejte",
//     danish: "Velkomst",
//     dutch: "Welkom",
//     estonian: "Tere tulemast",
//     finnish: "Tervetuloa",
//     flemish: "Welgekomen",
//     french: "Bienvenue",
//     german: "Willkommen",
//     irish: "Failte",
//     italian: "Benvenuto",
//     latvian: "Gaidits",
//     lithuanian: "Laukiamas",
//     polish: "Witamy",
//     spanish: "Bienvenido",
//     swedish: "Valkommen",
//     welsh: "Croeso",
//   };
//   if (objWelcome.hasOwnProperty(language)) {
//     return objWelcome[language]
//   }
//   return objWelcome['english']

// }

// console.log(greet('czech'));

/************************************************************************************************
 * Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
 */

// function smash (words) {
//   return words.join(' ');
// };
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

/************************************************************************************************
 * When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".
 */

// function switchItUp(number){
//   //Write your own Code!
//   switch (number) {
//     case 1:
//       return "One";
//     case 2:
//       return "two";
//     case 3:
//       return "three";
//     case 4:
//       return "four";
//     case 5:
//       return "five";

//     case 6:
//       return "six";

//     case 7:
//       return "seven";

//     case 8:
//       return "eight";

//     case 9:
//       return "nine";

//     default:
//       return "Zero";
//   }
//   }
//   console.log(switchItUp(2));

/************************************************************************************************
 * It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
 */

// function bonusTime(salary, bonus) {
//   // your code here
// return bonus ? `£${salary * 10}` : `£${salary}`;
//   }

//   console.log(bonusTime(10, true));

/************************************************************************************************
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi" */

// function remove(string) {
//   return string.replace(/!$/, "");
// }

// console.log(remove("!Hi!!!"));



