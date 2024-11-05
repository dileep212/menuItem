    // Smooth scrolling when clicking on navigation links with class selector
    document.querySelectorAll('a[href^="."]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetClass = this.getAttribute('href').substring(1);
            const targetElement = document.querySelector(targetClass);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
