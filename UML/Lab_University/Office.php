<?php 
  class Office { 
    private $id;
    public $employees = array(); 
    
    public function __construct($id) {
      $this->id = $id; 
      echo 'class Office<br>'; 
    } 
  } 
?> 