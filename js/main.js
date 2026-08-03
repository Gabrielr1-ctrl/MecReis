/**
 * main.js - Lógica Geral Compartilhada
 * Mecânica Reis - MVP
 */

document.addEventListener('DOMContentLoaded', () => {
    // Evita o reenvio de formulários simulados e melhora a UX padrão
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // Apenas aplica uma leve animação no botão
            const btn = form.querySelector('button[type="submit"]');
            if(btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Processando...';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }, 1000);
            }
        });
    });

    // Animação de entrada dos cards
    const cards = document.querySelectorAll('.stat-card, .form-section, .stock-list, .services-list, .recent-section');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});
