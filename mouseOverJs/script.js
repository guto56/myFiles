const imageCard = document.getElementById('imageCard');

imageCard.addEventListener('mouseover', function(){
    imageCard.style.transition = 'transform 1.1s ease';
    imageCard.style.transform = 'translateX(-85px)'

    const desc = document.getElementById('desc');
    desc.style.transition = 'transform 1.1s ease';
    desc.style.transform = 'translateX(25px)'
    desc.style.opacity = '1'
})

imageCard.addEventListener('mouseleave', function(){
    imageCard.style.transition = 'transform 0.8s ease';
    imageCard.style.transform = 'translateX(0px)'

    const desc = document.getElementById('desc');
     desc.style.transition = 'opacity 0.5s ease';
    desc.style.opacity = '0'


})

