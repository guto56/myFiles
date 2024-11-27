const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const feedbackContainer = document.getElementById('feedback');
const countdownContainer = document.getElementById('countdown');
const scoreElement = document.getElementById('score');
const timerContainer = document.getElementById('timer');

const questions = [
    { question: 'Qual é o nome da teoria que propõe que a vida na Terra pode ter surgido a partir de moléculas orgânicas simples trazidas por cometas ou meteoritos?', answers: [ { text: 'Panspermia', correct: true }, { text: 'Abiogênese', correct: false }, { text: 'Biogênese', correct: false }, { text: 'Cosmogonia', correct: false } ] },
    { question: 'Qual é a capital da Mongólia?', answers: [ { text: 'Ulaanbaatar', correct: true }, { text: 'Astana', correct: false }, { text: 'Baku', correct: false }, { text: 'Tashkent', correct: false } ] },
    { question: 'Quem foi o líder da Revolução Russa de 1917?', answers: [ { text: 'Vladimir Lenin', correct: true }, { text: 'Leon Trotsky', correct: false }, { text: 'Joseph Stalin', correct: false }, { text: 'Nikita Khrushchev', correct: false } ] },
    { question: 'Qual é o menor osso do corpo humano?', answers: [ { text: 'Estribo', correct: true }, { text: 'Martelo', correct: false }, { text: 'Bigorna', correct: false }, { text: 'Coluna', correct: false } ] },
    { question: 'Qual foi a primeira civilização a construir pirâmides?', answers: [ { text: 'Egípcios', correct: true }, { text: 'Sumérios', correct: false }, { text: 'Maias', correct: false }, { text: 'Acanos', correct: false } ] },
    { question: 'Qual é o nome do físico que formulou a equação de Schrödinger?', answers: [ { text: 'Erwin Schrödinger', correct: true }, { text: 'Werner Heisenberg', correct: false }, { text: 'Niels Bohr', correct: false }, { text: 'Max Planck', correct: false } ] },
    { question: 'Quem foi o imperador romano conhecido por ter promulgado o Édito de Milão?', answers: [ { text: 'Constantino', correct: true }, { text: 'Nero', correct: false }, { text: 'Augusto', correct: false }, { text: 'Trajano', correct: false } ] },
    { question: 'Qual é o nome da partícula subatômica que não possui carga elétrica?', answers: [ { text: 'Nêutron', correct: true }, { text: 'Próton', correct: false }, { text: 'Elétron', correct: false }, { text: 'Positron', correct: false } ] },
    { question: 'Qual é o maior continente do mundo por área?', answers: [ { text: 'Ásia', correct: true }, { text: 'África', correct: false }, { text: 'América do Norte', correct: false }, { text: 'Antártica', correct: false } ] },
    { question: 'Qual é o maior oceano do mundo?', answers: [ { text: 'Pacífico', correct: true }, { text: 'Atlântico', correct: false }, { text: 'Índico', correct: false }, { text: 'Ártico', correct: false } ] },
    { question: 'Qual é a obra mais famosa do filósofo Friedrich Nietzsche?', answers: [ { text: 'Assim Falou Zaratustra', correct: true }, { text: 'O Nascimento da Tragédia', correct: false }, { text: 'Além do Bem e do Mal', correct: false }, { text: 'Genealogia da Moral', correct: false } ] },
    { question: 'Qual é o nome do processo pelo qual as células se dividem para formar células germinativas?', answers: [ { text: 'Meiose', correct: true }, { text: 'Mitoses', correct: false }, { text: 'Fusão', correct: false }, { text: 'Fissão', correct: false } ] },
    { question: 'Qual é o nome da estrutura que armazena a informação genética nas células eucariotas?', answers: [ { text: 'Núcleo', correct: true }, { text: 'Citoplasma', correct: false }, { text: 'Ribossomo', correct: false }, { text: 'Mitocôndria', correct: false } ] },
    { question: 'Quem é o autor da obra "O Capital"?', answers: [ { text: 'Karl Marx', correct: true }, { text: 'Friedrich Engels', correct: false }, { text: 'Max Weber', correct: false }, { text: 'Adam Smith', correct: false } ] },
    { question: 'Qual é o nome da teoria que afirma que o universo está se expandindo?', answers: [ { text: 'Teoria do Big Bang', correct: true }, { text: 'Teoria da Relatividade Geral', correct: false }, { text: 'Teoria das Cordas', correct: false }, { text: 'Teoria da Evolução', correct: false } ] },
    { question: 'Qual é o nome do elemento químico com o símbolo "Hg"?', answers: [ { text: 'Mercúrio', correct: true }, { text: 'Manganês', correct: false }, { text: 'Molibdênio', correct: false }, { text: 'Magnésio', correct: false } ] },
    { question: 'Quem foi o líder da Revolução Francesa?', answers: [ { text: 'Maximilien Robespierre', correct: true }, { text: 'Louis XVI', correct: false }, { text: 'Napoleão Bonaparte', correct: false }, { text: 'Georges Danton', correct: false } ] },
    { question: 'Qual é o nome da estrutura que conecta o cérebro à medula espinhal?', answers: [ { text: 'Tronco encefálico', correct: true }, { text: 'Córtex cerebral', correct: false }, { text: 'Hipotálamo', correct: false }, { text: 'Cerebelo', correct: false } ] },
    { question: 'Qual é a cidade onde foi assinado o Tratado de Versalhes?', answers: [ { text: 'Versalhes', correct: true }, { text: 'Paris', correct: false }, { text: 'Londres', correct: false }, { text: 'Berlim', correct: false } ] },
    { question: 'Quem descobriu a penicilina?', answers: [ { text: 'Alexander Fleming', correct: true }, { text: 'Louis Pasteur', correct: false }, { text: 'Joseph Lister', correct: false }, { text: 'Robert Koch', correct: false } ] },
    { question: 'Qual é o nome da primeira pessoa a viajar para o espaço?', answers: [ { text: 'Yuri Gagarin', correct: true }, { text: 'Neil Armstrong', correct: false }, { text: 'Buzz Aldrin', correct: false }, { text: 'Michael Collins', correct: false } ] },
    { question: 'Qual é o nome da substância que confere a cor verde às plantas?', answers: [ { text: 'Clorofila', correct: true }, { text: 'Carotenoide', correct: false }, { text: 'Antocianina', correct: false }, { text: 'Xantofila', correct: false } ] },
    { question: 'Qual é a principal obra do poeta William Blake?', answers: [ { text: 'Songs of Innocence and of Experience', correct: true }, { text: 'The Divine Comedy', correct: false }, { text: 'Paradise Lost', correct: false }, { text: 'O Corvo', correct: false } ] },
    { question: 'Qual é a fórmula química do ácido sulfúrico?', answers: [ { text: 'H2SO4', correct: true }, { text: 'HCl', correct: false }, { text: 'HNO3', correct: false }, { text: 'CH3COOH', correct: false } ] },
    { question: 'Qual é o maior animal marinho?', answers: [ { text: 'Baleia-azul', correct: true }, { text: 'Orca', correct: false }, { text: 'Baleia-jubarte', correct: false }, { text: 'Tubarão-branco', correct: false } ] },
    { question: 'Quem foi o último czar da Rússia?', answers: [ { text: 'Nicolau II', correct: true }, { text: 'Alexandre III', correct: false }, { text: 'Pedro I', correct: false }, { text: 'Ivan IV', correct: false } ] },
    { question: 'Qual é a unidade básica da vida?', answers: [ { text: 'Célula', correct: true }, { text: 'Molécula', correct: false }, { text: 'Átomo', correct: false }, { text: 'Organelo', correct: false } ] },
    { question: 'Quem foi o autor da teoria da relatividade restrita?', answers: [ { text: 'Albert Einstein', correct: true }, { text: 'Isaac Newton', correct: false }, { text: 'Galileu Galilei', correct: false }, { text: 'Michael Faraday', correct: false } ] },
    { question: 'Qual é a língua oficial da Bélgica?', answers: [ { text: 'Neerlandês, Francês e Alemão', correct: true }, { text: 'Francês e Alemão', correct: false }, { text: 'Francês e Neerlandês', correct: false }, { text: 'Alemão e Neerlandês', correct: false } ] },
    { question: 'Qual é o nome da teoria que descreve a origem do universo a partir de uma grande explosão?', answers: [ { text: 'Big Bang', correct: true }, { text: 'Big Crunch', correct: false }, { text: 'Teoria das Cordas', correct: false }, { text: 'Teoria do Estado Estacionário', correct: false } ] },
    { question: 'Qual é o nome da peça que Shakespeare escreveu em sua fase final, e é conhecida como a sua última peça?', answers: [ { text: 'A Tempestade', correct: true }, { text: 'Hamlet', correct: false }, { text: 'Macbeth', correct: false }, { text: 'Rei Lear', correct: false } ] },
    { question: 'Qual é o nome da partícula subatômica que possui uma carga positiva?', answers: [ { text: 'Próton', correct: true }, { text: 'Nêutron', correct: false }, { text: 'Elétron', correct: false }, { text: 'Positron', correct: false } ] },
    { question: 'Quem foi o descobridor da América?', answers: [ { text: 'Cristóvão Colombo', correct: true }, { text: 'Vasco da Gama', correct: false }, { text: 'Ferdinando Magalhães', correct: false }, { text: 'Pedro Álvares Cabral', correct: false } ] },
    { question: 'Qual é a forma geométrica de um cristal de sal de cozinha?', answers: [ { text: 'Cúbica', correct: true }, { text: 'Hexagonal', correct: false }, { text: 'Tetragonal', correct: false }, { text: 'Ortorrômbica', correct: false } ] },
    { question: 'Qual é o nome do maior deserto do mundo?', answers: [ { text: 'Deserto da Antártica', correct: true }, { text: 'Deserto do Saara', correct: false }, { text: 'Deserto de Gobi', correct: false }, { text: 'Deserto de Kalahari', correct: false } ] },
    { question: 'Quem pintou "A Última Ceia"?', answers: [ { text: 'Leonardo da Vinci', correct: true }, { text: 'Michelangelo', correct: false }, { text: 'Raphael', correct: false }, { text: 'Donatello', correct: false } ] },
    { question: 'Qual é o nome do sistema de escrita criado por Johannes Gutenberg?', answers: [ { text: 'Imprensa Tipográfica', correct: true }, { text: 'Caligrafia', correct: false }, { text: 'Gravura', correct: false }, { text: 'Litografia', correct: false } ] },
    { question: 'Qual é a capital do Brasil?', answers: [ { text: 'Brasília', correct: true }, { text: 'São Paulo', correct: false }, { text: 'Rio de Janeiro', correct: false }, { text: 'Salvador', correct: false } ] },
    { question: 'Qual é o maior planeta do sistema solar?', answers: [ { text: 'Terra', correct: false }, { text: 'Marte', correct: false }, { text: 'Júpiter', correct: true }, { text: 'Saturno', correct: false } ] },
    { question: 'Qual é o símbolo químico do ouro?', answers: [ { text: 'Au', correct: true }, { text: 'Ag', correct: false }, { text: 'Pb', correct: false }, { text: 'Fe', correct: false } ] },
    { question: 'Quem pintou a Mona Lisa?', answers: [ { text: 'Leonardo da Vinci', correct: true }, { text: 'Pablo Picasso', correct: false }, { text: 'Vincent van Gogh', correct: false }, { text: 'Claude Monet', correct: false } ] },
    { question: 'Qual é o oceano mais profundo?', answers: [ { text: 'Atlântico', correct: false }, { text: 'Índico', correct: false }, { text: 'Pacífico', correct: true }, { text: 'Ártico', correct: false } ] },
    { question: 'Qual é o elemento químico mais abundante no universo?', answers: [ { text: 'Hidrogênio', correct: true }, { text: 'Oxigênio', correct: false }, { text: 'Carbono', correct: false }, { text: 'Nitrogênio', correct: false } ] },
    { question: 'Qual é o maior animal terrestre?', answers: [ { text: 'Elefante', correct: true }, { text: 'Rinoceronte', correct: false }, { text: 'Girafa', correct: false }, { text: 'Hipopótamo', correct: false } ] },
    { question: 'Quem escreveu "Dom Quixote"?', answers: [ { text: 'Miguel de Cervantes', correct: true }, { text: 'Gabriel García Márquez', correct: false }, { text: 'Jorge Luis Borges', correct: false }, { text: 'Pablo Neruda', correct: false } ] },
    { question: 'Qual é o menor país do mundo em termos de área?', answers: [ { text: 'Mônaco', correct: false }, { text: 'San Marino', correct: false }, { text: 'Vaticano', correct: true }, { text: 'Liechtenstein', correct: false } ] },
    { question: 'Qual é o nome do nosso planeta?', answers: [ { text: 'Terra', correct: true }, { text: 'Marte', correct: false }, { text: 'Júpiter', correct: false }, { text: 'Netuno', correct: false } ] },
    { question: 'Qual é a fórmula química da cafeína?', answers: [ { text: 'C8H10N4O2', correct: true }, { text: 'C6H12O6', correct: false }, { text: 'C9H12O3', correct: false }, { text: 'C7H8N4O2', correct: false } ] },
    { question: 'Quem desenvolveu a teoria da relatividade geral?', answers: [ { text: 'Isaac Newton', correct: false }, { text: 'Niels Bohr', correct: false }, { text: 'Albert Einstein', correct: true }, { text: 'Galileo Galilei', correct: false } ] },
    { question: 'Qual é a obra literária de James Joyce que é considerada uma das mais importantes do modernismo?', answers: [ { text: 'Ulisses', correct: true }, { text: 'O Retrato do Artista quando Jovem', correct: false }, { text: 'Finnegans Wake', correct: false }, { text: 'A Porca de Cão', correct: false } ] },
    { question: 'Qual é o nome da estrutura que armazena a informação genética na célula?', answers: [ { text: 'Ribossomo', correct: false }, { text: 'Mitocôndria', correct: false }, { text: 'Núcleo', correct: true }, { text: 'Citoplasma', correct: false } ] },
    { question: 'Qual é o resultado da multiplicação de 11111111 x 11111111?', answers: [ { text: '123456787654321', correct: true }, { text: '123456789876543', correct: false }, { text: '123456789012345', correct: false }, { text: '123456789123456', correct: false } ] },
    { question: 'Em que ano foi assinado o Tratado de Versalhes?', answers: [ { text: '1919', correct: true }, { text: '1918', correct: false }, { text: '1920', correct: false }, { text: '1921', correct: false } ] },
    { question: 'Qual é o maior deserto quente do mundo?', answers: [ { text: 'Deserto da Arábia', correct: false }, { text: 'Deserto do Saara', correct: true }, { text: 'Deserto de Gobi', correct: false }, { text: 'Deserto de Kalahari', correct: false } ] },
    { question: 'Qual é o nome da partícula subatômica que foi descoberta por James Chadwick?', answers: [ { text: 'Elétron', correct: false }, { text: 'Próton', correct: false }, { text: 'Nêutron', correct: true }, { text: 'Neutrino', correct: false } ] },
    { question: 'Qual é o elemento químico com o símbolo "W"?', answers: [ { text: 'Tungstênio', correct: true }, { text: 'Wolfram', correct: true }, { text: 'Wismut', correct: false }, { text: 'Wolframium', correct: false } ] },
    { question: 'Quem foi o imperador romano conhecido por ter estabelecido a Pax Romana?', answers: [ { text: 'Nero', correct: false }, { text: 'Augusto', correct: true }, { text: 'César', correct: false }, { text: 'Constantino', correct: false } ] },
    { question: 'Qual é a obra de Shakespeare que contém o famoso monólogo "Ser ou não ser"?', answers: [ { text: 'Hamlet', correct: true }, { text: 'Macbeth', correct: false }, { text: 'Romeu e Julieta', correct: false }, { text: 'Otelo', correct: false } ] },
    { question: 'Qual é a unidade de medida usada para a intensidade de corrente elétrica?', answers: [ { text: 'Volt', correct: false }, { text: 'Ampère', correct: true }, { text: 'Ohm', correct: false }, { text: 'Watt', correct: false } ] },
    { question: 'Qual é o nome do filósofo grego que escreveu "A República"?', answers: [ { text: 'Aristóteles', correct: false }, { text: 'Sócrates', correct: false }, { text: 'Platão', correct: true }, { text: 'Pitágoras', correct: false } ] },
    { question: 'Qual é o nome da molécula responsável pelo transporte de oxigênio no sangue?', answers: [ { text: 'Hemoglobina', correct: true }, { text: 'Hematócrito', correct: false }, { text: 'Mioglobina', correct: false }, { text: 'Globulina', correct: false } ] },
    { question: 'Qual é o título do primeiro livro da série "As Crônicas de Nárnia" escrito por C.S. Lewis?', answers: [ { text: 'O Leão, a Feiticeira e o Guarda-Roupa', correct: false }, { text: 'A Cadeira de Prata', correct: false }, { text: 'O Cavalo e Seu Menino', correct: false }, { text: 'O Sobrinho do Mágico', correct: true } ] },
    { question: 'Qual é o nome da teoria que descreve a origem do universo?', answers: [ { text: 'Teoria do Big Bang', correct: true }, { text: 'Teoria da Relatividade', correct: false }, { text: 'Teoria das Cordas', correct: false }, { text: 'Teoria da Evolução', correct: false } ] },
    { question: 'Quem foi o primeiro homem a pisar na Lua?', answers: [ { text: 'Buzz Aldrin', correct: false }, { text: 'Michael Collins', correct: false }, { text: 'Neil Armstrong', correct: true }, { text: 'Yuri Gagarin', correct: false } ] },
    { question: 'Qual é o nome da maior lua de Saturno?', answers: [ { text: 'Titã', correct: true }, { text: 'Encélado', correct: false }, { text: 'Reia', correct: false }, { text: 'Japeto', correct: false } ] },
    { question: 'Qual foi a primeira civilização a utilizar a escrita cuneiforme?', answers: [ { text: 'Egípcios', correct: false }, { text: 'Sumérios', correct: true }, { text: 'Fenícios', correct: false }, { text: 'Maias', correct: false } ] },
    { question: 'Qual é a capital do Quênia?', answers: [ { text: 'Nairóbi', correct: true }, { text: 'Dar es Salaam', correct: false }, { text: 'Addis Abeba', correct: false }, { text: 'Pretória', correct: false } ] },
    { question: 'Qual é a principal obra de Isaac Asimov que é uma trilogia sobre a fundação da civilização humana?', answers: [ { text: 'Eu, Robô', correct: false }, { text: 'Fundação', correct: true }, { text: 'Os Robôs do Amanhã', correct: false }, { text: 'O Homem Bicentenario', correct: false } ] },
    { question: 'Qual é o nome da teoria que propõe que a vida na Terra pode ter vindo de cometas ou meteoritos?', answers: [ { text: 'Panspermia', correct: true }, { text: 'Abiogênese', correct: false }, { text: 'Biogênese', correct: false }, { text: 'Cosmogonia', correct: false } ] },
    { question: 'Quem é o autor da teoria da evolução por seleção natural?', answers: [ { text: 'Charles Darwin', correct: true }, { text: 'Jean-Baptiste Lamarck', correct: false }, { text: 'Gregor Mendel', correct: false }, { text: 'Francis Crick', correct: false } ] },
    { question: 'Qual é o nome da substância que dá cor às plantas e é crucial para o processo de fotossíntese?', answers: [ { text: 'Clorofila', correct: true }, { text: 'Carotenoide', correct: false }, { text: 'Antocianina', correct: false }, { text: 'Xantofila', correct: false } ] },
    { question: 'Qual é a única cidade do mundo que está situada em dois continentes?', answers: [ { text: 'Istambul', correct: true }, { text: 'Moscovo', correct: false }, { text: 'Cairo', correct: false }, { text: 'São Petersburgo', correct: false } ] },
    { question: 'Quem foi o compositor da ópera "Carmen"?', answers: [ { text: 'Giuseppe Verdi', correct: false }, { text: 'Richard Wagner', correct: false }, { text: 'Georges Bizet', correct: true }, { text: 'Wolfgang Amadeus Mozart', correct: false } ] },

];

let currentQuestionIndex = 0;
let score = 0;
let hasAnsweredOnce = false;
let timerInterval;
let questionTimer;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    hasAnsweredOnce = false;
    questionOrder = shuffleArray(questions.slice());
    updateScore();
    nextButton.classList.add('hidden');
    feedbackContainer.innerText = '';
    countdownContainer.innerText = '';
    timerContainer.innerText = '';
    showQuestion(questionOrder[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.querySelector('#question').innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
    // Adiciona animação de fade
    questionContainer.classList.add('fade');
    setTimeout(() => questionContainer.classList.remove('fade'), 500);
    
    // Inicia o timer
    startTimer();
}

function selectAnswer(answer) {
    clearInterval(timerInterval); // Para o timer quando uma resposta é selecionada
    clearTimeout(questionTimer); // Para o timer de 10 segundos

    const correct = answer.correct;
    const buttons = answerButtons.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.innerText === answer.text) {
            button.classList.add(correct ? 'correct' : 'incorrect');
        } else if (button.innerText === questionOrder[currentQuestionIndex].answers.find(a => a.correct).text) {
            button.classList.add('correct');
        }
    });

    if (correct) {
        score += 4; // Adiciona 4 pontos para uma resposta correta
        feedbackContainer.innerText = 'Correto! A próxima pergunta aparecerá em:';
    } else {
        score = Math.max(0, score - 2); // Subtrai 2 pontos para uma resposta incorreta
        feedbackContainer.innerText = 'Incorreto. A próxima pergunta aparecerá em:';
    }

    updateScore();
    startCountdown();
}

function updateScore() {
    scoreElement.innerText = score;
}

function startCountdown() {
    let timeLeft = 5;
    countdownContainer.innerText = timeLeft;
    const countdownInterval = setInterval(() => {
        timeLeft--;
        countdownContainer.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            nextQuestion();
        }
    }, 1000);
}

function startTimer() {
    let timeLeft = 10;
    timerContainer.innerText = `Tempo restante: ${timeLeft} segundos`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerContainer.innerText = `Tempo restante: ${timeLeft} segundos`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut(); // Chama função quando o tempo acaba
        }
    }, 1000);
}


function handleTimeOut() {
    // Reduz a opacidade dos botões de resposta
    const buttons = answerButtons.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.opacity = '0.5'; // Reduz a opacidade para 50%
        button.disabled = true; // Desabilita os botões após o tempo acabar
    });

    score = Math.max(0, score - 1); // Subtrai 1 ponto se o tempo acabar
    updateScore();

    feedbackContainer.innerText = 'Tempo esgotado! A próxima pergunta aparecerá em:';
    startCountdown(); // Inicia o countdown para a próxima pergunta
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionOrder.length) {
        showQuestion(questionOrder[currentQuestionIndex]);
        nextButton.classList.add('hidden');
        feedbackContainer.innerText = '';
        countdownContainer.innerText = '';
        timerContainer.innerText = ''; // Limpa o timer
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.innerHTML = `<p>Sua pontuação final: ${score} de ${questionOrder.length * 4}</p>`;
    answerButtons.innerHTML = '';
    nextButton.classList.add('hidden');
}

function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
}

const leavebtn = document.getElementById('leavebtn')

leavebtn.addEventListener('click', function(){
    window.location.href = '../login/login.html'
});

document.addEventListener('DOMContentLoaded', function() {
    var loadingOverlay = document.getElementById('loading');
    if (loadingOverlay) {
        // Ajustar o tempo para garantir que o conteúdo da página tenha carregado
        setTimeout(function() {
            loadingOverlay.classList.add('hidden');
        }, 500); // Ajuste o tempo conforme necessário
    }
});

// Inicializa o jogo
startGame();
