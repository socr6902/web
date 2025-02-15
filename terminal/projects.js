
        const carouselImages = document.getElementById('carouselImages');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const indicators = document.querySelectorAll('.carousel-indicators span');
        const carouselTitle = document.getElementById('carouselTitle');

        let currentIndex = 0;
        const totalImages = indicators.length;


        const titles = ["Polaris Value Fund Website", "CleanSweep Web Application", "SportSphere Web Application"];

        function updateCarousel() {
            const offset = -currentIndex * 100; 
            carouselImages.style.transform = `translateX(${offset}%)`;


            indicators.forEach(indicator => indicator.classList.remove('active'));
            indicators[currentIndex].classList.add('active');

 
            carouselTitle.textContent = titles[currentIndex];
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        });

        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                currentIndex = parseInt(indicator.getAttribute('data-index'));
                updateCarousel();
            });
        });