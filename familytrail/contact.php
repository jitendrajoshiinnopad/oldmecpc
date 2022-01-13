<?php
session_start();
if(isset($_POST) && ($_POST)!==""){ 
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $message=$_POST['message'];
    $captchas=$_POST['captcha'];
    if($_SESSION['familyRecorddigit'] != $captchas){
         echo $message =  json_encode(array("error"=>'Please enter valid Captcha'));
         exit;
    }
   $messagehtml = "
        <html>
            <head>
                <title>Contact</title>
            </head>
            <body>
                <div><p>Hello,</p></div>
                <div><p>You have new inquiry on your site familytrail.</p></div>
                <div><p>Name : $name</p></div>
                <div><p>Email : $email</p></div>
        <div><p>Phone : $phone</p></div>
                <div><p>Message : $message</p></div>
                </br>
                <div>Regards,<br>
                <div>".$name."</div>
            </body>
        </html>
        ";
    require 'PHPMailerAutoload.php';
    $mail = new PHPMailer;
    $mail->IsSMTP();                                //Sets Mailer to send message using SMTP
    $mail->Host = 'relay-hosting.secureserver.net';       //Sets the SMTP hosts of your Email hosting, this for Godaddy
    $mail->Port = '25';                             //Sets the default SMTP server port
    $mail->SMTPAuth = false;
   //$mail->SMTPSecure = false;                        //Sets SMTP authentication. Utilizes the Username and Password variables
   //$mail->Username = 'hitaliribadiya@innopadsolutions.com';                    //Sets SMTP username
   //$mail->Password = 'hitaliribadiya@786';                    //Sets SMTP password
    //$mail->SMTPSecure = '';                         //Sets connection prefix. Options are "", "ssl" or "tls"
   $mail->setFrom('welcome@oldme.com');                //Sets the From email address for the message
    //$mail->FromName = $_POST["name"];               //Sets the From name of the message
    $mail->WordWrap = 50;                           //Sets word wrapping on the body of the message to a given number of characters
    $mail->IsHTML(true);
   //Sets message type to HTML
    $mail->Subject = 'Application for Programmer Registration';   
   //Sets the Subject of the message
    $mail->Body = $messagehtml;  
	//Adds a "To" address
	//$mail->AddAddress('kajalkumavat@innopadsolutions.com');   
	 $mail->AddAddress('ehearns@oldme.com');
     $mail->AddAddress('kandarpbhatt.786@gmail.com');                        //An HTML or plain text message body
	 $mail->AddAddress('bcc','amirathod@innopadsolutions.com','familytrail:contact');
    if($mail->Send())                               //Send an Email. Return true on success or false on error
    { 
       echo $message =  json_encode(array("success"=>'Your message has been sent successfully. We will get back to you in 24 hours.'));
      //  unlink($path);
    }
    else
    {
        $message =  print_r(error_get_last());
    }
}




?>
