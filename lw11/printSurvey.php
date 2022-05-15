<?php
$fullPath = 'data/';
if (!is_dir($fullPath)) 
{
   mkdir("data");
}
getDataArray($fullPath);

function getDataArray($fullPath)
{
    $scanData = array_diff(scandir($fullPath), array('..', '.'));
    if (count($scanData) == 0)
    {
        echo '{ "errorMessage" : "NoSuchElementsFound"}';
    } else  
    {
        $resultString = '[';
        foreach ($scanData as $key => $value) {
            $filePath = 'data/' . $value;
            $file = file($filePath);
            $resultString = $resultString . $file[0]. ',';
        }

    $resultString = substr($resultString,0,-1);
    $resultString = $resultString . ']';
    echo $resultString;
    }
}


