document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('[data-carousel="static"]');
    const carouselItems = carousel.querySelectorAll('[data-carousel-item]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    let currentIndex = 0;

    function showItem(index) {
        carouselItems.forEach(item => {
            item.classList.add('hidden');
        });
        carouselItems[index].classList.remove('hidden');
        carouselItems[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showItem(currentIndex);
    }
        function simulateNextClick() {
        nextButton.click();
    }

    setInterval(simulateNextClick, 4000);

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});

const arrow = document.querySelector('#arrow')

    function toggleArrowVisibility() {
        if (window.scrollY > 200) { // Adjust the threshold (100 in this example) as needed
            arrow.classList.add('hidden');
        } else {
            arrow.classList.remove('hidden');
        }
    }


    // Add a scroll event listener
    window.addEventListener('scroll', toggleArrowVisibility);




    document.addEventListener('DOMContentLoaded', function() {
        const burgerMenu = document.querySelector('.burger-menu');
        const navLinks = document.querySelector('.nav-links');

        burgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('hidden');
        });
    });

