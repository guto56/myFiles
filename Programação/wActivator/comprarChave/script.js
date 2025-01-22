const buyBtn = document.getElementById('buyBtn');
buyBtn.addEventListener('click', function(){
    const phoneNumber = '5565981015757';
    const message = 'Olá, tenho interesse em adquirir um produto.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
});