<?php
$fullPath = saveSurvey();
if ($fullPath)
    echo "Файл успешно записан в txt файл по адресу: $fullPath";

function getPostParameter(string $name): ?string
{
    return isset($_POST[$name]) ? $_POST[$name] : null;
}


function setName($name, $fullPath): string
{
  if ($name)
  {
    $name = "Имя: $name" . "\r\n";
  }
  else
  {
    if (file_exists($fullPath))
    {
      $lines = file($fullPath);
      if ($lines)
      {
          $name = $lines[1];
      }
    }
    else
    {
        $name = "Имя:" . "\r\n";
    }
  }
  return $name;
}

function setActivities($activities, $fullPath): string
{
  if ($activities)
  {
    $activities = "Деятельность: $activities" . "\r\n";
  }
  else
  {
    if (file_exists($fullPath))
    {
    $lines = file($fullPath);
    if ($lines)
      {
         $activities = $lines[2];
      }
    }
    else
    {
      $activities = "Деятельность:" . "\r\n";
    }
  }
  return $activities;
}


function saveSurvey()
{
    if (!is_dir("data"))
    {
       mkdir("data");
    }
    $name = getPostParameter('name');
    $activities = getPostParameter('activities');
    $email = getPostParameter('email');
    $fullPath = null;
    if ($email)
    {
        $fullPath = "data/" . $email . '.txt';
        $email = "Email: $email" . "\r\n";
        $name = setName($name, $fullPath);
        $activities = setActivities($activities, $fullPath);
        $data = ($email . $name .  $activities);
        $file = fopen($fullPath, 'w+');
        fwrite($file, $data);
        fclose($file);

    }

    return $fullPath;
}