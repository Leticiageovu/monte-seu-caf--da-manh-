// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.btn-order');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuItem = this.closest('.menu-details').querySelector('.menu-title').textContent;
            alert(`Você selecionou: ${menuItem}. Seu pedido será processado!`);
        });
    });
    
    // Animation for price reveal
    const prices = document.querySelectorAll('.price-real');
    
    setTimeout(() => {
        prices.forEach(price => {
            price.style.transform = 'scale(1.1)';
            price.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                price.style.transform = 'scale(1)';
            }, 300);
        });
    }, 1000);
});