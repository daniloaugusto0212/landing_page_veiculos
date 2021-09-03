<!DOCTYPE html>
<html lang="pt-br">

<?php

function active($page)
{
    $url = isset($_GET['url']) ? $_GET['url'] : 'home';
    if ($page == $url) {
        return 'class="active"';
    }
}
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto 05</title>
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <header style="border-bottom: 2px solid #eb2d2d;">
        <div class="container">
            <div class="logo">
                <img src="images/logo.jpg" alt="Logomarca RM Veículos">
            </div>

            <nav class="desktop">
                <ul>
                    <li><a <?= active('home') ?> href="home">Home</a></li>
                    <li><a <?= active('venda') ?> href="venda">Venda</a></li>
                    <li><a <?= active('sobre') ?> href="sobre">Sobre</a></li>
                    <li><a goto="contato" href="">Contato</a></li>
                </ul>
            </nav>
            <nav class="mobile">
                <ul>
                    <li><a <?= active('home') ?> href="home">Home</a></li>
                    <li><a <?= active('venda') ?> href="venda">Venda</a></li>
                    <li><a <?= active('sobre') ?> href="sobre">Sobre</a></li>
                    <li><a goto="contato" href="">Contato</a></li>
                </ul>
            </nav>

            <div class="clear"></div>
        </div>
        <!-- /.container -->
        <!-- /.desktop -->
    </header>

<?php

if (isset($_GET['url'])) {
    $url = $_GET['url'];
    if (file_exists($url . '.php')) {
        include($url . '.php');
    } else {
        include('404.php');
    }
} else {
    include('home.php');
}

?>

<footer>
        <div class="container">
            <nav>
                <ul>
                    <li><a class="active" href="index">Home</a></li>
                    <li><a href="venda">Venda</a></li>
                    <li><a href="sobre">Sobre</a></li>
                    <li><a goto="contato" href="">Contato</a></li>
                </ul>
            </nav>
            <p>Todos os direitos reservados</p>
            <div class="clear"></div>
        </div>
    </footer>

    <script src="js/jquery-3.6.js"></script>
    <script src="js/functions.js"></script>
</body>

</html>
