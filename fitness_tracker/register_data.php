<?php
session_start();
include 'connectivity.php'; 

if ($conn === null) {
    $_SESSION['message'] = "Database connection failed.";
    header("Location: register.html");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $uname = trim(htmlspecialchars($_POST['uname']));
    $email = trim(htmlspecialchars($_POST['email']));
    $psd1 = htmlspecialchars($_POST['password1']);
    $psd2 = htmlspecialchars($_POST['password2']);
    
    if (empty($uname) || empty($email) || empty($psd1) || empty($psd2)) {
        $_SESSION['message'] = "All fields are required.";
        header("Location: register.html");
        exit();
    }

    if ($psd1 !== $psd2) {
        $_SESSION['message'] = "Passwords do not match.";
        header("Location: register.html");
        exit();
    }

    $stml = $conn->prepare("INSERT INTO register(Username, Email, Password, Confirm_Password) VALUES (?, ?, ?, ?)");
    
    if ($stml === false) {
        $_SESSION['message'] = "Error preparing statement: " . $conn->error;
        header("Location: register.html");
        exit();
    }

    $stml->bind_param("ssss", $uname, $email, $psd1, $psd2);
    
    if ($stml->execute()) {
        $_SESSION['message'] = "Registration Successful";
    } else {
        $_SESSION['message'] = "Error: " . $stml->error;
    }
    
    $stml->close();
    $conn->close();
    
    // Redirect to registration page
    header("Location: register.html");
    exit();
}
?>