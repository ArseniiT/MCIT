<?php
  include "Person.php";
  include "Professor.php";
  include "Employee.php";
  include "Department.php";
  include "Office.php";
  include "Classroom.php";
  include "University.php";

  /* $person = new Person(1);
  echo '<hr>'; */
  $employee1 = new Employee(1);
  var_dump($employee1);
  echo '<hr>';
  $employee2 = new Employee(2);
  var_dump($employee2);
  echo '<hr>';
  $professor1 = new Professor(3);
  $professor1->rank = 'full';
  var_dump($professor1);
  echo '<hr>';
  $professor2 = new Professor(4);
  $professor2->rank = 'associate';
  var_dump($professor2);
  echo '<hr>';


  $office1 = new Office(1);
  $office1->employees[] = $employee1;
  $office1->employees[] = $employee2;
  var_dump($office1);
  echo '<hr>';
  $department1 = new Department(1);
  $department1->name = 'Department of Applied Mathematics and Theoretical Physics';
  $department1->offices[] = $office1;
  $department1->professors[] = $professor1;
  $department1->professors[] = $professor2;
  var_dump($department1);
  echo '<hr>';
  $classroom1 = new Classroom(1);
  $classroom1->seat = 125;
  var_dump($classroom1);
  echo '<hr>';
  $university1 = new University();
  $university1->departments[] = $department1;
  $university1->classrooms[] = $classroom1;
  var_dump($university1);
  echo '<hr>';
  

?>
