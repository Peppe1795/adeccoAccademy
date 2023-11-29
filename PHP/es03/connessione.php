<?php
try {
    $conn = new PDO('mysql:host=localhost:3307;dbname=adecco', 'root', '1234');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    error_log("Connessione al database riuscita!");
} catch (PDOException $e) {
    die("Errore nella connessione al database: " . $e->getMessage());
}
?>