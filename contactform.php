<?php

if (isset($_POST["submit"])){
    $name = $_POST["name"];
    $subject = $_POST["subject"];
    $mailFrom = $_POST["mail"];
    $message = $_POST["message"];

    $mailTo = "admb34@yandex.ru";
    $headers = "from:".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}
?>