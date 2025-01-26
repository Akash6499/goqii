<?php

class UserAction{
    
    private $conn;
    

    public function __construct(){
        include_once 'config.php';
        $this->conn = $conn;
        
    }

    

    public function addUser($param){
    
    extract($param);
    
    $requiredFields = ['name', 'email','dob','password'];
    $validatePostData = $this->validatePostData($param,$requiredFields);



    if($this->alreadyExist('user_info','email',$email)){
        return json_encode(["status"=>false ,"msg"=>'Email already exists  !']);
    }

    if($validatePostData){
        $password = $this->password_encrypt($password);
            try{
                $this->conn->beginTransaction();
                $sql = "INSERT INTO user_info (name, email, dob,password, status) VALUES (:name, :email,:dob,:password,:status)";
                $stmt = $this->conn->prepare($sql);
        
                if($stmt->execute([':name' => $name, ':email' => $email, ':dob'=>$dob,':password' => $password,':status'=>1])){
                    echo json_encode(["status"=>true ,"msg"=>'User Added Successfully !']);
                }else{
                    throw new Exception("Something went wrong");
                }
                $this->conn->commit();
            } catch (Exception  $e) {
                $this->conn->rollBack();
                echo json_encode(["status"=>false ,"msg"=>'Something went wrong !']);
            }
    
    }else{

    echo json_encode(["status"=>false ,"msg"=>'All fields are required !']);

    }

    }

    public function editUser($param){
    
        extract($param);
        
        $requiredFields = ['name', 'email','dob','password'];
        $validatePostData = $this->validatePostData($param,$requiredFields);
    
        if($validatePostData){
            $password = $this->password_encrypt($password);
                try{
                    
                    $stmt = $this->conn->prepare("UPDATE `user_info` SET `name`= :name,`email`=:email,`dob`=:dob,`password`=:password WHERE id = :id");
            
                    if($stmt->execute([':name' => $name, ':email' => $email, ':dob'=>$dob,':password' => $password,':id'=>$id])){
                        echo json_encode(["status"=>true ,"msg"=>'User Updated Successfully !']);
                    }else{
                        throw new Exception("Something went wrong");
                    }
                    
                } catch (Exception  $e) {
                    $this->conn->rollBack();
                    echo json_encode(["status"=>false ,"msg"=>'Something went wrong !']);
                }
        
        }else{
    
        echo json_encode(["status"=>false ,"msg"=>'All fields are required !']);
    
        }
    
        }


    public  function allUser(){
        try{
            $stmt = $this->conn->prepare("SELECT * FROM user_info");
            if($stmt->execute()){
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode(["status"=>true , "data" => $result, "msg"=>'You have successfully registered !']);
            }
        
       
        } catch (Exception  $e) {
            $this->conn->rollBack();
            echo json_encode(["status"=>false ,"msg"=>'Something went wrong !']);
        }
    }

    public  function singleUser($param){
        try{
            $id = $param;
            $stmt = $this->conn->prepare("SELECT * FROM user_info WHERE id = :id");
            if($stmt->execute([':id'=> $id])){
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

               if(count($result) == 1){
                  $result[0]['password'] = $this->password_decrypt($result[0]['password']);
                   echo json_encode(["status"=>true , "data" => $result, "msg"=>'Data Fetched successfully  !']);
                }
            }
        
       
        } catch (Exception  $e) {
            $this->conn->rollBack();
            echo json_encode(["status"=>false ,"msg"=>'Something went wrong !']);
        }
    }

    public  function deleteUser($param){
        $id = $param;
        
        try{
            $stmt = $this->conn->prepare("DELETE  FROM user_info WHERE id=:id");
            if($stmt->execute([':id' => $id])){
                echo json_encode(["status"=>true , "msg"=>'User Deleted Successfully']);
            }
       
        } catch (Exception  $e) {
            $this->conn->rollBack();
            echo json_encode(["status"=>false ,"msg"=>'Something went wrong !']);
        }
    }



    private function alreadyExist($table,$column,$param){
        $sql = $this->conn->prepare("SELECT $column FROM $table WHERE $column = :params");
        $sql->execute([':params' => $param]);
        $counts =  $sql->fetchAll(PDO::FETCH_ASSOC);
        if(count($counts) > 0){
            return true;
        }else{
            return false;
        }
      }

      private function validatePostData($postData,$requiredFields) {

        foreach ($requiredFields as $field) {
            // Trim the value to remove whitespace and check if it's empty
            if (!isset($postData[$field]) || trim($postData[$field]) === '') {
                return  false;
            }
        }
    
        return true;
      }

      private function password_encrypt($plaintext){
    
        $key = "Omnia Gallia in tres par";
          $ciphertext = openssl_encrypt($plaintext, 'des-ede3-ecb',$key, OPENSSL_RAW_DATA);
          return base64_encode($ciphertext);
      }

      private function password_decrypt($encryptPassword){
    
        $key = "Omnia Gallia in tres par";
        $pass_base64_decode = base64_decode($encryptPassword);
        return  openssl_decrypt($pass_base64_decode, 'des-ede3-ecb',$key, OPENSSL_RAW_DATA);
          
      }
   
}

?>