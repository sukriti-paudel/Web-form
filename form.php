<?php
$servername= "localhost";
$username="root";
$password="";
$db = "webform";

$conn= new mysqli($servername,$username,$password,$db);

if($conn-> connect_error)
{
    die("connection failed:".$conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name1"];
    $phone = $_POST["phone1"];
    $mail = $_POST["email"];
    $gender = $_POST["gender"];
    
    $skills = implode(", ", $_POST["skills"]);
    $country = $_POST["cnt"];
    
    $sql = "INSERT INTO formdatabase (Name, Phone, Email,  Gender, Skills, Country) 
            VALUES ('$name', '$phone','$mail', '$gender', '$skills',  '$country')";
     if ($conn->query($sql) === TRUE) {
        header("Location: thankyou.html");
        exit();
    } else {
        echo "Error: " . $conn->error;
    }
    
}
else {
    header("Location: index.html");
    exit();
}
$conn->close();
?>