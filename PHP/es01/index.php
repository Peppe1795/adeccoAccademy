<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .giallo {
            background-color: yellow;
        }

        .rosso {
            background-color: red;
        }

        .disposizione {
            display: flex;
            flex-direction: column;
        }
    </style>
</head>

<body>
    <?php

    $numeri = [];

    for ($i = 10; $i > 0; $i--) {
        $numeri[] = $i;
    }

    for ($i = 0; $i < count($numeri); $i++) {

        $bg_class = ($numeri[$i] % 2 == 0) ? 'giallo' : 'rosso';

        echo "<div class='disposizione $bg_class'>" . $numeri[$i] . "</div>";
    }

    ?>
</body>

</html>