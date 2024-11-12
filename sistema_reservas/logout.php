<?php
session_start();
session_destroy(); // Destruir todas as sessões
header("Location: registro.php"); // Redirecionar para a página de registro
exit();
?>
