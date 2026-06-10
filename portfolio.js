/* ==========================================================================
   Jeevan Gowda Portfolio – JavaScript
   Handles: Navbar, Cursor, Scroll, AOS, Counters, Skills, Projects, Form, Toast
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ── 1. SCROLL PROGRESS BAR ──────────────────────────────────────── */
    const progressBar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const total  = document.documentElement.scrollHeight - window.innerHeight;
        const pct    = total > 0 ? (window.scrollY / total) * 100 : 0;
        progressBar.style.width = pct + '%';
    }, { passive: true });


    /* ── 2. CUSTOM CURSOR ────────────────────────────────────────────── */
    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let ringX = 0, ringY = 0, dotX = 0, dotY = 0;

    document.addEventListener('mousemove', e => {
        dotX = e.clientX; dotY = e.clientY;
        dot.style.left  = dotX + 'px';
        dot.style.top   = dotY + 'px';
    });

    // Ring follows with slight lag
    function animateRing() {
        ringX += (dotX - ringX) * 0.12;
        ringY += (dotY - ringY) * 0.12;
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Expand ring on interactive elements
    document.querySelectorAll('a, button, .skill-card, .project-card, .repo-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.style.width  = '56px';
            ring.style.height = '56px';
            ring.style.borderColor = 'rgba(59,130,246,0.6)';
        });
        el.addEventListener('mouseleave', () => {
            ring.style.width  = '36px';
            ring.style.height = '36px';
            ring.style.borderColor = 'rgba(139,92,246,0.5)';
        });
    });


    /* ── 3. NAVBAR SCROLL STYLE ──────────────────────────────────────── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });


    /* ── 4. ACTIVE NAV LINK ON SCROLL ───────────────────────────────── */
    const sections  = document.querySelectorAll('section[id]');
    const navItems  = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));


    /* ── 5. MOBILE MENU ──────────────────────────────────────────────── */
    const hamburger   = document.getElementById('hamburger');
    const mobileMenu  = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    document.querySelectorAll('.mob-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });


    /* ── 6. SMOOTH SCROLL FOR ALL ANCHOR LINKS ───────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.scrollY - 72;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });


    /* ── 7. BACK TO TOP BUTTON ───────────────────────────────────────── */
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    /* ── 8. AOS (ANIMATE ON SCROLL) – custom lightweight impl ──────── */
    const aosElements = document.querySelectorAll('[data-aos]');
    const aosObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, parseInt(delay));
                aosObs.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

    aosElements.forEach(el => aosObs.observe(el));


    /* ── 9. ANIMATED COUNTER STATS ───────────────────────────────────── */
    function animateCounter(el, target, duration = 1800) {
        let start = 0;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(step);
            else el.textContent = target;
        };
        requestAnimationFrame(step);
    }

    const counters = document.querySelectorAll('.stat-num[data-count]');
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target, parseInt(entry.target.getAttribute('data-count')));
                counterObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });
    counters.forEach(c => counterObs.observe(c));


    /* ── 10. SKILL BARS ANIMATION ────────────────────────────────────── */
    const skillFills = document.querySelectorAll('.skill-fill');
    const skillObs   = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar   = entry.target.closest('.skill-bar');
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    entry.target.style.width = width + '%';
                }, 200);
                skillObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    skillFills.forEach(f => skillObs.observe(f));


    /* ── 11. PROJECT FILTER TABS ─────────────────────────────────────── */
    const filterBtns   = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            let visibleIndex = 0;

            projectCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                const show = filter === 'all' || cat === filter;

                if (show) {
                    card.classList.remove('hidden');
                    card.style.animationDelay = (visibleIndex * 0.07) + 's';
                    card.style.animation = 'none';
                    // Force reflow
                    void card.offsetWidth;
                    card.style.animation = '';
                    visibleIndex++;
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });


    /* ── 12. CONTACT FORM ────────────────────────────────────────────── */
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn   = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate
            const fname   = document.getElementById('fname').value.trim();
            const lname   = document.getElementById('lname').value.trim();
            const email   = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!fname || !lname || !email || !subject || !message) {
                showToast('Please fill in all required fields.', 'error');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showToast('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate sending
            const textEl    = submitBtn.querySelector('.btn-text-inner');
            const loadingEl = submitBtn.querySelector('.btn-loading');
            textEl.style.display    = 'none';
            loadingEl.style.display = 'inline-flex';
            submitBtn.disabled      = true;

            setTimeout(() => {
                textEl.style.display    = 'inline-flex';
                loadingEl.style.display = 'none';
                submitBtn.disabled      = false;
                formSuccess.style.display = 'flex';
                contactForm.reset();
                showToast('✅ Message sent! I\'ll reply soon.', 'success');

                setTimeout(() => { formSuccess.style.display = 'none'; }, 6000);
            }, 2000);
        });
    }


    /* ── 13. TOAST NOTIFICATIONS ─────────────────────────────────────── */
    function showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        const toast     = document.createElement('div');
        toast.className = `toast ${type}`;

        const icon = type === 'success'
            ? '<i class="fa-solid fa-circle-check"></i>'
            : '<i class="fa-solid fa-circle-exclamation"></i>';

        toast.innerHTML = `${icon}<span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            toast.style.opacity    = '0';
            toast.style.transform  = 'translateX(-20px)';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // Expose globally (for inline calls if needed)
    window.showToast = showToast;


    /* ── 14. RESUME BUTTON PLACEHOLDER FEEDBACK ──────────────────────── */
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            // If no actual resume file, show a friendly toast instead
            // Remove this handler once you add a real assets/resume.pdf
            if (resumeBtn.getAttribute('href') === 'assets/resume.pdf') {
                // Allow default download attempt but also notify
                showToast('Resume download started! Add your PDF to assets/resume.pdf', 'success');
            }
        });
    }


    /* ── 15. TYPING EFFECT – Hero intro text ─────────────────────────── */
    const phrases = [
        'AI & ML Student',
        'Web Developer',
        'Python Programmer',
        'Problem Solver',
        'Open Source Enthusiast'
    ];
    const typingTarget = document.querySelector('.hero-title-wrapper');

    if (typingTarget) {
        const staticPart    = typingTarget.querySelector('.hero-title-static');
        const highlightPart = typingTarget.querySelector('.hero-title-highlight');

        let phraseIdx  = 0;
        let charIdx    = 0;
        let isDeleting = false;

        function typeLoop() {
            const current = phrases[phraseIdx];

            if (isDeleting) {
                charIdx--;
            } else {
                charIdx++;
            }

            highlightPart.textContent = current.substring(0, charIdx);

            let delay = isDeleting ? 60 : 110;

            if (!isDeleting && charIdx === current.length) {
                delay = 2200; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                phraseIdx  = (phraseIdx + 1) % phrases.length;

                // Update static part context
                if (phrases[phraseIdx].includes('Developer') || phrases[phraseIdx].includes('Programmer') || phrases[phraseIdx].includes('Enthusiast')) {
                    staticPart.textContent = 'Aspiring ';
                } else if (phrases[phraseIdx].includes('Solver')) {
                    staticPart.textContent = 'Creative ';
                } else {
                    staticPart.textContent = 'B.Tech AI & ML Student at ';
                }
                delay = 400;
            }

            setTimeout(typeLoop, delay);
        }

        // Start typing after a brief pause
        setTimeout(typeLoop, 1000);
    }


    /* ── 16. PARTICLE ANIMATION ENHANCE – Parallax on mouse move ────── */
    const heroSection = document.getElementById('home');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const particles = document.querySelectorAll('.particle');
            const cx = window.innerWidth  / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;

            particles.forEach((p, i) => {
                const depth  = (i % 3 + 1) * 8;
                p.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
            });
        });
    }

    console.log('%c🚀 Jeevan Gowda Portfolio Loaded!', 'background:#3b82f6;color:white;font-size:14px;padding:8px 16px;border-radius:4px;font-weight:bold;');
    console.log('%c👋 Hey developer! Feel free to connect: https://github.com/jeevangowdajeevan763-git', 'color:#8b5cf6;font-size:12px;');
});
