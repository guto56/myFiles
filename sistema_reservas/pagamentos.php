<?php
// Incluir a conexão com o banco de dados
include('database.php');

// Iniciar a sessão
session_start();

// Verificar se o usuário está logado
if (!isset($_SESSION['usuario_id'])) {
    header("Location: registro.php");
    exit();
}

// ID do usuário logado
$usuarioId = $_SESSION['usuario_id'];

// Verificar se o nome do usuário está definido na sessão
$nomeUsuario = isset($_SESSION['nome']) ? $_SESSION['nome'] : "Usuário"; // Valor padrão se o nome não estiver definido

// Verificar se o ID do assento foi passado
if (isset($_GET['id'])) {
    $assentoId = $_GET['id'];

    // Atualizar o status do assento para "pendente" (cor amarela)
    $sql_update = "UPDATE assentos SET reservado = 2 WHERE id = $assentoId"; // 2 pode ser o status de pendente
    if ($conn->query($sql_update) === TRUE) {
        // Mensagem de sucesso ao reservar o assento
        echo "<script>alert('Seu assento está quase reservado, basta completar o pagamento!');</script>";
    } else {
        echo "Erro ao atualizar o status do assento: " . $conn->error;
    }
}

// Fechar a conexão com o banco de dados
$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Pagamento - Sistema de Reservas</title>
    <style>
        /* Estilos gerais */
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            text-align: center;
            padding: 50px;
        }

        h2 {
            color: #333;
        }

        .assento-status {
            background-color: #ffc107; /* Cor amarela para pendente */
            color: white;
            font-size: 18px;
            padding: 10px;
            border-radius: 5px;
            margin-top: 20px;
            font-weight: bold;
        }

        .botao-pagamento {
            display: inline-block;
            margin-top: 30px;
            padding: 12px 25px;
            color: white;
            background-color: #28a745;
            text-decoration: none;
            border-radius: 5px;
            font-size: 18px;
            transition: background-color 0.3s;
        }

        .botao-pagamento:hover {
            background-color: #218838;
        }

        /* Container do botão de pagamento */
        .container {
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <h2>Seu Assento está quase reservado!</h2>

    <!-- Mensagem de status do assento -->
    <div class="assento-status">
        Seu assento está prestes a ser reservado! O status está como <strong>pendente</strong> e a cor está <strong>amarela</strong>, o que significa que é praticamente seu. Basta efetuar o pagamento. Se não for efetuado em até 24 horas, ele voltará a ficar disponível.
    </div>

    <!-- Botão para efetuar o pagamento -->
    <div class="container">
        <a href="https://mpago.la/1W5MspR" class="botao-pagamento" target="_blank">Efetuar Pagamento</a>
    </div>
</body>
</html>
