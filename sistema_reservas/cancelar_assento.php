<?php
// Incluir a conexão com o banco de dados
include('database.php');

// Verificar se o administrador está logado
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: vipacess.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuarioId = $_POST['usuario_id'];
    $assentoId = $_POST['assento_id'];

    // Atualizar o status do assento para "disponível"
    $sql = "UPDATE assentos SET reservado = 0, usuario_id = NULL WHERE numero_assento = '$assentoId'";

    if ($conn->query($sql) === TRUE) {
        // Sucesso, redireciona para a página admin.php
        echo "<script>alert('Assento cancelado com sucesso!'); window.location.href = 'admin.php';</script>";
    } else {
        echo "Erro ao cancelar o assento: " . $conn->error;
    }
}

$conn->close();
?>
