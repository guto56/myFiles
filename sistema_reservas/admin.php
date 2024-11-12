<?php
// Incluir a conexão com o banco de dados
include('database.php');

// Verificar se o administrador está logado
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: vipacess.php");  // Redireciona para a página VIP, caso não esteja logado
    exit();
}

// Buscar todos os usuários e seus assentos
$sql_usuarios = "
    SELECT u.id AS usuario_id, u.nome, u.cpf, GROUP_CONCAT(a.numero_assento ORDER BY a.numero_assento) AS assentos_reservados, a.status_pagamento
    FROM usuarios u
    LEFT JOIN assentos a ON u.id = a.usuario_id AND a.reservado = 1
    GROUP BY u.id
";

$usuarios_result = $conn->query($sql_usuarios);

// Se o botão de resetar for pressionado
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['reset_assentos'])) {
    // Resetar todos os assentos para "disponível"
    $sql_reset = "UPDATE assentos SET reservado = 0, usuario_id = NULL, status_pagamento = 'pendente'";
    if ($conn->query($sql_reset) === TRUE) {
        echo "<script>alert('Todos os assentos foram resetados com sucesso!'); window.location.href = 'admin.php';</script>";
    } else {
        echo "Erro ao resetar os assentos: " . $conn->error;
    }
}

// Se o botão de desfazer for pressionado
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['desfazer_assento'])) {
    $usuarioId = $_POST['usuario_id'];
    $assentoId = $_POST['assento_id'];

    // Atualizar o status do assento para "disponível"
    $sql_desfazer = "UPDATE assentos SET reservado = 0, usuario_id = NULL, status_pagamento = 'pendente' WHERE numero_assento = '$assentoId' AND usuario_id = '$usuarioId'";

    if ($conn->query($sql_desfazer) === TRUE) {
        echo "<script>alert('Reserva desfeita com sucesso!'); window.location.href = 'admin.php';</script>";
    } else {
        echo "Erro ao desfazer a reserva: " . $conn->error;
    }
}

// Se o botão de confirmar pagamento for pressionado
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['confirmar_pagamento'])) {
    $usuarioId = $_POST['usuario_id'];

    // Atualizar o status do pagamento para "pago"
    $sql_pagamento = "UPDATE assentos SET status_pagamento = 'pago' WHERE usuario_id = '$usuarioId'";

    if ($conn->query($sql_pagamento) === TRUE) {
        echo "<script>alert('Pagamento confirmado com sucesso!'); window.location.href = 'admin.php';</script>";
    } else {
        echo "Erro ao confirmar pagamento: " . $conn->error;
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <title>Admin - Gerenciar Usuários</title>
</head>
<body>
    <h2>Gerenciar Usuários e Assentos</h2>

    <!-- Botão para Resetar Assentos -->
    <form method="POST" onsubmit="return confirmarReset();">
        <button type="submit" name="reset_assentos">Resetar Todos os Assentos</button>
    </form>
    
    <!-- Botão para Voltar para Home -->
    <br><br>
    <form action="home.php">
        <button type="submit">Voltar para Home</button>
    </form>

    <script>
        function confirmarReset() {
            // Confirmação para resetar os assentos
            return confirm('Você tem certeza que deseja resetar todos os assentos? Esta ação não pode ser desfeita!');
        }
    </script>

    <h3>Usuários Cadastrados</h3>
    <table border="1">
        <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Assentos Reservados</th>
            <th>Desfazer Reserva</th>
            <th>Confirmar Pagamento</th>
        </tr>
        <?php
        if ($usuarios_result->num_rows > 0) {
            while ($row = $usuarios_result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row['nome'] . "</td>";
                echo "<td>" . $row['cpf'] . "</td>";
                
                // Exibir os assentos reservados
                echo "<td>";
                if ($row['assentos_reservados']) {
                    echo $row['assentos_reservados'];
                } else {
                    echo "Não reservado";
                }
                echo "</td>";

                // Se o usuário tiver um assento reservado, exibe os botões
                echo "<td>";
                if ($row['assentos_reservados']) {
                    $assentos = explode(',', $row['assentos_reservados']);
                    foreach ($assentos as $assento) {
                        echo "<form method='POST' action='admin.php'>
                                <input type='hidden' name='usuario_id' value='" . $row['usuario_id'] . "'>
                                <input type='hidden' name='assento_id' value='" . $assento . "'>
                                <button type='submit' name='desfazer_assento' onclick=\"return confirm('Tem certeza que deseja desfazer a reserva deste assento?');\">Desfazer</button>
                              </form><br>";
                    }
                } else {
                    echo "Nenhum assento reservado";
                }
                echo "</td>";

                // Adicionar o botão de Confirmar Pagamento
                echo "<td>";
                if ($row['assentos_reservados']) {
                    // Apenas 1 botão para confirmar pagamento
                    echo "<form method='POST' action='admin.php'>
                            <input type='hidden' name='usuario_id' value='" . $row['usuario_id'] . "'>
                            <button type='submit' name='confirmar_pagamento' onclick=\"return confirm('Tem certeza que deseja confirmar o pagamento?');\" style='background-color: blue;'>Confirmar Pagamento</button>
                          </form><br>";
                } else {
                    echo "Nenhum assento reservado";
                }
                echo "</td>";

                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='5'>Nenhum usuário encontrado</td></tr>";
        }
        ?>
    </table>

</body>
</html>
