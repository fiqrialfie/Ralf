    const header = document.querySelector ('header');

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
            
            if (window.scrollY > lastScrollY && window.scrollY > 100) { 
                header.classList.add('nav-hidden');
            } 
            else if (window.scrollY < lastScrollY) {
                header.classList.remove('nav-hidden');
            }

            lastScrollY = window.scrollY;
        });