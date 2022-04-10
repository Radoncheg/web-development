<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto+Condensed&display=swap" rel="stylesheet">
    <title>Анкета</title>
    <link rel="stylesheet" href="css/style.css"/>
</head>
<body class="print-survey__text">
<?php
function getPostParameter(string $name): ?string
{
    return isset($_POST[$name]) ? $_POST[$name] : null;
}

$email = getPostParameter('email');
$fullPath = "data/" . $email . '.txt';

if (file_exists($fullPath))
{
    $lines = file($fullPath);
}

if ($lines)
{
  foreach ($lines as $line)
  {
      echo $line;
  }
}
else
{
    echo "Данного файла не существует";
}
?>
</body>
</html>


