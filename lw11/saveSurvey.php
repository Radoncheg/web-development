<?php
function getPostParameter(string $name): string
{
    return isset($_POST[$name]) ? (string)$_POST[$name] : '';
}

function validateData($name, $email, $activities)
{
    $errorMessage = '';
    if ($name == '') {$errorMessage = $errorMessage . ' name undefined';}
    if ($email == '') {$errorMessage = $errorMessage . ' email undefined';}
    if ($activities == '') {$errorMessage = $errorMessage . ' activities undefined';}
    if ($errorMessage !== '')
    {
        badRequest($errorMessage);
    }
}

$name = getPostParameter('name');
$email = getPostParameter('email');
$activities = getPostParameter('activities');
$agreement = getPostParameter('agreement');


function badRequest(string $errorMessage)
{
    $data = array('type' => 'error', 'message' => 'BadRequestTest! ' . $errorMessage);
    header('HTTP/1.1 400 BadRequest');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode($data));
}


function saveSurvey($email, $data)
{
   if (!is_dir("data"))
    {
     //  mkdir("data");
     $data = array('type' => 'error', 'message' => 'Directory not found!');
     header('HTTP/1.1 500 Server error');
     header('Content-Type: application/json; charset=UTF-8');
     die(json_encode($data));
    }
    $fullPath = "data/" . $email . '.txt'; 
   
    file_put_contents($fullPath, $data, FILE_USE_INCLUDE_PATH); 
}


validateData($name, $email, $activities);
$_POST = str_replace("false",false, $_POST);
$_POST['agreement'] = (bool)$_POST['agreement']; 
$data = json_encode($_POST, JSON_UNESCAPED_UNICODE);
saveSurvey($email, $data);
