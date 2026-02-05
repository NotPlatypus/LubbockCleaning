// ===========================
// Data Management - Embedded Data
// ===========================
const servicesData = [
    {
        icon: "🏠",
        title: "Carpet Steam Cleaning",
        description: "Our professional truck-mounted steam cleaning system penetrates deep into carpet fibers, removing embedded dirt, allergens, pet dander, and stubborn stains. We use hot water extraction—the most effective method recommended by carpet manufacturers. Safe for all carpet types, our eco-friendly solutions leave your carpets fresh, sanitized, and looking like new without harsh chemical residues."
    },
    {
        icon: "🛋️",
        title: "Upholstery Cleaning",
        description: "Furniture is a significant investment that deserves professional care. Our certified technicians use specialized techniques tailored to each fabric type—from delicate silk to durable microfiber. We safely remove stains, odors, and allergens while protecting the integrity of your upholstery. Regular cleaning extends the life of your furniture and keeps your home healthy and fresh."
    },
    {
        icon: "💧",
        title: "Water Damage Restoration",
        description: "When disaster strikes, every minute counts. Our 24/7 emergency response team arrives quickly with industrial-grade water extraction equipment, dehumidifiers, and air movers. We handle everything from burst pipes to storm flooding, working directly with your insurance company to document damage and expedite claims. We'll restore your property and prevent mold growth, structural damage, and long-term complications."
    },
    {
        icon: "🔥",
        title: "Fire & Smoke Restoration",
        description: "Fire damage extends far beyond visible char and ash. Smoke particles penetrate porous materials, leaving persistent odors and residue. Our comprehensive restoration process includes debris removal, deep cleaning, odor elimination using thermal fogging and ozone treatment, and complete sanitization. We restore both your property and your peace of mind."
    },
    {
        icon: "🌪️",
        title: "Tile & Grout Cleaning",
        description: "Over time, tile and grout accumulate dirt, soap scum, and bacteria in microscopic pores that regular mopping can't reach. Our high-pressure cleaning system and professional-grade cleaners remove years of buildup, restoring the original color and shine of your tile surfaces. We can also apply sealant to protect grout from future staining and make maintenance easier."
    },
    {
        icon: "✨",
        title: "Air Duct Cleaning",
        description: "Your HVAC system circulates air throughout your home, but dirty ducts spread dust, allergens, and contaminants with it. Our thorough air duct cleaning service removes accumulated debris, improves indoor air quality, and helps your system run more efficiently—potentially lowering energy bills. Especially important for allergy sufferers and families with young children."
    },
    {
        icon: "🪟",
        title: "Hardwood Floor Restoration",
        description: "Bring your hardwood floors back to life with our professional cleaning and restoration service. We remove scratches, scuffs, and water stains while preserving the natural beauty of the wood. Our process includes deep cleaning, buffing, and optional refinishing to protect your floors and enhance their appearance for years to come."
    },
    {
        icon: "🏢",
        title: "Commercial Cleaning",
        description: "First impressions matter in business. We provide comprehensive commercial cleaning services for offices, retail spaces, restaurants, and medical facilities. Our flexible scheduling—including evenings and weekends—minimizes disruption to your operations. From carpets and upholstery to complete post-construction cleanup, we keep your business looking professional."
    },
    {
        icon: "🚧",
        title: "Construction Cleanup",
        description: "Post-construction cleanup is essential for safety and aesthetics. We handle all types of construction debris, from drywall dust and paint splatter to heavy equipment removal. Our team ensures your space is left clean, safe, and ready for occupancy or further work."
    }
];

const testimonialsData = [
    {
        name: "Sarah Martinez",
        location: "Whisperwood",
        rating: 5,
        text: "Elite Steam saved our home after a pipe burst in the middle of the night. They arrived within 45 minutes and immediately started water extraction. Their team was professional, compassionate, and worked tirelessly for three days to dry everything out. No mold, no lasting damage—just incredible service when we needed it most."
    },
    {
        name: "Michael Johnson",
        location: "Tech Terrace",
        rating: 5,
        text: "I've tried several carpet cleaning companies in Lubbock, and Elite Steam is head and shoulders above the rest. The difference in cleaning power with their truck-mounted system is remarkable. My carpets look brand new, and the stains I thought were permanent are completely gone. Worth every penny!"
    },
    {
        name: "Jennifer Davis",
        location: "Shadow Hills",
        rating: 5,
        text: "After a kitchen fire, I was devastated. Elite Steam handled everything—from working with my insurance company to completely removing the smoke smell. They were patient with all my questions and kept me updated throughout the restoration. Six months later, you'd never know there was a fire. Highly recommend!"
    },
    {
        name: "Robert Thompson",
        location: "Downtown Lubbock",
        rating: 5,
        text: "We hired Elite Steam for our office building's carpet cleaning. They came in on a Saturday so they wouldn't disrupt business, and by Monday morning, everything looked fantastic. Professional, efficient, and reasonably priced. They're now our go-to for all our commercial cleaning needs."
    },
    {
        name: "Linda Garcia",
        location: "Arnett Benson",
        rating: 5,
        text: "My son has severe allergies, and our carpets were making things worse. Elite Steam's deep cleaning and air duct service made a noticeable difference within days. They used eco-friendly products that were safe for my family, and the technician took time to explain everything. Such a relief to finally breathe easy at home!"
    },
    {
        name: "David Wilson",
        location: "Wolfforth",
        rating: 5,
        text: "I called Elite Steam for tile and grout cleaning in my bathroom, and wow! I honestly didn't think my grout could be that color again. The team was on time, courteous, and the results exceeded my expectations. They even applied sealant to keep it looking great longer. Will definitely use them again."
    }
];

const faqData = [
    {
        question: "How long does carpet cleaning take?",
        answer: "Most residential carpet cleaning jobs take between 1-3 hours depending on the size of the area and the level of soiling. Drying time is typically 6-12 hours, though we can accelerate this with air movers if needed. We recommend staying off the carpets until they're completely dry for best results."
    },
    {
        question: "Are your cleaning products safe for children and pets?",
        answer: "Absolutely! We exclusively use eco-friendly, non-toxic cleaning solutions that are completely safe for children, pets, and the environment. Our products are biodegradable and leave no harmful residues. Many of our clients choose us specifically because they want green cleaning options without sacrificing effectiveness."
    },
    {
        question: "Do you offer emergency services?",
        answer: "Yes! We provide 24/7 emergency response for water damage, fire damage, and other urgent restoration needs. Time is critical in emergency situations—the faster we respond, the better we can prevent secondary damage like mold growth or structural issues. Call us anytime, day or night, and we'll have a team on-site as quickly as possible."
    },
    {
        question: "How much does water damage restoration cost?",
        answer: "Costs vary depending on the extent of damage, affected area size, and required services. We provide free estimates and work directly with insurance companies to help you navigate the claims process. Most homeowner's insurance policies cover water damage restoration, and we'll help document everything needed for your claim."
    },
    {
        question: "How often should I have my carpets professionally cleaned?",
        answer: "We recommend professional carpet cleaning every 12-18 months for typical households. However, homes with children, pets, allergies, or high traffic may benefit from cleaning every 6-12 months. Regular cleaning not only keeps carpets looking great but also extends their lifespan and improves indoor air quality."
    },
    {
        question: "Will carpet cleaning remove pet stains and odors?",
        answer: "In most cases, yes! We use specialized enzyme treatments that break down pet urine at the molecular level, eliminating both stains and odors rather than just masking them. For severe or old pet stains, we may recommend additional treatments or pad replacement. We'll assess the situation and recommend the most effective solution."
    },
    {
        question: "Do I need to move furniture before you arrive?",
        answer: "We'll move most furniture as part of our service. However, we ask that you remove small items, fragile objects, and valuables from the areas to be cleaned. Large pieces like entertainment centers, beds, and dressers are typically cleaned around. We always use protective pads under furniture legs to prevent damage."
    },
    {
        question: "What's the difference between truck-mounted and portable cleaning equipment?",
        answer: "Truck-mounted systems are significantly more powerful than portable units. They provide stronger suction, hotter water, and more thorough cleaning—resulting in faster drying times and better results. The equipment stays in our truck with only the hoses entering your home, so there's no bulky machinery taking up space or posing a tripping hazard."
    },
    {
        question: "Do you offer any guarantees?",
        answer: "Yes! We offer a 100% satisfaction guarantee on all our services. If you're not completely happy with the results, we'll return and re-clean the area at no additional charge. Your satisfaction is our top priority, and we stand behind every job we complete."
    },
    {
        question: "Can you clean area rugs?",
        answer: "Absolutely! We clean all types of area rugs, from synthetic to delicate wool and silk. Depending on the rug type and condition, we can clean it on-site or take it to our facility for more thorough treatment. We'll inspect your rug and recommend the best cleaning method to preserve its beauty and integrity."
    }
];

// Load data function - now just renders since data is embedded
function loadData() {
    console.log('Rendering services...');
    renderServices();
    console.log('Services rendered');
    
    console.log('Rendering testimonials...');
    renderTestimonials();
    console.log('Testimonials rendered');
    
    console.log('Rendering FAQ...');
    renderFAQ();
    console.log('FAQ rendered');
    
    // Initialize animations and counters
    setTimeout(() => {
        console.log('Initializing animations...');
        observeElements();
        initCounters();
        console.log('All initialized!');
    }, 100);
}

// ===========================
// Render Functions
// ===========================
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = servicesData.map((service, index) => `
        <div class="service-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
    
    observeElements();
}

function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;
    
    testimonialsGrid.innerHTML = testimonialsData.map((testimonial, index) => {
        const initials = testimonial.name.split(' ').map(n => n[0]).join('');
        const stars = '⭐'.repeat(testimonial.rating);
        
        return `
            <div class="testimonial-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
                <div class="rating">${stars}</div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">${initials}</div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.location}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    observeElements();
}

function renderFAQ() {
    const faqContainer = document.getElementById('faqContainer');
    if (!faqContainer) return;
    
    faqContainer.innerHTML = faqData.map((faq, index) => `
        <div class="faq-item animate-on-scroll" style="animation-delay: ${index * 0.05}s">
            <div class="faq-question">
                <h3>${faq.question}</h3>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
    
    // Add click handlers for FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    observeElements();
}

// ===========================
// Navigation & Mobile Menu
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');

// Toggle mobile menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Counter Animation
// ===========================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when hero is visible
function initCounters() {
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        // Simple timeout to start counters
        setTimeout(() => {
            const counters = heroStats.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (counter.textContent === '0') {
                    animateCounter(counter);
                }
            });
        }, 500);
        
        // Also observe if supported
        if ('IntersectionObserver' in window) {
            const observerOptions = { threshold: 0.5 };
            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counters = entry.target.querySelectorAll('.stat-number');
                        counters.forEach(counter => {
                            if (counter.textContent === '0') {
                                animateCounter(counter);
                            }
                        });
                    }
                });
            }, observerOptions);
            counterObserver.observe(heroStats);
        }
    }
}

// ===========================
// Scroll Animations
// ===========================
function observeElements() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    console.log('Found', elements.length, 'elements to animate');
    
    // Simple fallback - just make everything visible
    elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
    
    // If Intersection Observer is supported, use it for smoother animations
    if ('IntersectionObserver' in window) {
        const scrollObserverOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, scrollObserverOptions);

        elements.forEach(el => scrollObserver.observe(el));
    } else {
        // If no Intersection Observer, just show everything
        elements.forEach(el => el.classList.add('visible'));
    }
}

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Back to Top Button
// ===========================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Parallax Effect
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===========================
// Service Card Hover Effect
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// ===========================
// Dynamic Year in Footer
// ===========================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

// ===========================
// Lazy Loading for Images
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Form Validation (if needed)
// ===========================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);
}

// ===========================
// Performance Optimization
// ===========================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScroll = debounce(() => {
    // Your scroll logic here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ===========================
// Interactive Elements
// ===========================
// Add ripple effect to buttons
document.querySelectorAll('.cta-btn, .phone-btn, .hero-cta').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .cta-btn, .phone-btn, .hero-cta {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Cursor Trail Effect (Optional)
// ===========================
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY });
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ===========================
// Accessibility Enhancements
// ===========================
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Add focus visible for keyboard users
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-user');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-user');
});

// ===========================
// Initialize Everything
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting initialization...');
    loadData();
    console.log('Data loaded successfully');
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// ===========================
// Service Worker (Optional for PWA)
// ===========================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// ===========================
// Error Handling
// ===========================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ===========================
// Analytics (Placeholder)
// ===========================
function trackEvent(category, action, label) {
    // Add your analytics tracking code here
    console.log('Event tracked:', { category, action, label });
}

// Track CTA clicks
document.querySelectorAll('.cta-btn, .hero-cta').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('CTA', 'Click', btn.textContent);
    });
});

// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Contact', 'Phone Click', link.textContent);
    });
});

// ===========================
// Console Welcome Message
// ===========================
console.log('%c Elite Steam & Restoration ', 'background: #4CAF50; color: white; font-size: 20px; padding: 10px;');
console.log('%c Website loaded successfully! ', 'background: #2e7d32; color: white; font-size: 14px; padding: 5px;');
console.log('Need help? Call us at (806) 555-0123');