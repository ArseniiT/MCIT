<?php 
  class Classroom { 
      private $id;
      public $seat;

      
      public function __construct($id) {
        $this->id = $id; 
        echo 'class Classroom<br>'; 
      } 
  } 
?> 