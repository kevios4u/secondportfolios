<?php
// contact.php
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $to = "kevios4u@yahoo.com";
  $subject = "Contact message from Portfolio";
  $body = "Name: $name\nEmail: \n$email\nMessage: \n$message";
  if(mail($to, $subject, $message, $body)){
    echo "Message sent successfully.";
  } else {
    echo "Failed to send message.";
  }
}
?>