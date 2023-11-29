<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .yellow-bg {
            background-color: yellow;
        }

        .red-bg {
            background-color: red;
        }

        .column {
            float: left;
            width: 100px;
            padding: 10px;
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

        $bg_class = ($numeri[$i] % 2 == 0) ? 'yellow-bg' : 'red-bg';

        echo "<div class='column $bg_class'>" . $numeri[$i] . "</div>";
    }

    ?>
</body>

</html>