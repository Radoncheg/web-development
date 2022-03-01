<?php
header("Content-Type: text/plain");
$fullPath = saveSurvey();
if ($fullPath)
    echo "Файл успешно записан в txt файл по адресу: $fullPath";
else
    echo "Некорректный путь сохранения. Проверьте правильность указания email";

function getGetParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string)$_GET[$name] : null;
}


function setFirstName($firstName, $fullPath): string
{
  if ($firstName)
  {
    $firstName = "First name: $firstName" . "\r\n";
  }
  else
  {
    if (file_exists($fullPath))
    {   
      $lines = file($fullPath);
      if ($lines)
      {
        $firstName = $lines[0];
      }
    }                            
    else
    {
    $firstName = "First name:" . "\r\n";
    }
  }
  return $firstName;
}

function setLastName($lastName, $fullPath): string
{
  if ($lastName)
  {
    $lastName = "Last name: $lastName" . "\r\n";
  }
  else
  {
    if (file_exists($fullPath))
    {   
    $lines = file($fullPath);
    if ($lines)
      {
         $lastName = $lines[1];
      }
    }
    else
    {
      $lastName = "Last name:" . "\r\n";
    }
  }
  return $lastName;
}

function setAge($age, $fullPath): string
{
  if ($age)
  {
    $age = "Age: $age" . "\r\n";
  }  
  else
  {
    if (file_exists($fullPath))
    {    
      $lines = file($fullPath);
      if ($lines)
      {
        $age = $lines[4];
      }
    }                                
    else
    {
      $age = "Age:" . "\r\n";
    }  
  }
  return $age;
}

function saveSurvey()
{
    if (!is_dir("data"))
    { 
       mkdir("data");
    }
    $firstName = getGetParameter('first_name');
    $lastName = getGetParameter('last_name');
    $email = getGetParameter('email');
    $age = getGetParameter('age');
    $fullPath = null;
    if ($email)
    {
        $fullPath = "data/" . $email . '.txt';
        $email = "Email: $email" . "\r\n";       
        $firstName = setFirstName($firstName, $fullPath);
        $lastName = setLastName($lastName, $fullPath);
        $age = setAge($age, $fullPath); 
        $data = ($firstName .  $lastName . $email  . $age);
        $file = fopen($fullPath, 'w+');
        fwrite($file, $data);
        fclose($file);
        
    }

    return $fullPath;
}
