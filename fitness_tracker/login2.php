<!DOCTYPE html>
<html>
<head>
	<title>Grid</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="login_gridc.css">
</head>
<body>
<div class="container">
    <div class="left"> </div>
    <div class="right"></div>

    <div class="content">
    
        <div class="image">
            <img src=".\img\login_img.png" height="384px" width="550px">
        </div>
    <div class="welcome">
        <img id="crystaldelta" src=".\img\crystaldelta_img.png" height="90px" width="85px">
        <form action="login.php" method="POST">
        <p style="font-family: monospace; font-size: 15px;">Welcome Back!</p>
            <!-- <label for="uname">Username</label><br> -->
            <input type="text" id="uname" name="uname" placeholder="Username" required><br><br>
            <!-- <label for="pwd">Password</label><br> -->
            <input type="password" id="pwd" name="password" placeholder="Password" required><br><br>
            <button id="login">Login</button><br>
            <p>Don't have an account?<a href="register.html">Register</a></p>
            <?php if (!empty($error_message)) : ?>
                    <p style="color: red; font-family: monospace;"><?php echo $error_message; ?></p>
                <?php endif; ?>
        </form>
    </div>
    </div>
    </div>
</div>
</body>
</html>