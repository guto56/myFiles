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

// Buscar todos os assentos disponíveis
$sql = "SELECT * FROM assentos";
$result = $conn->query($sql);

// Verificar se a consulta ao banco de dados foi bem-sucedida
if (!$result) {
    die("Erro na consulta: " . $conn->error); // Mensagem de erro mais clara
}

// Quando o usuário confirmar a reserva de um assento
if (isset($_GET['id'])) {
    $assentoId = $_GET['id'];

    // Verificar se o assento já está reservado
    $sql_check = "SELECT * FROM assentos WHERE id = $assentoId AND reservado = 0";
    $check_result = $conn->query($sql_check);
    if ($check_result && $check_result->num_rows > 0) {
        // Atualizar o assento para "reservado"
        $sql_reservar = "UPDATE assentos SET reservado = 1, usuario_id = $usuarioId WHERE id = $assentoId";
        if ($conn->query($sql_reservar) === TRUE) {
            echo "<script>alert('Assento reservado com sucesso!'); window.location.href = 'home.php';</script>";
        } else {
            echo "Erro ao reservar o assento: " . $conn->error;
        }
    } else {
        echo "<script>alert('Este assento já está reservado ou não está disponível!'); window.location.href = 'home.php';</script>";
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Home - Sistema de Reservas</title>
    <style>
        /* Estilização Geral */
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            text-align: center;
            margin: 0;
            padding: 20px;
        }

        h2, h3 {
            color: #333;
        }

        a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            color: white;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        a:hover {
            background-color: #0056b3;
        }

        /* Estilização dos Assentos */
        .assento {
    width: 50px;
    height: 50px;
    margin: 5px;
    display: inline-block;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.3s;
}

.assento:hover {
    transform: scale(1.1);
}


        .disponivel {
            background-color: #28a745;
        }

        .ocupado {
            background-color: #ffc107;
            cursor: not-allowed;
            opacity: 0.7;
            pointer-events: none;
        }

        /* Container dos Assentos */
        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 500px;
            margin: 0 auto;
        }

        /* Estilização do Modal de Compra */
        .modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            text-align: center;
            z-index: 1000;
        }

        .modal h4 {
            margin: 0 0 15px;
        }

        .modal button {
            padding: 10px 20px;
            margin: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .confirmar {
            background-color: #28a745;
            color: white;
        }

        .recusar {
            background-color: #dc3545;
            color: white;
        }

        /* Estilização do fundo do modal */
        .modal-bg {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 500;
        }
    </style>
</head>
<body>
    <h2>Bem-vindo, <?php echo htmlspecialchars($nomeUsuario); ?>!</h2>  <!-- Exibe o nome do usuário -->
    <h3>Escolha o seu assento</h3>
    
    <!-- Exibir os assentos -->
    <div>
        <?php
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $assentoId = $row['id'];
                $assentoNumero = $row['numero_assento'];
                $status = $row['reservado'] ? 'ocupado' : 'disponivel';
                echo "<div class='assento $status' data-id='$assentoId' data-numero='$assentoNumero'>";
                echo $assentoNumero;
                echo "</div>";
            }
        }
        ?>
    </div>

    <a href="registro.php">Voltar para Registro</a>

    <!-- Modal de Compra -->
    <div class="modal-bg"></div>
    <div class="modal">
        <h4>Reservar este assento por R$20,00?</h4>
        <button class="confirmar">Confirmar</button>
        <button class="recusar">Recusar</button>
    </div>

    <!-- Script para interação com os assentos e o modal -->
    <script>
        const assentos = document.querySelectorAll('.assento');
        const modal = document.querySelector('.modal');
        const modalBg = document.querySelector('.modal-bg');
        const confirmarBtn = document.querySelector('.confirmar');
        const recusarBtn = document.querySelector('.recusar');
        let assentoIdSelecionado;

        assentos.forEach(assento => {
            assento.addEventListener('click', function () {
                const status = assento.classList.contains('ocupado') ? 'ocupado' : 'disponivel';

                if (status === 'disponivel') {
                    assentoIdSelecionado = assento.getAttribute('data-id');
                    modal.style.display = 'block';
                    modalBg.style.display = 'block';
                } else {
                    alert('Este assento já está reservado.');
                }
            });
        });

        recusarBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            modalBg.style.display = 'none';
        });

        confirmarBtn.addEventListener('click', () => {
            window.location.href = `pagamentos.php?id=${assentoIdSelecionado}`;
        });
    </script>
</body>
</html>

