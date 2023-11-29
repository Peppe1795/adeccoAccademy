<?php
require("connessione.php");

session_start();

if (!isset($_SESSION['user_id'])) {
    $_SESSION['user_id'] = session_id();
}

if (count($_SESSION['cart']) > 0) {
    $userId = $_SESSION['user_id'];

    foreach ($_SESSION['cart'] as $productId => $quantity) {
        try {
            $stmt = $conn->prepare("INSERT INTO carrello (user_id, prodotto_id, quantita) VALUES (:userId, :productId, :quantity)");
            $stmt->bindParam(':userId', $userId);
            $stmt->bindParam(':productId', $productId);
            $stmt->bindParam(':quantity', $quantity);
            $stmt->execute();
        } catch (PDOException $e) {
            echo "Errore nell'inserimento nel carrello: " . $e->getMessage();

        }
    }

    $_SESSION['cart'] = [];

    echo "Carrello memorizzato nel database!";
} else {
    echo "Il carrello è vuoto, niente da memorizzare.";
}


?>