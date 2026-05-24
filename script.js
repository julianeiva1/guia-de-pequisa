/**
 * ================================================================================
 * GERENCIADOR DE CAROUSEL (Carrossel de Feedbacks)
 * ================================================================================
 * Controla o carrossel de feedbacks com navegação por botões, drag com mouse,
 * e deslizamento por toque em dispositivos móveis. Implementa loop infinito.
 */

const CarouselManager = (() => {
    // Elementos do DOM
    const carousel = document.getElementById('feedbacksCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselWrapper = document.querySelector('.feedbacks-carousel-wrapper');

    // Se algum elemento não existe, encerra o módulo
    if (!carousel || !prevBtn || !nextBtn || !carouselWrapper) return {};

    // Estado privado do carousel
    const state = {
        cards: Array.from(carousel.querySelectorAll('.feedback-card')), // Array com todos os cards
        currentIndex: 0, // Índice do card atual sendo visualizado
        isDragging: false, // Flag para detectar se está arrastando com mouse
        startX: 0, // Posição X inicial do mouse/toque
        dragDistance: 0 // Distância arrastada em pixels
    };

    // ========== FUNÇÕES AUXILIARES ==========

    /**
     * Calcula o espaço (gap) entre os cards no CSS
     */
    const getGap = () => parseFloat(window.getComputedStyle(carousel).gap) || 0;

    /**
     * Calcula quantos pixels pular para ir de um card a outro (largura + gap)
     */
    const getCardStep = () => state.cards[0].offsetWidth + getGap();

    /**
     * Calcula a largura visível do carousel (descontando padding)
     */
    const getVisibleWidth = () => {
        const styles = window.getComputedStyle(carouselWrapper);
        const paddingLeft = parseFloat(styles.paddingLeft) || 0;
        const paddingRight = parseFloat(styles.paddingRight) || 0;
        return carouselWrapper.clientWidth - paddingLeft - paddingRight;
    };

    /**
     * Calcula o índice máximo para o loop (quantos cards podem ser navegados)
     */
    const getMaxIndex = () => {
        const step = getCardStep();
        const visibleWidth = getVisibleWidth();
        const visibleCards = Math.floor(visibleWidth / step);
        return Math.max(0, state.cards.length - Math.max(1, visibleCards));
    };

    /**
     * Normaliza o índice para garantir loop infinito
     * Se passar do máximo, volta ao início. Se for negativo, vai ao final.
     */
    const normalizeIndex = () => {
        const maxIndex = getMaxIndex();
        if (state.currentIndex > maxIndex) state.currentIndex = 0;
        if (state.currentIndex < 0) state.currentIndex = maxIndex;
    };

    /**
     * Atualiza a posição visual do carousel com animação suave
     * @param {boolean} animate - Se verdadeiro, anima a transição (padrão: true)
     */
    const updateCarouselPosition = (animate = true) => {
        normalizeIndex();
        const offset = -state.currentIndex * getCardStep();
        carousel.style.transition = animate ? 'transform 0.35s ease' : 'none';
        carousel.style.transform = `translateX(${offset}px)`;
    };

    // ========== NAVEGAÇÃO DO CAROUSEL ==========

    /**
     * Avança para o próximo card (com loop para o início)
     */
    const nextSlide = () => {
        const maxIndex = getMaxIndex();
        state.currentIndex = state.currentIndex >= maxIndex ? 0 : state.currentIndex + 1;
        updateCarouselPosition(true);
    };

    /**
     * Volta para o card anterior (com loop para o final)
     */
    const prevSlide = () => {
        const maxIndex = getMaxIndex();
        state.currentIndex = state.currentIndex <= 0 ? maxIndex : state.currentIndex - 1;
        updateCarouselPosition(true);
    };

    // ========== EVENT LISTENERS - CLIQUE NOS BOTÕES ==========

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // ========== EVENT LISTENERS - ARRASTO COM MOUSE ==========

    /**
     * Inicia o arrasto quando o mouse é pressionado sobre o carousel
     */
    carousel.addEventListener('mousedown', (e) => {
        state.isDragging = true;
        state.startX = e.pageX;
        state.dragDistance = 0;
        carousel.style.cursor = 'grabbing';
        carousel.style.transition = 'none'; // Remove animação durante arrasto
    });

    /**
     * Atualiza a posição do carousel enquanto o mouse se move (enquanto arrasta)
     */
    window.addEventListener('mousemove', (e) => {
        if (!state.isDragging) return;
        state.dragDistance = e.pageX - state.startX;
        const offset = -state.currentIndex * getCardStep();
        carousel.style.transform = `translateX(${offset + state.dragDistance}px)`;
    });

    /**
     * Finaliza o arrasto quando o mouse é solto
     * Se arrastou pelo menos 20% da largura de um card, navega
     */
    window.addEventListener('mouseup', () => {
        if (!state.isDragging) return;
        state.isDragging = false;
        carousel.style.cursor = 'grab';
        const threshold = getCardStep() * 0.2; // Limiar: 20% da largura de um card
        
        // Determina se vai navegar baseado no arrasto
        if (state.dragDistance < -threshold) nextSlide();
        else if (state.dragDistance > threshold) prevSlide();
        else updateCarouselPosition(true); // Volta à posição se arrasto foi pequeno
    });

    // ========== EVENT LISTENERS - DESLIZAMENTO EM TOQUE (MOBILE) ==========

    /**
     * Inicia o toque no carousel (mobile)
     */
    carousel.addEventListener('touchstart', (e) => {
        state.isDragging = true;
        state.startX = e.touches[0].clientX;
        state.dragDistance = 0;
        carousel.style.transition = 'none'; // Remove animação durante toque
    }, { passive: true });

    /**
     * Atualiza a posição enquanto o dedo se move sobre o carousel
     */
    carousel.addEventListener('touchmove', (e) => {
        if (!state.isDragging) return;
        state.dragDistance = e.touches[0].clientX - state.startX;
        const offset = -state.currentIndex * getCardStep();
        carousel.style.transform = `translateX(${offset + state.dragDistance}px)`;
    }, { passive: true });

    /**
     * Finaliza o toque e determina se deve navegar baseado no movimento
     */
    carousel.addEventListener('touchend', () => {
        if (!state.isDragging) return;
        state.isDragging = false;
        const threshold = getCardStep() * 0.2;

        if (state.dragDistance < -threshold) nextSlide();
        else if (state.dragDistance > threshold) prevSlide();
        else updateCarouselPosition(true);
    });

    /**
     * Redimensiona o carousel quando a janela muda de tamanho (responsivo)
     */
    window.addEventListener('resize', () => {
        normalizeIndex();
        updateCarouselPosition(false);
    });

    // Inicializa a posição do carousel sem animação
    updateCarouselPosition(false);
    
    // Expõe apenas os métodos públicos
    return { nextSlide, prevSlide };
})();

/**
 * ================================================================================
 * GERENCIADOR DE MENU MOBILE
 * ================================================================================
 * Controla a abertura/fechamento do menu de navegação em dispositivos móveis.
 * O menu abre quando o usuário clica no ícone de menu (hamburger).
 * O menu fecha quando o usuário clica em um link ou fora do header.
 */

const MobileMenuManager = (() => {
    // Elementos do DOM
    const menuToggle = document.getElementById('menuToggle'); // Botão hamburger
    const headerNav = document.getElementById('headerNav'); // Menu de navegação
    const navLinks = document.querySelectorAll('.nav-link'); // Links do menu

    // Se elementos não existem, encerra o módulo
    if (!menuToggle || !headerNav) return;

    /**
     * Alterna o estado do menu (abre se fechado, fecha se aberto)
     */
    const toggleMenu = () => {
        menuToggle.classList.toggle('active'); // Anima o ícone hamburger para X
        headerNav.classList.toggle('active'); // Mostra/esconde o menu
    };

    /**
     * Fecha o menu
     */
    const closeMenu = () => {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    };

    // Clique no botão hamburger abre/fecha o menu
    menuToggle.addEventListener('click', toggleMenu);

    // Clique em qualquer link do menu o fecha
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Clique fora do header também fecha o menu
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            closeMenu();
        }
    });
})();

/**
 * ================================================================================
 * GERENCIADOR DE ANIMAÇÃO DE REVELAÇÃO AO ROLAR (SCROLL REVEAL)
 * ================================================================================
 * Adiciona efeito visual onde elementos aparecem gradualmente com animação
 * quando entram na área visível da página durante o scroll.
 * Usa Intersection Observer para detectar quando elementos ficam visíveis.
 */

const ScrollRevealManager = (() => {
    // Aguarda o DOM estar totalmente carregado antes de iniciar
    document.addEventListener('DOMContentLoaded', () => {
        // Lista de seletores CSS dos elementos que devem ter animação de revelação
        const selectors = [
            '.hero-content',     // Título e descrição do hero
            '.hero-image',       // Imagem do hero
            '.about-text',       // Texto da seção sobre
            '.pillar-card',      // Pilares de caracterização do projeto
            '.card',             // Cards da seção de conteúdo
            '.contact-content',  // Conteúdo da seção de contato
            '.contact-card',     // Cards de contato
            '.cta-title',        // Título do call-to-action
            '.cta-description'   // Descrição do call-to-action
        ];

        // Seleciona todos os elementos que devem ser animados
        const elementsToReveal = document.querySelectorAll(selectors.join(', '));

        // Se não houver elementos ou o navegador não suporta IntersectionObserver, encerra
        if (elementsToReveal.length === 0 || !('IntersectionObserver' in window)) {
            return;
        }

        /**
         * Cria um observador que detecta quando elementos entram na viewport
         */
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Se o elemento ficou visível, adiciona a classe de revelação
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-reveal-visible');
                        // Deixa de observar pois a animação já foi acionada
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Elemento precisa estar 10% visível
                rootMargin: '0px 0px -50px 0px' // Margem de detecção abaixo da viewport
            }
        );

        // Adiciona a classe inicial e começa a observar cada elemento
        elementsToReveal.forEach((element) => {
            element.classList.add('scroll-reveal');
            observer.observe(element);
        });
    });
})();

/**
 * ================================================================================
 * GERENCIADOR DE EFEITO DE SCROLL DO HEADER
 * ================================================================================
 * Altera o estilo do header quando o usuário faz scroll na página.
 * O header fica mais compacto quando scroll passa de 40px para economizar espaço.
 */

const HeaderScrollManager = (() => {
    // Seleciona o elemento header
    const header = document.querySelector('.header');

    // Se header não existe, encerra o módulo
    if (!header) return;

    /**
     * Listeners para o evento de scroll da página
     * Quando o usuário scrolleia mais de 40px, o header recebe a classe 'scrolled'
     * que reduz o padding do header para economizar espaço na viewport
     */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            // Adiciona classe 'scrolled' ao header (compacta)
            header.classList.add('scrolled');
        } else {
            // Remove classe 'scrolled' do header (expande)
            header.classList.remove('scrolled');
        }
    });
})();
