// Animación de aparición al hacer scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Función para animar elementos secuencialmente
const animateSequentially = (elements, delay = 100) => {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * delay);
    });
};

// Observar elementos que deben animarse al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    // Animar elementos al hacer scroll
    const elementsToAnimate = document.querySelectorAll('.test-card, .benefit-card');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Animar elementos del hero secuencialmente
    const heroElements = document.querySelectorAll('.hero h1, .hero .subtitle, .hero .cta-button');
    animateSequentially(heroElements, 200);

    // Animación suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Microinteracción mejorada para el botón CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', () => {
            ctaButton.style.transform = 'translateY(-3px) scale(1.05)';
            ctaButton.style.boxShadow = '0 8px 20px rgba(255, 107, 107, 0.3)';
        });

        ctaButton.addEventListener('mouseout', () => {
            ctaButton.style.transform = 'translateY(0) scale(1)';
            ctaButton.style.boxShadow = 'none';
        });

        // Efecto de click
        ctaButton.addEventListener('mousedown', () => {
            ctaButton.style.transform = 'translateY(1px) scale(0.98)';
        });

        ctaButton.addEventListener('mouseup', () => {
            ctaButton.style.transform = 'translateY(-3px) scale(1.05)';
        });
    }

    // Animación mejorada para las tarjetas de test
    const testCards = document.querySelectorAll('.test-card');
    testCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Animación para los beneficios
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
}); 