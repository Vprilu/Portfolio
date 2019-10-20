<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);
$name = urldecode($name);
$email = urldecode($email);
$text = urldecode($text);
$name = trim($name);
$email = trim($email);
$text = trim($text);
$pb = "\r\n";

$file = fopen("file.txt","at");
fwrite($file,"\n $name\n $email\n $text \n");
fclose($file);

  header('Location: index.html');
   exit();
?>