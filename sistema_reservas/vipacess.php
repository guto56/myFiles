<?php
session_start();

// Verificar se a variável de sessão admin_logged_in está definida, para evitar acesso múltiplo
if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in']) {
    header("Location: admin.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Verificar se o login foi bem-sucedido
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    if ($usuario == 'company' && $senha == 'dmc0311') {
        // Definir a variável de sessão para indicar que o login foi bem-sucedido
        $_SESSION['admin_logged_in'] = true;
        header("Location: admin.php"); // Redirecionar para o painel de administração
        exit();
    } else {
        $erro = "Usuário ou senha incorretos!";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Acesso VIP</title>
</head>
<body>
    <h2>Acesso VIP</h2>

    <?php if (isset($erro)) { echo "<p style='color: red;'>$erro</p>"; } ?>

    <form method="POST" action="vipacess.php">
        <label for="usuario">Usuário:</label>
        <input type="text" id="usuario" name="usuario" required>
        <br><br>
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required>
        <br><br>
        <button type="submit">Entrar</button>
    </form>

</body>
</html>
