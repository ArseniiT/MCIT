<?php

    $host = '127.0.0.1';
    $db   = 'university';
    $user = 'root';
    $pass = '';
    $charset = 'utf8mb4';

    $dsn = "mysql:host=$host;charset=$charset";

    $sql = "CREATE TABLE IF NOT EXISTS university (
              id int(12) not null auto_increment,
              PRIMARY KEY (id)
            );
            
            CREATE TABLE IF NOT EXISTS classroom (
              id int(12) not null auto_increment,
              seat int(5),
              id_university int,
              PRIMARY KEY (id),
              FOREIGN KEY (id_university) REFERENCES university(id)
            );
            
            CREATE TABLE IF NOT EXISTS department (
              id int(12) not null auto_increment,
              name varchar(100),
              id_university int,
              PRIMARY KEY (id),
              FOREIGN KEY (id_university) REFERENCES university(id)
            );
            
            CREATE TABLE IF NOT EXISTS office (
              id int(12) not null auto_increment,
              id_department int,
              PRIMARY KEY (id),
              FOREIGN KEY (id_department) REFERENCES department(id)
            );

            CREATE TABLE IF NOT EXISTS  person (
              id int(12) not null auto_increment,
              PRIMARY KEY (id)
            );
            
            CREATE TABLE IF NOT EXISTS professor (
              id_person int(12), 
              rank varchar(10),
              id_department int,
              PRIMARY KEY (id_person),
              FOREIGN KEY (id_person) REFERENCES person(id),
              FOREIGN KEY (id_department) REFERENCES department(id)
            );
            
            CREATE TABLE IF NOT EXISTS employee (
              id_person int(12),
              id_office int,
              PRIMARY KEY (id_person),
              FOREIGN KEY (id_person) REFERENCES person(id),
              FOREIGN KEY (id_office) REFERENCES office(id)
            );";

    try {
        $pdo = new PDO($dsn, $user, $pass);
        echo 'db connected..<br>';
        $pdo->exec("CREATE DATABASE IF NOT EXISTS `$db`;
                             USE `$db`;")
        or die(print_r($pdo->errorInfo(), true));
        echo 'db created..<br>';

        $pdo->exec($sql);
        echo 'sql executed..<br>';

    } catch (PDOException $exception) {
        echo $exception->getMessage();
    }
?>