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