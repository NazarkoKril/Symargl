class SweaterScrollAnimation {
    constructor() {
        this.section = document.querySelector('.section__sweater');
        this.sweaterImg = document.querySelector('.sweater__img');
        this.sweaterInfo = document.querySelector('.sweater_info');
        this.sweaterContent = document.querySelector('.sweater__content');
        this.sweaterAnimation = document.querySelector('.sweater__animation');
        
        this.config = {
            initialWidth: 1400,
            minWidth: 460,
            scrollSteps: 200
        };
        
        this.isScrollBlocked = false;
        this.currentWidth = this.config.initialWidth;
        this.scrollStep = 0;
        this.animationComplete = false;
        this.animationStartScrollY = 0;
        this.isReverseAnimation = false; // Новий флаг для зворотної анімації
        this.lastScrollY = 0; // Для відстеження напряму скролу
        this.canStartNewAnimation = true; // Флаг для контролю нових анімацій
        
        this.init();
    }
    
    init() {
        if (!this.section || !this.sweaterImg || !this.sweaterInfo || !this.sweaterContent || !this.sweaterAnimation) {
            return;
        }
        
        this.setupEventListeners();
        this.checkImagePosition();
        this.lastScrollY = window.scrollY;
    }
    
    setupEventListeners() {
        
        window.addEventListener('scroll', () => {
            if (!this.isScrollBlocked) {
                this.checkImagePosition();
            }
            this.lastScrollY = window.scrollY;
        });
        
        
        window.addEventListener('scroll', (e) => {
            if (this.isScrollBlocked) {
                this.handleScroll(e);
            }
        }, { passive: false });
        
        window.addEventListener('wheel', (e) => {
            if (this.isScrollBlocked) {
                this.handleWheel(e);
            }
        }, { passive: false });
        
        
        let touchStartY = 0;
        window.addEventListener('touchstart', (e) => {
            if (this.isScrollBlocked) {
                touchStartY = e.touches[0].clientY;
            }
        });
        
        window.addEventListener('touchmove', (e) => {
            if (this.isScrollBlocked) {
                const deltaY = touchStartY - e.touches[0].clientY;
                this.updateAnimation(deltaY > 0 ? 1 : -1);
                touchStartY = e.touches[0].clientY;
                e.preventDefault();
            }
        }, { passive: false });
    }
    
    checkImagePosition() {
        const imgRect = this.sweaterImg.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > this.lastScrollY ? 'down' : 'up';
        
        // Налаштування тригеру залежно від розміру екрану
        let triggerOffset = 70;
        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 480) {
            triggerOffset = 50;
        } else if (screenWidth <= 768) {
            triggerOffset = 30; 
        } else if (screenWidth <= 1024) {
            triggerOffset = 70; 
        }

        // Звичайна анімація при скролі вниз
        if (scrollDirection === 'down' && imgRect.top <= triggerOffset && imgRect.bottom > 0) {
            if (!this.isScrollBlocked && !this.animationComplete && this.canStartNewAnimation) {
                this.startAnimation(false);
            }
        }

        // Зворотна анімація при скролі вгору - коли верх екрану дійшов до верху зображення
        if (scrollDirection === 'up' && this.animationComplete && imgRect.top >= 0 && imgRect.top <= 10) {
            if (!this.isScrollBlocked && this.canStartNewAnimation) {
                this.startAnimation(true);
            }
        }

        // Скидання анімації якщо зображення вийшло за межі екрану
        if (imgRect.bottom < -100 && this.isScrollBlocked && !this.isReverseAnimation) {
            this.resetAnimation();
        }
    }
    
    startAnimation(isReverse = false) {
        this.isScrollBlocked = true;
        this.isReverseAnimation = isReverse;
        this.animationStartScrollY = window.scrollY;
        
        if (isReverse) {
            // Для зворотної анімації починаємо з мінімального розміру
            this.scrollStep = this.config.scrollSteps;
            this.currentWidth = this.config.minWidth;
            this.animationComplete = false;
        } else {
            // Для звичайної анімації починаємо з максимального розміру
            this.scrollStep = 0;
            this.currentWidth = this.config.initialWidth;
        }
        
        const img = this.sweaterImg.querySelector('img');
        if (img) {
            img.style.width = this.currentWidth + 'px';
            img.style.maxWidth = 'none';
        }
        
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, this.animationStartScrollY);
    }
    
    handleScroll(e) {
        const currentScrollY = window.scrollY;
        const lastScrollY = this.animationStartScrollY;
        const step = currentScrollY > lastScrollY ? 1 : -1;
        
        this.updateAnimation(step);
        window.scrollTo(0, this.animationStartScrollY);
        e.preventDefault();
    }
    
    handleWheel(e) {
        const step = e.deltaY > 0 ? 1 : -1;
        this.updateAnimation(step);
        e.preventDefault();
    }
    
    updateAnimation(step) {
        if (this.isReverseAnimation) {
            // Зворотна анімація: при скролі вгору (step = -1) збільшуємо картинку
            if (step < 0) { // Скрол вгору
                this.scrollStep -= 1; // Зменшуємо scrollStep щоб збільшити картинку
            } else { // Скрол вниз
                this.scrollStep += 1; // Збільшуємо scrollStep щоб зменшити картинку
            }
            this.scrollStep = Math.max(0, Math.min(this.config.scrollSteps, this.scrollStep));
        } else {
            // Звичайна анімація: зменшуємо картинку при скролі вниз
            this.scrollStep += step;
            this.scrollStep = Math.max(0, Math.min(this.config.scrollSteps, this.scrollStep));
        }
        
        const progress = this.scrollStep / this.config.scrollSteps;
        const widthRange = this.config.initialWidth - this.config.minWidth;
        this.currentWidth = this.config.initialWidth - (widthRange * progress);
        
        const img = this.sweaterImg.querySelector('img');
        if (img) {
            img.style.width = this.currentWidth + 'px';
        }
        
        this.toggleTextVisibility();
        
        // Перевіряємо завершення анімації
        if (this.isReverseAnimation && this.scrollStep <= 0) {
            this.completeReverseAnimation();
        } else if (!this.isReverseAnimation && this.scrollStep >= this.config.scrollSteps) {
            this.completeAnimation();
        }
    }
    
    toggleTextVisibility() {
        const isActive = this.currentWidth <= this.config.minWidth;
        
        if (isActive && !this.sweaterInfo.classList.contains('active')) {
            this.sweaterInfo.classList.add('active');
            this.sweaterContent.classList.add('text-active');
            this.sweaterAnimation.classList.add('compact-view');
        } else if (!isActive && this.sweaterInfo.classList.contains('active')) {
            this.sweaterInfo.classList.remove('active');
            this.sweaterContent.classList.remove('text-active');
            this.sweaterAnimation.classList.remove('compact-view');
        }
    }
    
    completeAnimation() {
        this.animationComplete = true;
        this.isScrollBlocked = false;
        this.isReverseAnimation = false;
        this.canStartNewAnimation = true;
        document.body.style.overflow = '';
    }
    
    completeReverseAnimation() {
        // Завершуємо зворотну анімацію і розблоковуємо скрол
        this.animationComplete = false;
        this.isScrollBlocked = false;
        this.isReverseAnimation = false;
        this.currentWidth = this.config.initialWidth;
        
        // Тимчасово заборонити нові анімації щоб дати час на вільний скрол
        this.canStartNewAnimation = false;
        
        // Розблоковуємо скрол повністю
        document.body.style.overflow = '';
        
        const img = this.sweaterImg.querySelector('img');
        if (img) {
            img.style.width = '';
            img.style.maxWidth = '';
        }
        
        // Приховуємо текст після зворотної анімації
        this.sweaterInfo.classList.remove('active');
        this.sweaterContent.classList.remove('text-active');
        this.sweaterAnimation.classList.remove('compact-view');
        
        // Через невеликий час дозволяємо знову запускати анімації
        setTimeout(() => {
            this.canStartNewAnimation = true;
        }, 500); // Затримка 500мс для вільного скролу
    }
    
    resetAnimation() {
        this.isScrollBlocked = false;
        this.animationComplete = false;
        this.isReverseAnimation = false;
        this.scrollStep = 0;
        this.currentWidth = this.config.initialWidth;
        this.canStartNewAnimation = true;
        
        document.body.style.overflow = '';
        
        const img = this.sweaterImg.querySelector('img');
        if (img) {
            img.style.width = '';
            img.style.maxWidth = '';
        }
        
        this.sweaterInfo.classList.remove('active');
        this.sweaterContent.classList.remove('text-active');
        this.sweaterAnimation.classList.remove('compact-view');
    }
    
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const sweaterAnimation = new SweaterScrollAnimation();
    
    const updateConfigForScreen = () => {
        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 480) {
            sweaterAnimation.updateConfig({
                initialWidth: 280,
                minWidth: 200,
                scrollSteps: 150
            });
        } else if (screenWidth <= 768) {
            sweaterAnimation.updateConfig({
                initialWidth: 400,
                minWidth: 280,
                scrollSteps: 170
            });
        } else if (screenWidth <= 1024) {
            sweaterAnimation.updateConfig({
                initialWidth: 600,
                minWidth: 350,
                scrollSteps: 180
            });
        } else {
            sweaterAnimation.updateConfig({
                initialWidth: 1400,
                minWidth: 460,
                scrollSteps: 200
            });
        }
    };
    
    updateConfigForScreen();
    
    window.addEventListener('resize', updateConfigForScreen);
});