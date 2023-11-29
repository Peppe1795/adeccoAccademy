<?php

if (isset($_GET["addendi"])) {
    $addendi = $_GET["addendi"];
}

if (isset($_POST["num"])) {
    $addendi = $_POST["num"];
    $somma = array_sum($addendi);

    echo '<h2>Valori degli addendi:</h2>';
    echo '<ul>';
    foreach ($addendi as $i => $valore) {
        echo '<li>Addendo ' . ($i + 1) . ': ' . $valore . '</li>';
    }
    echo '</ul>';
    echo '<p>Risultato: ' . $somma . '</p>';
} else {
    echo '<p>Nessun dato ricevuto dal modulo.</p>';
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .colonna {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
    </style>
</head>

<body>

    <div>
        <form class="colonna" name="form" method="POST" action="index.php">
            <?php
            if (isset($_GET["addendi"])) {
                $addendi = intval($_GET["addendi"]);
                for ($i = 0; $i < $addendi; $i++) {
                    echo '<input type="number" name="num[]" />';
                }
            }
            ?>
            <button type="submit">SOMMA</button>
        </form>
    </div>

</body>

</html>