<?php
    $myFile = "./api/data.json";
    $fh = fopen($myFile, 'w') or die("can't open file");
    $stringData = $_GET["data"];
    //print_r( $stringData );
    if( fwrite($fh, $stringData) ){
        echo 'Writing new file';
    } else {
        echo 'Something went wrong while saving new file';
    }
    fclose($fh)
?>
