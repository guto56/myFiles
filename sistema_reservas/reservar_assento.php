<?php
// Incluir a conexão com o banco de dados
include('database.php');

if (isset($_GET['id'])) {
    $assentoId = $_GET['id'];

    // Atualizar o status do assento para reservado
    $sql = "UPDATE assentos SET reservado = TRUE WHERE id = $assentoId";

    if ($conn->query($sql) === TRUE) {
        echo 'success';
    } else {
        echo 'error';
    }
}

$conn->close();
?>
