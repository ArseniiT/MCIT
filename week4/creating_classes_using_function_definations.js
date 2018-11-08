/* //"this" keyword
var person = {
    "first_name": "Johnny",
    "last_name": "Bravo",
    "city": "Montreal",
    "speak": function (){
        return "Hello my name is " + this.first_name + " " + this.last_name;
    },
    get fullName(){
      return this.first_name + "  " + this.last_name;
    },
    set changeName(fname){
      this.first_name = fname;
    }
  };

  console.log(person.fullName);
  console.log(person.changeName = "asdasdsa");
  console.log(person.fullName);
  

  var person2 = {
    "first_name": "Sam",
    "last_name": "Daniel",
    "city": "Montreal",
    "speak": function (){
        return "Hello my name is " + this.first_name + " " + this.last_name;
    }
  };
  //console.log(person2.speak());
  //console.log(person2.speak);


  // Another Syntax


  function Person(firstName, lastName, age){
    this.first_name = firstName;
    this.last_name = lastName;
    this.age = age;
    this.language = "English";
    this.changeName = function (fname, lname){ //setting the name/ updating / modifying
        this.first_name = fname;
        this.last_name = lname;
        return;
    };
    this.name = function(){ // getting the name
      return this.first_name + "  " + this.last_name;
    };    
  }

  var myself = new Person("Akshay","Cooper",20);
  var myFather = new Person("Sam","Cooper",45);
  var myMother = new Person("Lia","Cooper",45);
  //
  // console.log("Before name change, name of the father was \n");
  // console.log(myFather.name());
  // console.log("after changing the name");
  // myFather.changeName("asdasdasd","qweqwe");
  // console.log(myFather.name());
  

   */

   let Person = {
     name: '',
     surname: '',

     get getName() {
       return this.name;
     },

     set setName(name){
       this.name = name;
     },
     set setSurname(name){
       this.surname = name;
     }
   }
   let student = new Person;

   student.setName() = "student";
   student.setSurname() = "student sur";
   console.log(student.getName());