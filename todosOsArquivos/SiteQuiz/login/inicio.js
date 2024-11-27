document.addEventListener('DOMContentLoaded', function() {
    var loadingOverlay = document.getElementById('loading');
    if (loadingOverlay) {
        setTimeout(function() {
            loadingOverlay.classList.add('hidden');
        }, 500); // Ajuste o tempo conforme necessário
    }
});

const startBtn = document.getElementById('startBtn')

startBtn.addEventListener('click', function(){
    window.location.href = 'register.html'
})
