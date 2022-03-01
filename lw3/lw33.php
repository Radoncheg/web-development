<?php
  header('Content-Type: text/plain');
  
  echo getPswdStrength();

  function getGetParameter(string $name): ? string
  {
    return isset($_GET[$name]) ? (string)$_GET[$name] : null; 
  }
  
  function addLengthStrength($pswd) 
  {
    return 4 * strlen($pswd);
  }

  function addDigitsStrength($pswd) 
  {
    $count = 0;
    for ($i = 0; $i < strlen($pswd); $i++)
        if (is_numeric($pswd{$i})) 
            $count++;
    return $count * 4;
  }

  function addUppercaseStrength($pswd) 
  {
    $count = 0;
    for ($i = 0; $i < strlen($pswd); $i++)
        if (ctype_upper($pswd{$i})) 
            $count++; 
    if ($count !== 0)
        return (strlen($pswd) - $count)*2;
  }

  function addLowercaseStrength($pswd) 
  {
    $count = 0;
    for ($i = 0; $i < strlen($pswd); $i++)
        if (ctype_lower($pswd{$i})) 
            $count++; 
    if ($count !== 0)
        return (strlen($pswd) - $count) * 2;
  }
  
  function decOnlyLettersStrength($pswd) 
  {
    if (ctype_alpha($pswd)) 
      return -strlen($pswd); 
  }

 
  function decOnlyDigitsStrength($pswd) 
  {
    if (ctype_digit($pswd)) 
      return -strlen($pswd); 
  }

  function decRepeats($pswd) 
  {       
    $count = 0;  
    foreach (count_chars($pswd, 1) as $i => $val)      
    {
     $n = $val;
     if ($n > 1)
         $count += $n;
     }
    return -$count;
  }
  
  function getPswdStrength()
  {
    $pswd = getGetParameter('pswd');
    $pswdStrength = 0;
    $pswdStrength += addLengthStrength($pswd);
    $pswdStrength += addDigitsStrength($pswd);
    $pswdStrength += addUppercaseStrength($pswd);
    $pswdStrength += addLowercaseStrength($pswd);
    $pswdStrength += decOnlyLettersStrength($pswd);
    $pswdStrength += decOnlyDigitsStrength($pswd);
    $pswdStrength += decRepeats($pswd);
    return $pswdStrength;
  }
