<?php

function getPrimes($n)
{
    $arrPrime = array();
    for ($i = 2; $i < $n; $i++) {
        $prime = true;
        for ($j = 2; $j < $i; $j++) {
            if ($i % $j == 0)
                $prime = false;
        }

        if ($prime)
            array_push($arrPrime, $i);
    }

    return $arrPrime;
}

echo json_encode(getPrimes(10));
