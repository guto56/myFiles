<?php
include('database.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];

    // Inserir o usuário no banco de dados
    $sql = "INSERT INTO usuarios (nome, cpf) VALUES ('$nome', '$cpf')";
    if ($conn->query($sql) === TRUE) {
        // Recuperar o ID do usuário inserido
        $usuarioId = $conn->insert_id;

        // Iniciar a sessão
        session_start();

        // Armazenar o ID do usuário e o nome na sessão
        $_SESSION['usuario_id'] = $usuarioId;
        $_SESSION['nome'] = $nome;  // Armazenar o nome do usuário

        // Redirecionar para home.php
        header("Location: home.php");
        exit();
    } else {
        echo "Erro ao registrar: " . $conn->error;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Registro</title>
    <style>
        /* Estilização Geral */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        /* Container principal */
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            box-sizing: border-box;
            text-align: center; /* Centraliza o conteúdo do formulário */
        }

        /* Título */
        h2 {
            color: #333;
            margin-bottom: 20px; /* Espaçamento abaixo do título */
        }

        /* Rótulos */
        label {
            display: block;
            margin: 10px 0 5px;
            font-weight: bold;
            color: #555;
        }

        /* Campos de entrada */
        input[type="text"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
            margin-bottom: 15px; /* Espaçamento entre os campos */
        }

        /* Botões */
        button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 10px;
        }

        /* Hover para os botões */
        button:hover {
            background-color: #0056b3;
        }

        /* Espaçamento adicional */
        .spacer {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Registro de Usuário</h2>
        <form method="POST" action="registro.php">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            <br>
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required>
            <br><br>
            <button type="submit">Registrar</button>
        </form>

        <div class="spacer"></div>

        <!-- Botão de Acesso VIP -->
        <button onclick="acessoVip()">Acesso VIP</button>

        <div class="spacer"></div>

        <!-- Botão de Login de Usuário -->
        <button onclick="loginUser()">Login de Usuário</button>
    </div>

    <script>
        function acessoVip() {
            window.location.href = "vipacess.php"; // Redireciona para a página de login VIP
        }

        function loginUser() {
            window.location.href = "loginuser.php"; // Redireciona para a página de login de usuário
        }
    </script>
</body>
</html>