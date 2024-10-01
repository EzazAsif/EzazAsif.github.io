document.addEventListener('DOMContentLoaded', function() {
    // Message reveal functionality
    const revealButton = document.getElementById('reveal-button');
    const hiddenMessage = document.getElementById('hidden-message');
    const heartContainer = document.getElementById('heart-container');

    revealButton.addEventListener('click', function() {
        hiddenMessage.classList.remove('hidden');
        revealButton.innerHTML = "You Are Amazing! 🌸";
        revealButton.classList.add('bg-pink-700');

        // Shower hearts
        showerHearts();
        document.getElementsByClassName('hui')[0].style.visibility = 'visible';
    });

    function showerHearts() {
        for (let i = 0; i < 50; i++) {
            createHeart();
        }
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Random duration between 2s and 5s
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove heart after 5 seconds
    }

    // Carousel functionality
    const slides = document.querySelector('.carousel-inner');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const dotsContainer = document.getElementById('dots-container');
    const dots = dotsContainer.getElementsByClassName('dot');
    let currentIndex = 0;

    // Set initial dot active
    dots[currentIndex].classList.add('active');

    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        dots[currentIndex].classList.add('active');
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? dots.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % dots.length;
        updateCarousel();
    });

    // Auto-slide functionality every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        updateCarousel();
    }, 5000);

    // Messages to be displayed periodically
    const messages = [
        "I'm truly sorry for my mistakes...",
        "I never meant to hurt you...",
        // Add all other messages here
    ];
    
    let currentMessageIndex = 0;

    // Function to change the text
    function changeText() {
        const changeElement = document.querySelector('.change');
        if (changeElement) {
            changeElement.innerText ="";
            changeElement.style.transition = 'opacity 0.5s ease-in-out';
            changeElement.style.opacity = '0';

            setTimeout(() => {
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                changeElement.innerText = messages[currentMessageIndex];
                changeElement.style.opacity = '1';
            }, 500);
        }
    }

    let intervaltime = 10000;
    messageinterval=setInterval(changeText, intervaltime);

    // Handle second button click
    const secondButton = document.getElementsByClassName('hui')[0];
    secondButton.addEventListener('click', function() {
        secondButton.style.visibility = 'hidden';
        const changeElement = document.querySelector('.change');
        clearInterval(messageinterval);
        changeElement.innerText ="";
        messages.splice(0, messages.length, "OOH", "You touch my tralalaa", "My bing bing bonggg"); 
        showerHearts(); // Shower hearts on button click
        intervaltime = 4000;
        setInterval(changeText, intervaltime);
        
        // Update messages
        
    });
});
