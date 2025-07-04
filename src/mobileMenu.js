document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
        
        if (isOpen) {
            // Show menu
            mobileMenu.classList.remove('hidden');
            // Use setTimeout to ensure the transition happens after display is set
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0', 'scale-95');
                mobileMenu.classList.add('opacity-100', 'scale-100');
            }, 10);
        } else {
            // Hide menu
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            mobileMenu.classList.add('opacity-0', 'scale-95');
            // Wait for transition to finish before hiding
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 200);
        }
    };

    menuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target) && isOpen) {
            toggleMenu();
        }
    });
}); 