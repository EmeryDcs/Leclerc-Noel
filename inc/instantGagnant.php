<?php

$bdd = mysqli_connect('localhost', 'root', '', 'emerydescours_wpln');

$requeteGrosLot     = 'SELECT nombreGagne FROM instantgagnant WHERE lot = "Gros lot"';
$requeteMoyenLot    = 'SELECT nombreGagne, nombreMax FROM instantgagnant WHERE lot = "Moyen lot"';
$requetePetitLot    = 'SELECT nombreGagne, nombreMax FROM instantgagnant WHERE lot = "Petit lot"';
$requeteMiniLot     = 'SELECT nombreGagne, nombreMax FROM instantgagnant WHERE lot = "Mini lot"';

$resGrosLot     = mysqli_query($bdd, $requeteGrosLot);
$resMoyenLot    = mysqli_query($bdd, $requeteMoyenLot);
$resPetitLot    = mysqli_query($bdd, $requetePetitLot);
$resMiniLot     = mysqli_query($bdd, $requeteMiniLot);

$randomGrosLot  = rand(0,10000);
$randomMoyenLot = rand(0,1000);
$randomPetitLot = rand(0,100);
$randomMiniLot  = rand(0,10);

$heureJour      = date('m.d H', time());

if ($heureJour == '12.13 15'){
    if ($randomGrosLot == 1){
        while ($tab as mysqli_fetch_assoc($resGrosLot)){
            if ($tab==0){
                echo 'Vous avez gagné le gros lot !! On vous envoie par mail toutes les informations nécessaire à la réclamation de votre lot.';

                $updateGrosLot = 'UPDATE instantgagnant SET nombreGagne = "1" WHERE lot ="Gros lot"';
            }
        }
    }
}

switch ($heureJour){
    case '12.05 10': 
        testLot();
        break;
    case '12.09 11': 
        testLot();
        break;
    case '12.14 12': 
        testLot();
        break;
    case '12.17 13': 
        testLot();
        break;
    case '12.19 14': 
        testLot();
        break;
    case '12.21 15': 
        testLot();
        break;
    case '12.02 16': 
        testLot();
        break;
    case '12.07 17': 
        testLot();
        break;
}





function testLot(){
    if ($randomMoyenLot == 1){
        while ($tab as mysqli_fetch_assoc($resMoyenLot)){
            if ($tab<20){
                echo 'Vous avez gagné le Moyen lot !! On vous envoie par mail toutes les informations nécessaire à la réclamation de votre lot.';

                $updateMoyenLot = 'UPDATE instantgagnant SET nombreGagne = nombreGagne+1 WHERE lot ="Moyen lot"';
                mysqli_query($bdd, $updateMoyenLot);
            }
        }
    }

    if ($randomPetitLot == 1){
        while ($tab as mysqli_fetch_assoc($resPetitLot)){
            if ($tab<100){
                echo 'Vous avez gagné le Petit lot !! On vous envoie par mail toutes les informations nécessaire à la réclamation de votre lot.';

                $updatePetitLot = 'UPDATE instantgagnant SET nombreGagne = nombreGagne+1 WHERE lot ="Petit lot"';
                mysqli_query($bdd, $updatePetitLot);
            }
        }
    }

    if ($randomMiniLot == 1){
        while ($tab as mysqli_fetch_assoc($resMiniLot)){
            if ($tab<1000){
                echo 'Vous avez gagné le Mini lot !! On vous envoie par mail toutes les informations nécessaire à la réclamation de votre lot.';

                $updateMiniLot = 'UPDATE instantgagnant SET nombreGagne = nombreGagne+1 WHERE lot ="Mini lot"';
                mysqli_query($bdd, $updateMiniLot);
            }
        }
    }
}
