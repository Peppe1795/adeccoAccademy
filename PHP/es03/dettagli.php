<?php
session_start();
require("connessione.php");
echo '<div>';
echo '<a href="carrello.php">Mostra Carrello</a>';
echo '</div>';

if (isset($_GET['id'])) {
    $productId = $_GET['id'];

    try {
        $stmt = $conn->prepare("SELECT * FROM prodotti WHERE id = :id");
        $stmt->bindParam(':id', $productId);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            echo "<h2>Dettaglio Prodotto</h2>";
            echo "<p>ID: {$row["id"]}</p>";
            echo "<p>Descrizione: {$row["descrizione"]}</p>";
            echo "<p>Prezzo: {$row["prezzo"]}</p>";

            echo "<form action='carrello.php' method='post'>";
            echo "<input type='hidden' name='id' value='{$row["id"]}'>";
            echo "<input type='submit' value='Aggiungi al Carrello'>";
            echo "</form>";

            echo "<br><br><a href='index.php'>Torna alla lista</a>";
        } else {
            echo "Prodotto non trovato";
        }
    } catch (PDOException $e) {
        echo "Errore nella query: " . $e->getMessage();
    }
} else {
    echo "ID del prodotto non specificato";
}
?>