<?php
require("connessione.php");

session_start();



if (count($_SESSION['cart']) > 0) {
    foreach ($_SESSION['cart'] as $productId => $quantity) {
        try {
            $stmt = $conn->prepare("INSERT INTO carrello (prodotto_id, quantita) VALUES (:productId, :quantity)");
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

echo "<a href='index.php'>torna alla home</a>";
?>