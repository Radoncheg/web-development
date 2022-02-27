<?php
header("Content-Type: text/plain");

function getGetParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
}

function surveySaver()
{
    $firstName = getGetParameter('first_name');
    $lastName = getGetParameter('last_name');
    $email = getGetParameter('email');
    $age = getGetParameter('age');
    if (!is_dir("data"))
    { 
       mkdir("data");
    }
    if ($email)
    {
        $fullPath = "data/" . $email . '.txt';
        $email = "Email: $email" . "\r\n";       
        if ($firstName)
          $firstName = "First name: $firstName" . "\r\n";
        else
          {
            if (file_exists($fullPath))   
            $lines = file($fullPath);
            if ($lines)
            $firstName = $lines[0];                            
            else
            $firstName = "First name:" . "\r\n";
          }
        if ($lastName)
          $lastName = "Last name: $lastName" . "\r\n";
        else
          {
            if (file_exists($fullPath))     
            $lines = file($fullPath);
            if ($lines)
            $lastName = $lines[1];                            
            else
            $lastName = "Last name:" . "\r\n";
          }      
        if ($age)
          $age = "Age: $age" . "\r\n";
        else
          {
            if (file_exists($fullPath))     
            $lines = file($fullPath);
            if ($lines)
            $age = $lines[4];                            
            else
            $age = "Age:" . "\r\n";
          }
        $data = ($firstName .  $lastName . $email  . $age);
        $file = fopen($fullPath, 'w+');
        fwrite($file, $data);
        fclose($file);
        return $fullPath;
    }
}
$fullPath = surveySaver();
if ($fullPath)
    echo "Файл успешно записан в txt файл по адресу: $fullPath";
else
    echo "Поле email обязательно!";