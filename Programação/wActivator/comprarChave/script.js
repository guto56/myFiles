function buyItem(){
    const phoneNumber = '5565981015757';
    const message = 'Olá, tenho interesse em adquirir um produto do pacote.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
}