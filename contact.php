<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: index.html#contact");
  exit;
}

$name = trim(filter_input(INPUT_POST, "name", FILTER_SANITIZE_FULL_SPECIAL_CHARS) ?? "");
$email = trim(filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL) ?? "");
$message = trim(filter_input(INPUT_POST, "message", FILTER_SANITIZE_FULL_SPECIAL_CHARS) ?? "");

if ($name === "" || $email === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo "Please complete the form with a valid email address.";
  exit;
}

$to = "kevios4u@yahoo.com";
$subject = "Portfolio contact message from {$name}";
$body = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}";
$headers = "From: {$name} <{$email}>\r\nReply-To: {$email}\r\n";

if (mail($to, $subject, $body, $headers)) {
  echo "Message sent successfully.";
} else {
  http_response_code(500);
  echo "Failed to send message.";
}
?>
