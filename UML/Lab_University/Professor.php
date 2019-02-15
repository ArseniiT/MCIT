<?php 
  class Professor extends Person { 
    public $rank;
    
    public function __construct($id) {
      parent::__construct($id);
      echo 'class Professor<br>'; 
    } 
  } 
?> 