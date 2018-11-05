// -----------------------------  Challenges 2 . 11 . 2018  --------------------------


// -----------------------------  TASK 1  --------------------------

// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

/* var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};

var keys = Object.keys(student);
var result = '';

for (let i = 0; i < keys.length; i++) {
  const el = keys[i];

  if(i != keys.length - 1) {
    result +=`${el}, `;
  } else {
    result +=el;
  }
  
}

console.log(result); */



// -----------------------------  TASK 2  --------------------------

// Write a JavaScript program to display the reading status (i.e. display book name, author name
//   and reading status) of the following books.
//   var library = [
//   { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},
//   { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true},
//   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games',
//   readingStatus: false}];

/* var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true},
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false}];

for (let i = 0; i < library.length; i++) {
  const el = library[i];

  console.log(`Reading status of "${el.title}" ${el.author} is ${el.readingStatus}.`)
} */


// -----------------------------  TASK 3  --------------------------

// Write a JavaScript program which returns a subset of a string.

// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

/* var s = 'dog';
var last = s.length - 1;
var res = [];
var temp = '';
var count = 0;

for (let i = 0; i <= last; ) {
  temp += s[i];
  res.push(temp);

  if(i == last) {
    ++count;
    console.log(count);
    i = count;
    temp = '';
    if(count == last) {
      res.push(s[i]);
      break;
    }
  } else {
    i++
  }
}

console.log(res); */


// -----------------------------  TASK 4  --------------------------

// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

/* var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};
var keys = Object.keys(student);
var values = Object.values(student);
var res = [];

for (let i = 0; i < keys.length; i++) {
  let keyAndValue = [keys[i], values[i]];
  res.push(keyAndValue);
}

console.log(res);
 */


// -----------------------------  TASK 5  --------------------------

//Write a JavaScript program to converts a specified number to an array of digits

/* var num = 456;
var s = '' + num;
var numbersLikeString = s.split('');
var res = [];

for (let i = 0; i < numbersLikeString.length; i++) {
  const el = numbersLikeString[i];
  res.push(parseInt(el, 10));  
}

console.log(`${num} to digits array [${res}].`); */


// -----------------------------  TASK 6  --------------------------

// Write a JavaScript function that checks whether a passed string is palindrome or not?

// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.
/* 
function isPalindrome(line1) {
  let lowerCase = line1.toLowerCase();

  // all sumbols exclude a - z letters
  let reg = /[^a-z]/;                     
  // replace all sumbolse and it will stay only a - z letters
  let line = lowerCase.replace(reg, '');  
  // to sort out only to the middle of the word, and 
  // don't include middle letter if in the word is odd number of letters (f.ex. " parTrap")
  let count = Math.floor(line.length/2);  

  let isEqual = false; 

  console.log(line);

  for (let i = 0; i < count; i++) {
    //console.log(i + ' | ' + line[i] +' | ' + line[line.length-1-i])
    if(line[i] === line[line.length-1-i]){
      isEqual = true;
    } else {
      isEqual = false;
    }    
  }

  return isEqual;  
}
console.log(`"Ven.ev" is ${isPalindrome('Ven.ev')}`);
 */


// -----------------------------  TASK 7  --------------------------

// Write a JavaScript function that returns a passed string with letters in alphabetical order.

// Example string : 'webmaster'
// Expected Output : 'abeemrstw‘

/* function abcOrder(line) {
  return line.split('').sort().join('');
  // let letters = line.split('');
  // letters.sort();
  // return letters.join('');
}

var s = 'webmaster';
var res = abcOrder(s);

console.log(`"${s}" word in alphabetical order is "${res}".`); */


// -----------------------------  TASK 8  --------------------------

// Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.

// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

/* function longestWord(line) {
  var words = line.split(' ');  
  var word = words[0];
  var maxLength = word.length;

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if(maxLength < w.length) {
      word = w;
      maxLength = w.length;
    }    
  }
  return word;
}

var s = 'Web Development Tutorial';
var res = longestWord(s);

console.log(`In word line "${s}" longest word is "${res}".`); */


// -----------------------------  TASK 9  --------------------------

// Write a JavaScript function which accepts an argument and returns the type.

// Note : There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.
/* 
function type(el) {
  //let type = typeof el;
  return typeof el;
}

var a = {};
var b = false;
var c = function() { return ''; };
var d = 123;
var e = 'Web Development Tutorial';
var f;
var resA = type(a);
var resB = type(b);
var resC = type(c);
var resD = type(d);
var resE = type(e);
var resF = type(f);

console.log(`Type of "${a}" is "${resA}".`);
console.log(`Type of "${b}" is "${resB}".`);
console.log(`Type of "${c}" is "${resC}".`);
console.log(`Type of "${d}" is "${resD}".`);
console.log(`Type of "${e}" is "${resE}".`);
console.log(`Type of "${f}" is "${resF}".`); */


// -----------------------------  TASK 10  --------------------------

// Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result.

// HINT : use “prompt” , google it.


function computer() {
  let b = prompt('For to raise a number to an exponent, enter a number:', 0);
  console.log(b);
  let n = prompt('And now enter an exponent:', 1);
  console.log(n);
  let res = Math.pow(b,n);
  alert(`The result of ${b}^${n} is ${res}.`)
  return typeof el;
}

computer();