# Fittness Tracker
### What is this?
This project is a simple web application that allows users to register for a fitness tracking system. Users can create an account by entering their username, email, and password.

### Project Files
```bash
/FitnessTracker
│
├── /img                     # Contains images used in the application
│   ├── crystaldelta_img.png
│   ├── register_img.png
│   └── login_img.png
│
├── /css                     # Contains CSS files for styling
│   ├── login_gridc.css
│   └── registerc.css
│
├── connectivity.php         # Connects to the database
├── register.php             # Handles user registration
└── register.html            # The registration form

```
### Requirements
- **PHP** (version 7.0 or higher)
- **MySQL** (version 5.7 or higher)
- A web server (like Apache
### How to Set Up
1. **Download the Project:**
- Clone or download this repository to your computer.
2. **Create a Database:**
-  Open your MySQL tool **(like phpMyAdmin)**.
-  Create a new database named FitnessTracker.
3. **Create the Users Table:**
-  Run this SQL command to create a table for user registrations:
```sql
   CREATE TABLE register (
       id INT AUTO_INCREMENT PRIMARY KEY,
       Username VARCHAR(50) NOT NULL,
       Email VARCHAR(100) NOT NULL,
       Password VARCHAR(255) NOT NULL,
       Confirm_Password VARCHAR(255) NOT NULL
   );
```
4. Set Up Database Connection:
- Open **`connectivity.php`**.
- Update the database connection details:
```
$servername = "localhost"; // Your database server
$username = "your_username"; // Your database username or default 'root'
$password = "your_password"; // Your database password
$dbname = "FitnessTracker"; // Your database name
```
5. **Run the Web Server::**
-  Make sure your web server (like Apache) is running.
-  Place the project folder in the web server's root directory (e.g., htdocs for XAMPP).
6. **Open the Application:**
-  Go to your web browser and type `http://localhost/FitnessTracker/register.html` to see the registration form.

###How to Use
1. Fill out the registration form with your username, email, and password.
2. Click the "Register" button.
3. You will see a message confirming your registration or an error if something went wrong.

5. **Run the Web Server::**
-  Make sure your web server (like Apache) is running.
-  Place the project folder in the web server's root directory (e.g., htdocs for XAMPP).

### How to Use
- Make sure your PHP has the mysqli extension enabled to connect to the database.
- For security, consider using password hashing in a real application.

### License
This project is open-source and free to use.
You can save this content in a file named `README.md` in your project directory. This will provide clear instructions and information about your project for anyone who views it.


