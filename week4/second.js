/* // Date Time Objects
// Math 
// JSON : JavaScript Object Notation
// typeOf operator


//-----------------------------------------------

//First, let's look at how variables are handled:
var foo = 42;

//the interpreter turns it into this:
var foo;
foo = 42;

//----------------------------------------------


//Now, how function declarations are handled:
var foo = 42;
function bar() {}

//turns into
var foo; //Insanity! It's now at the top
function bar() {}
foo = 42;

//------------------------------------------

//The var statements "throws" the creation of foo 
//to the very top, 
//but doesn't assign the value to it yet. 
//The function declaration comes next in line, 
//and finally a value is assigned to foo.


//And what about this?
bar();
var foo = 42;
function bar() {}
//=>
var foo;
function bar() {}
bar();
foo = 42;


//And finally, for conciseness:
bar();
function bar() {}
//turns to
function bar() {}
bar();

//Now, what about function expressions?
var foo = function() {}
foo();
//=>
var foo;
foo = function() {}
foo();








//------
bar(); //This won't throw an error
function bar() {}

foo(); //This will throw an error
var foo = function() {}

//----

bar();
function bar() {
    foo(); //This will throw an error
}
var foo = function() {}

//----
*/
/* bar();
function bar() {
    foo(); //This _won't_ throw an error
}
function foo() {} */

//---
 
/* function bar() {
    foo(); //no error
}
var foo = function() {}
bar(); */

//