<?php
header("Content-Type: text/plain");
if ($_GET['id'])
{
    $idValue = $_GET['id'];
    $sr3Flag = true;
    $firstSymbol = $idValue{0};
    $length = strlen($idValue); 

    echo "Соответствует ли идентификатор правилам SR3? "; 

    if (is_numeric($firstSymbol)) 
        echo "Нет. первый символ $firstSymbol - цифра, а должна быть латинская буква.";
    else
    {
        for ($i = 0; $i < $length; $i++)
            if ((!ctype_alpha($idValue{$i})) && (!is_numeric($idValue{$i}))) 
            {
                $sr3Flag = false;
            }
            
        if ($sr3Flag)       
            echo "Да. Идентификатор соответствует правилу SR3";
        else
            echo "Нет. Строка содержит недопустимые символы";
    }
}
else
    echo "Введите значение параметра id";