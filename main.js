// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', () => {
    // Remove preloader
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1500);

    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('bg-transparent', 'py-4');
            navbar.classList.add('bg-white/95', 'dark:bg-brand-dark/95', 'backdrop-blur-md', 'shadow-md', 'py-3');
            // Change text color on scroll if not dark mode
            if (!document.documentElement.classList.contains('dark')) {
                navbar.querySelectorAll('.text-white:not(.bg-brand-gold)').forEach(el => {
                    el.classList.remove('text-white');
                    el.classList.add('text-gray-800');
                });
            }
        } else {
            navbar.classList.add('bg-transparent', 'py-4');
            navbar.classList.remove('bg-white/95', 'dark:bg-brand-dark/95', 'backdrop-blur-md', 'shadow-md', 'py-3');
            // Revert text color
            if (!document.documentElement.classList.contains('dark')) {
                navbar.querySelectorAll('.text-gray-800').forEach(el => {
                    el.classList.add('text-white');
                    el.classList.remove('text-gray-800');
                });
            }
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Update icon
            const icon = themeToggle.querySelector('i');
            if (isDark) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });

        // Check local storage for theme
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    }
});
