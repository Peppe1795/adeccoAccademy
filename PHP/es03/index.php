<?php

require("connessione.php");
echo '<div>';
echo '<a href="carrello.php">Mostra Carrello</a>';
echo '</div>';

$query = "SELECT * FROM prodotti";
$result = $conn->query($query);

echo "<h1> Lista prodotti </h1>";

echo "<ul>";
while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    echo "<li><a href='dettagli.php?id={$row["id"]}'>{$row["descrizione"]}</a></li>";
}


echo "</ul>";


?>