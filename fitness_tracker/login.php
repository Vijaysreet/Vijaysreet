<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fitnesstracker";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed."]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $uname = $data['uname'];
    $pwd = $data['password'];

    $stmt = $conn->prepare("SELECT Password FROM register WHERE Username = ?");
    $stmt->bind_param("s", $uname);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();

        if ($pwd === $hashed_password) {
            echo json_encode(["status" => "success", "message" => "Login successful."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Incorrect password."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Username not found."]);
    }

    $stmt->close();
    $conn->close();
    exit;
}
?>
