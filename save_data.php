<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $data = "Name: $name\nEmail: $email\nMessage: $message\n\n";
    
    // Save the data to a file
    file_put_contents('submissions.txt', $data, FILE_APPEND);
    
    // Redirect back to the form page or a thank you page
    header('Location: thank_you.html');
    exit();
}
?>
