<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('yazzik10@gmail.com', 'Новый покупатель');
    $mail->addAddress('chotkie.nosochki@gmail.com');
    $mail->Subject = 'Поступил заказ';

    $body = 'Поступил новый заказ./n';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>ФИО:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['number']))){
        $body.='<p><strong>Номер телефона:</strong> '.$_POST['number'].'</p>';
    }
    if(trim(!empty($_POST['address']))){
        $body.='<p><strong>Адрес доставки:</strong> '.$_POST['address'].'</p>';
    }
    if(trim(!empty($_POST['sox']))){
        $body.='<p><strong>Заказ:</strong> '.$_POST['sox'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'ОшибкаPHP';
    } else{
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>