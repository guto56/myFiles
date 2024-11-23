const cities = {
    "MT": {
        cities: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop"],
        offset: -4 // UTC-4
    },
    "SP": {
        cities: ["São Paulo", "Campinas", "Santos", "Sorocaba"],
        offset: -3 // UTC-3
    },
    "RJ": {
        cities: ["Rio de Janeiro", "Niterói", "Campos dos Goytacazes", "Duque de Caxias"],
        offset: -3 // UTC-3
    },
    "MG": {
        cities: ["Belo Horizonte", "Uberlândia", "Juiz de Fora", "Montes Claros"],
        offset: -3 // UTC-3
    },
    "BA": {
        cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Ilhéus"],
        offset: -3 // UTC-3
    }
};

const updateV2Clock = () => {
    const now = new Date();
    const urlParams = new URLSearchParams(window.location.search);
    const state = urlParams.get('state');
    const city = urlParams.get('city');
    const offset = cities[state]?.offset || 0;
    const localTime = new Date(now.getTime() + (offset * 60 * 60 * 1000));
    const hours = String(localTime.getUTCHours()).padStart(2, '0');
    const minutes = String(localTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(localTime.getUTCSeconds()).padStart(2, '0');
    
    document.getElementById('v2Time').textContent = `${hours}:${minutes}:${seconds}`;
    
    document.title = 'Hora Atual: ' + `${hours}:${minutes}:${seconds}`;
    
    if (city) {
        document.getElementById('v2Location').textContent = `Estado: ${state}, Cidade: ${city}`;
    } else {
        document.getElementById('v2Location').textContent = `Estado: ${state}`;
    }
};

const updateTimeAutomatically = () => {
    setInterval(updateV2Clock, 1000); 
};

const toggleScreen = () => {
    window.location.href = '../stopwatch/crono.html';
};

const voltar = document.getElementById('backBtn').addEventListener('click', function(){
    window.location.href = '../clock/clock.html'
})

updateTimeAutomatically();
