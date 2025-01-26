<?php
try {
    // Connection details
    $dsn = 'mysql:host=localhost;dbname=goqiidb'; // Data Source Name (DSN)
    $username = 'root'; // Database username
    $password = ''; // Database password

    // Create a PDO instance (connect to the database)
    $conn = new PDO($dsn, $username, $password);

    // Set PDO error mode to exception to handle errors
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    // If there is an error during the connection, this block will handle it
    echo "Connection failed: " . $e->getMessage();
}


?>
