// -----------------------------  Callenges 2 . 11 . 2018  --------------------------


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
var res = [];


console.log(res); */


// -----------------------------  TASK 5  --------------------------

//Write a JavaScript program to converts a specified number to an array of digits

var num = 456;
var s = '' + num;
var numbersLikeString = s.split('');
var res = [];

for (let i = 0; i < numbersLikeString.length; i++) {
  const el = numbersLikeString[i];
  res.push(parseInt(el, 10));  
}

console.log(`${num} to digits array [${res}].`);
