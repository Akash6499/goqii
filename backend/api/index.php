<?php

 header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');


$data = json_decode(file_get_contents("php://input"),true);

$uri =  $_SERVER['REQUEST_URI'];
$parts =  explode('/',$uri);
array_shift($parts);






$part1 = isset($parts[0]) ? $parts[0] : "";
$part2 = isset($parts[1]) ? $parts[1] : "";
$part3 = isset($parts[2]) ? $parts[2] : "";

include_once 'userAction.php';
$user_action = new UserAction();


if($part1 === 'api'){
    if($part2 === 'addUser'){

        echo $user_action->addUser($data);
    }else if($part2 === 'allUser'){
        echo $user_action->allUser();
    }else if($part2 === 'deleteUser'){
        echo $user_action->deleteUser($part3);
    }else if($part2 === 'editUser'){
        echo $user_action->editUser($data);
    }else if($part2 === 'user'){
        echo $user_action->singleUser($part3);
    }

}else{
    echo 'Page not found';
}
?>