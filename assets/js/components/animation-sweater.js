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
        
        this.init();
    }
    
    init() {
        if (!this.section || !this.sweaterImg || !this.sweaterInfo || !this.sweaterContent || !this.sweaterAnimation) {
            return;
        }
        
        this.setupEventListeners();
        this.checkImagePosition();
    }
    
    setupEventListeners() {
        
        window.addEventListener('scroll', () => {
            if (!this.isScrollBlocked && !this.animationComplete) {
                this.checkImagePosition();
            }
        });
        
        
        window.addEventListener('scroll', (e) => {
            if (this.isScrollBlocked && !this.animationComplete) {
                this.handleScroll(e);
            }
        }, { passive: false });
        
        window.addEventListener('wheel', (e) => {
            if (this.isScrollBlocked && !this.animationComplete) {
                this.handleWheel(e);
            }
        }, { passive: false });
        
        
        let touchStartY = 0;
        window.addEventListener('touchstart', (e) => {
            if (this.isScrollBlocked && !this.animationComplete) {
                touchStartY = e.touches[0].clientY;
            }
        });
        
        window.addEventListener('touchmove', (e) => {
            if (this.isScrollBlocked && !this.animationComplete) {
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
        
     
        let triggerOffset = -300; 
        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 480) {
            triggerOffset = -150; 
        } else if (screenWidth <= 768) {
            triggerOffset = -200; 
        } else if (screenWidth <= 1024) {
            triggerOffset = -300; 
        }
        else if (screenWidth <= 1900) {
            triggerOffset = -100; 
        }
        
        
       
        if (imgRect.bottom <= windowHeight - triggerOffset && imgRect.top < windowHeight) {
            if (!this.isScrollBlocked && !this.animationComplete) {
                this.startAnimation();
            }
        }
        
      
        if (imgRect.bottom < 0 && this.isScrollBlocked) {
            this.resetAnimation();
        }
    }
    
    startAnimation() {
        this.isScrollBlocked = true;
        this.animationStartScrollY = window.scrollY;
        this.scrollStep = 0;
        this.currentWidth = this.config.initialWidth;
        
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
        this.scrollStep += step;
        this.scrollStep = Math.max(0, Math.min(this.config.scrollSteps, this.scrollStep));
        
        const progress = this.scrollStep / this.config.scrollSteps;
        const widthRange = this.config.initialWidth - this.config.minWidth;
        this.currentWidth = this.config.initialWidth - (widthRange * progress);
        
        const img = this.sweaterImg.querySelector('img');
        if (img) {
            img.style.width = this.currentWidth + 'px';
        }
        
        this.toggleTextVisibility();
        
        if (this.scrollStep >= this.config.scrollSteps) {
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
        document.body.style.overflow = '';
    }
    
    resetAnimation() {
        this.isScrollBlocked = false;
        this.animationComplete = false;
        this.scrollStep = 0;
        this.currentWidth = this.config.initialWidth;
        
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