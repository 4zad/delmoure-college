<?php
$name = $_POST[`name`];
$visitor_email = $_POST[`email`];
$subject = $_POST[`subject`];
$message = $_POST[`message`];

$email_from = `info@delmourequeries.com`;
$email_subject = `New Inquiry Recieved`;
$email_body = `Visitor Name: $name\n`.
                `Visitor Email: $visitor_email\n`.
                `Subject: $subject\n`.
                `Message: $message`;

$to = `enchanted.azad@gmail.com`; //email made for the purposes of this project

$headers = `From: $email_from \r\n`;
$headers .= `Reply-To: $visitor_email \r\n`;

mail($to,$email_subject,$email_body,$headers)

header(`Location: contact.html`);
?>
