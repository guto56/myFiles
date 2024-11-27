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

const updateClock = () => {
    const now = new Date();
    const offset = getOffsetForCity();
    const localTime = new Date(now.getTime() + (offset * 60 * 60 * 1000));
    const hours = String(localTime.getUTCHours()).padStart(2, '0');
    const minutes = String(localTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(localTime.getUTCSeconds()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
};

const getOffsetForCity = () => {
    const city = document.getElementById('city').value;
    for (const state in cities) {
        if (cities[state].cities.includes(city)) {
            return cities[state].offset;
        }
    }
    return 0; 
};

const updateCities = () => {
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');
    const showTimeBtn = document.getElementById('showTimeBtn');
    const v2Btn = document.getElementById('v2Btn');

    const state = stateSelect.value;
    if (state && cities[state]) {
        citySelect.innerHTML = '<option value="">Selecione uma Cidade</option>';
        cities[state].cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
        citySelect.disabled = false;
        showTimeBtn.disabled = false;
        v2Btn.disabled = false;
        showTimeBtn.classList.add('enabled');
        v2Btn.classList.add('enabled');
    } else {
        citySelect.innerHTML = '<option value="">Selecione uma Cidade</option>';
        citySelect.disabled = true;
        showTimeBtn.disabled = true;
        v2Btn.disabled = true;
        showTimeBtn.classList.remove('enabled');
        v2Btn.classList.remove('enabled');
    }
};

const updateTimeAutomatically = () => {
    setInterval(updateClock, 1000); 
};

const showTime = () => {
    updateClock();
    document.getElementById('currentTime').classList.remove('hidden');
    updateTimeAutomatically();
};

const showV2 = () => {
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const url = new URL('../v2/index.html', window.location.href);
    url.searchParams.set('state', state);
    if (city) {
        url.searchParams.set('city', city);
    } else {
        url.searchParams.delete('city');
    }
    window.location.href = url.toString();
};

const toggleScreen = () => {
    window.location.href = '../stopwatch/crono.html';
};

const toggleTheme = () => {
    const body = document.body;
    const container = document.querySelector('.container')
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        container.classList.remove('dark-theme');
        container.classList.add('light-mode');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        container.classList.remove('dark-theme');
        container.classList.add('light-mode');
    }
};

document.getElementById('showTimeBtn').addEventListener('click', showTime);
document.getElementById('v2Btn').addEventListener('click', showV2);
document.getElementById('state').addEventListener('change', updateCities);
document.getElementById('city').addEventListener('change', updateCities);

document.getElementById('switchThemeBtn').addEventListener('click', toggleTheme);
document.getElementById('toggleScreenBtn').addEventListener('click', toggleScreen);

