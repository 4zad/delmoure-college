<?php
if (empty($_POST["message"]))
{
    $errors .= `\n ERROR: All fields are required`;
}
else if (empty($errors))
{
    //email of inquiry to myself
    $name = $_POST[`name`];
    $visitor_email = $_POST[`email`];
    $subject = $_POST[`subject`];
    $message = $_POST[`message`];

    $email_from = `info@sample-domain`; //domain of email should be changed to site domain
    $email_subject = `New Inquiry Recieved From $name`;
    $email_body = `Visitor Name: $name\n`.
                    `Visitor Email: $visitor_email\n`.
                    `Subject: $subject\n`.
                    `Message: $message`;

    $to = `enchanted.azad@gmail.com`; //email made for the purposes of this project

    $headers = `From: $email_from \r\n`;
    $headers .= `Reply-To: $visitor_email \r\n`;

    mail($to,$email_subject,$email_body,$headers);
    //-----------------------------

    //confirmation email to visitor
    $email_subject = `Inquiry Confirmation`;
    $email_body = `Thank you for your inquiry to Delmoure College! We will get back to you as soon as time permits.\n\n
    Here is a copy of your message:\n$message`;
    $to = `$visitor_email`;

    mail($to,$email_subject,$email_body,$headers);
    //-----------------------------
    
    //redirect to the contact.html page
    //'Location' could be changed to a seperate thank you page, such as 'thankyou.html'
    header(`Location: ../html/contact.html`);
}
?>


