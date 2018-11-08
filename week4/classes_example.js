// Create a class called "Animal"
// Animal have a name, what kind of animal (cat, dog, bird, etc)
// Animal have a method called sound() which will return 
//"Hello, I am dog"; --> for dog
//"Hello, I am cat"; --> for cat
//"Hello, I am bird"; --> for bird
//Create constructor which accepts the above mentioned properties.
// Create any 3 animals of your choice.


// Achieve same thing using function defination syntax and class syntax.

// Function defination syntax
function Animal(name, kind){
    this.name_of_animal = name;
    this.kind_of_animal = kind;
    this.sound = function(){
      return  this.name_of_animal + " here, I am a " + this.kind_of_animal + ".";
    };    
  }

  var dog = new Animal("ScoobyDo","Dog");
  var tiger = new Animal("SherKhan", "Tiger");
  var turtle = new Animal("Raphael", "Turtle");
  console.log(dog.sound());
  console.log(tiger.sound());
  console.log(turtle.sound());


  //Class Syntax
  // The reason I am having "AnimalC" instead of "Animal"
  // because in the above function defination sytanx
  // I have already taken "Animal" as a name
  // So I cannot have two same name classes in one file.
  class AnimalC{
      constructor(name, kind){
        this.name_of_animal = name;
        this.kind_of_animal = kind;
      }
      sound(){ 
        return  this.name_of_animal + " here, I am a " + this.kind_of_animal + ".";
      };  
  }
  var bug = new AnimalC("Mantis","Bug");
  var panda = new AnimalC("Poo", "Panda");
  var mouse = new AnimalC("Mickey", "Mouse");
  console.log(bug.sound());
  console.log(panda.sound());
  console.log(mouse.sound());