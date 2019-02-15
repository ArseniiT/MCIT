<?php 
  class Department { 
      public $name;
      public $offices = array();
      public $professors = array();

      
      public function __construct() {
        echo 'class Department<br>'; 
      } 
  } 
?> 