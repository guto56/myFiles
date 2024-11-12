<?php
// Configurações do banco de dados
$host = 'localhost';   // Host do banco de dados
$dbname = 'sistema_reservas'; // Nome do banco de dados
$username = 'root';     // Usuário padrão do XAMPP
$password = '4886';         // Senha padrão em branco no XAMPP, ou coloque a senha se houver

// Criar a conexão
$conn = new mysqli($host, $username, $password, $dbname);

// Verificar se houve erro na conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
