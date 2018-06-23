<?php
if (isset($_POST["name"]) && isset($_POST["phone"]) && isset($_POST["email"]) && isset($_POST["city"]) && isset($_POST["message"])) { 
    $result = array(
        'name' => $_POST["name"],
        'phone' => $_POST["phone"],
        'email' => $_POST["email"],
        'city' => $_POST["city"],
        'message' => $_POST["message"]
    ); 

    $resultJson = json_encode($result);

    $path = "./users.json";
    $fileHandle = fopen($path, "w");

    fwrite($fileHandle, $resultJson);
    fclose($fileHandle);
}
?>