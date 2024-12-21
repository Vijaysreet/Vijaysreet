<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fitness Tracker</title>
    <link rel="stylesheet" href="login_gridc.css">
    <link rel="stylesheet" href="registerc.css">
    <script>
        function validateForm() {
            var password1 = document.getElementById("pwd1").value;
            var password2 = document.getElementById("pwd2").value;

            if (password1 !== password2) {
                alert("Passwords do not match. Please try again.");
                return false; 
            }
            return true; 
        }
    </script>
</head>
<body>
    <div class="container">
        <div class="right"></div>
        <div class="left"></div>
        <div class="content">
            <div class="register_center">
                <img id="crystaldelta" src=".\img\crystaldelta_img.png" height="90px" width="85px">
                <p>Please Fill out form to Register!</p>
                <form action="register_data.php" method="POST" onsubmit="return validateForm();">
                    <label>Username</label><br>
                    <input type="text" id="uname1" name="uname" placeholder="" required><br>
                    <label>Email</label><br>
                    <input type="email" id="email" name="email" placeholder="" required><br>
                    <label>Password</label><br>
                    <input type="password" id="pwd1" name="password1" placeholder="" required><br>
                    <label>Confirm Password</label><br>
                    <input type="password" id="pwd2" name="password2" placeholder="" required><br><br>
                    <button id="login">Register</button>
                    <h3>Yes I have an account?<a href="login_grid.html">Login</a></h3>
                </form>
            </div>
            <div class="image">
                <img src=".\img\register_img.png" height="416px" width="500px">
            </div>
        </div>
    </div>

    <?php
    session_start(); // Start the session
    if (isset($_SESSION['message'])) {
        echo "<script>alert('" . $_SESSION['message'] . "');</script>";
        unset($_SESSION['message']); // Clear the message after displaying it
    }
    ?>
</body>
</html>