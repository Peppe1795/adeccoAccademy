<?php
require("connessione.php");
session_start();

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

if (isset($_POST['id'])) {
    $productId = $_POST['id'];

    if (isset($_SESSION['cart'][$productId])) {
        $_SESSION['cart'][$productId]++;
    } else {
        $_SESSION['cart'][$productId] = 1;
    }
}

echo "<h2>Prodotti nel Carrello</h2>";
echo "<ul>";

foreach ($_SESSION['cart'] as $productId => $quantity) {
    $stmt = $conn->prepare("SELECT * FROM prodotti WHERE id = :id");
    $stmt->bindParam(':id', $productId);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        echo "<li>{$row["descrizione"]} - Quantità: $quantity</li>";
    }
}

echo "</ul>";

$total = 0;

foreach ($_SESSION['cart'] as $productId => $quantity) {
    $stmt = $conn->prepare("SELECT prezzo FROM prodotti WHERE id = :id");
    $stmt->bindParam(':id', $productId);
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        $total += $row["prezzo"] * $quantity;
    }
}

echo "<p>Totale: $total</p>";

echo "<form action='carrellosession.php' method='post'>";
echo "<input type='submit' value='Memorizza Carrello'>";
echo "</form>";

echo "<a href='carrello.php?action=clear'>Svuota Carrello</a>";
echo "<br><br><a href='index.php'>Torna alla lista</a>";
?>