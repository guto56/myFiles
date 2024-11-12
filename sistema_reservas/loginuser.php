<?php
// Incluir a conexão com o banco de dados
include('database.php');

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];

    // Verificar se o nome e CPF estão cadastrados
    $sql = "SELECT id FROM usuarios WHERE nome = '$nome' AND cpf = '$cpf'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // O usuário foi encontrado, então inicia a sessão e redireciona
        $row = $result->fetch_assoc();
        $_SESSION['usuario_id'] = $row['id']; // Armazenar o ID do usuário na sessão
        header("Location: home.php"); // Redireciona para a página home.php
        exit();
    } else {
        // Usuário não encontrado
        $erro = "Usuário não encontrado ou dados inválidos.";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Login de Usuário</title>
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

h2 {
    color: #333;
    text-align: center;
}

form {
    background-color: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

label {
    display: block;
    margin: 10px 0 5px;
    font-weight: bold;
    color: #555;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

p {
    color: red;
    text-align: center;
}

    </style>
</head>
<body>
    <h2>Login de Usuário</h2>
    <?php
    if (isset($erro)) {
        echo "<p style='color:red;'>$erro</p>"; // Exibe mensagem de erro se houver
    }
    ?>
    <form method="POST" action="loginuser.php">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>
        <br>
        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" required>
        <br><br>
        <button type="submit">Entrar</button>
    </form>
</body>
</html>
