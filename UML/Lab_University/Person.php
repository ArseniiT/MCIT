<?php 
  class Person { 
      private $id; 
      
      public function __construct($id) {
        $this->id = $id; 
        print 'class Person<br>'; 
      } 
  } 
?> 