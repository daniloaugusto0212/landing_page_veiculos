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
