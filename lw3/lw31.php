<?php
header("Content-Type: text/plain");
if ($_GET['text'])
{
    $textValue = $_GET['text'];
    $textValue = trim($textValue, ' ');
    while(strpos($textValue,"  ")!==false)
    {
       $textValue = str_replace("  ", " ", $textValue);
    }
    echo $textValue;
}
     