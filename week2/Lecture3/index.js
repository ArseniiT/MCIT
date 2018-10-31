/* ****************************************  LECTURE 3   **************************************** */
document.write(`/*******************************  LECTURE 3   *******************************/ <br><br><br>`);

//--------------------------- TASK 1 -------------------------
document.write(`//--------------------------- TASK 1 ------------------------- <br><br>`);

function task1(b) {

  document.write(` Even numbers between 1 to ${b}:<br>`);
  for (let i = 2; i < b; i+=2) {
    if(i != (b-2)) {
      document.write(`${i}, `);
    } else {
      document.write(`${i}.`);
    }
    
  }
}
task1(100);

//--------------------------- TASK 2 -------------------------
document.write(`<br><br>//--------------------------- TASK 2 -------------------------  <br><br>`);

function task2(a) {
  let b;

  for (let i = 0; i < 10; i++) {
    b = a * i;
    document.write(`${a} x ${i} = ${b}`);
    document.write("<br>")  
  }
}

task2(10);

//--------------------------- TASK 3 -------------------------
document.write(`<br><br>//--------------------------- TASK 3 -------------------------  <br><br>`);

function task3(a) {
  let b = ''+a;
  let sum = parseInt(b[0]) + parseInt(b[b.length - 1]);
  document.write(`Sum of first and last digit of number ${a} is ${sum}.`);
}

task3(453);

//--------------------------- TASK 4 -------------------------
document.write(`<br><br>//--------------------------- TASK 4 -------------------------  <br><br>`);

function task4(a) {
  let b = ''+a;
  let sum = 0;
  for (let i = 0; i < b.length; i++) {
    sum += parseInt(b[i]);
  }
  document.write(`Sum of all digits of number ${a} is ${sum}.`);
}

task4(453);

//--------------------------- TASK 5 -------------------------
document.write(`<br><br>//--------------------------- TASK 5 -------------------------  <br><br>`);

function task5(a) {
  let b = ''+a;
  let words = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];

  document.write(`Number ${a} is `);

  for (let i = 0; i < b.length; i++) {
    document.write(` ${words[b[i]]}`);

    if(i != (b.length-1)) {
      document.write(' and');      
    } else {
      document.write('.');      
    }
  }
}

task5(453);

//--------------------------- TASK 6 -------------------------
document.write(`<br><br>//--------------------------- TASK 6 -------------------------  <br><br>`);

function task6(a) {
  let isPrime = true;

  for (let i = 2; i < a; i++) {
    if((a % i) ==0) {
      isPrime = false;
      i = a;
    }    
  }

  document.write(`Number ${a} is `);

  if(isPrime) {
    document.write('prime.');
  } else {
    document.write('not prime.');
  }
}

task6(10);

//--------------------------- arrayTask -------------------------
document.write(`<br><br>//--------------------------- arrayTask -------------------------  <br><br>`);

function arrayTask() {
  let a = new Array('a', 'b', 'c', 'd');
  document.write(`Array 'a': ${a}.<br><br>`);

  a.pop();
  document.write(`Array 'a' after pop(): ${a}.<br><br>`);

  a.push('e', 'f');
  document.write(`Array 'a' after push('e', 'f'): ${a}.<br><br>`);

  a.shift();
  document.write(`Array 'a' after shift(): ${a}.<br><br>`);

  a.unshift('z', 'y');
  document.write(`Array 'a' after unshift('z', 'y'): ${a}.<br><br>`);

  a.toString();
  document.write(`Array 'a' after toString(): ${a}.<br><br>`);

  let b = ['g', 'h', 'j', 'k'];
  let c= a.concat(b);
  document.write(`Array 'c' after a.concat(b): ${c}.<br><br>`);

  let line = c.join('-');
  document.write(`String 'line' equals c.join('-'): ${line}.<br><br>`);

  c.reverse();
  document.write(`Array 'c' after c.reverse()): ${c}.<br><br>`);

  let p = c.slice(1,3);
  document.write(`Array 'p' equals c.slice(1,3)): ${p}.<br><br>`);
  document.write(`Array 'c' after c.slice(1,3)): ${c}.<br><br>`);

  c.splice(1,3);
  document.write(`Array 'p' equals c.slice(1,3)): ${c}.<br><br>`);
}

arrayTask();