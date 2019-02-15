<?php 
  class Employee extends Person { 
    
    public function __construct($id) {
      parent::__construct($id);
      echo 'class Employee<br>'; 
    } 
  } 
?> 