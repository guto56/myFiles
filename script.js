function addBtnFunc(){
    window.open('https://www.icloud.com/shortcuts/c12b784f1e984ce7b6f3bdd3702817a2', '_blank');
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
        event.preventDefault();
        window.open('https://www.icloud.com/shortcuts/c12b784f1e984ce7b6f3bdd3702817a2', '_blank');
    }
});

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('mouseover', function(){
    addBtn.style.transition = 'transform 0.5s ease';
    addBtn.style.transform = 'scale(1.1)';
})

addBtn.addEventListener('mouseout', function(){
    addBtn.style.transition = 'transform 0.5s ease';
    addBtn.style.transform = 'scale(1)';
})

let scrollTimeout;

window.addEventListener('scroll', function() {
    const blurSection = document.querySelector('.blur-effect');
    
    const scrollPosition = window.scrollY;
    const blurAmount = Math.min(scrollPosition * 0.1, 1.5);
    blurSection.style.filter = `blur(${blurAmount}px)`;

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function() {
        blurSection.style.filter = 'blur(0px)'; 
    }, 30);
});
