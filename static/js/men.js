window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loading-overlay').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loading-overlay').style.display = 'none';
        }, 500);
    }, 1000);
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    
    if (navMenu.classList.contains('active')) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.main-nav').classList.add('scrolled');
    } else {
        document.querySelector('.main-nav').classList.remove('scrolled');
    }
});

let cartItems = 0;
const cartCount = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.cart-icon');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-card');
        const title = product.querySelector('.product-title').textContent;
        const price = product.querySelector('.product-price').textContent;
        
        cartItems++;
        cartCount.textContent = cartItems;
        
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 300);
        
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'var(--secondary)';
        notification.style.color = 'var(--primary)';
        notification.style.padding = '15px 25px';
        notification.style.borderRadius = '4px';
        notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        notification.style.zIndex = '1000';
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.4s ease';
        notification.textContent = `${title} added to cart`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(-100px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 400);
        }, 3000);
    });
});

document.querySelectorAll('.load-more').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const productsGrid = this.parentElement.querySelector('.products-grid');
        const hiddenProducts = productsGrid.querySelectorAll(`.product-card:not(.visible):not(:nth-child(-n+3))`);
        
        let shown = 0;
        hiddenProducts.forEach(product => {
            if (shown < 3) {
                product.classList.add('visible');
                shown++;
            }
        });
        
        const remainingHidden = productsGrid.querySelectorAll(`.product-card:not(.visible):not(:nth-child(-n+3))`).length;
        if (remainingHidden === 0) {
            this.style.display = 'none';
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('click', function() {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });
});