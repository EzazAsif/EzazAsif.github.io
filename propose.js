
document.addEventListener('DOMContentLoaded', function() {
    let counter = 0; // Initialize counter to keep track of button clicks
    const revealButton = document.getElementById('reveal-button');
    const hiddenMessage = document.getElementById('hidden-message');
    const heartContainer = document.getElementById('heart-container');
    const messages = [
        "I'm truly sorry for my mistakes. I know I may have hurt you, and it's the last thing I ever wanted to do. You mean the world to me, and I want nothing more than to see you happy, even if it takes time for us to heal together.",
        "I never meant to hurt you, and I want you to know how much I love you. You bring so much joy and warmth into my life, and I regret the times I’ve let you down. Please find it in your heart to forgive me—I will strive to be the partner you deserve.",
        "You are my everything, and it breaks my heart to know that I've caused you pain. My love for you is endless, and I promise that I will do everything in my power to be the person who always makes you feel safe, happy, and cherished. Please let me show you how much you mean to me.",
        "I regret the pain I've caused you, and I wish I could take it all back. I want you to know that I’m fully committed to making things right, to listen, to change, and to make you feel as loved as you truly are. You are my heart, and your happiness means everything to me.",
        "My love, I know I've made mistakes, and for that, I am truly sorry. I hope you can see my genuine efforts to make things right and to become a better version of myself for you. I love you deeply, and I will keep doing whatever it takes to make you feel loved and secure again.",
        "I can't express enough how sorry I am for everything that happened. You are the best part of my life, and I want to spend every day proving my love to you. Please forgive me for the hurt I have caused, and let’s work together to heal. I love you with all my heart.",
        "No words can capture how deeply sorry I am for hurting you. You are my heart, my everything, and I hate that I’ve caused you pain. I want you to know that I am here for you, ready to put in the effort and time needed to regain your trust and show you the love you deserve.",
        "I wish I could go back in time and undo the hurtful things I did, but all I can do now is sincerely apologize and show you how much you mean to me. You are the love of my life, and I promise to cherish you, to support you, and to always be by your side through everything.",
        "My love for you is deeper than words can express, and it breaks my heart knowing I hurt you. Please believe that I will spend every moment trying to be the person who brings you nothing but love and joy. I am truly sorry, and I will always work to be better for you.",
        "I know I let you down, and I regret that deeply. I can’t imagine my life without you because you are the most important person to me. I promise that I will learn from this, grow, and show you every single day how much you mean to me. Please forgive me, and let’s rebuild our love together."
    ];
    
    let currentMessageIndex = 0;
    let intervaltime = 10000; // Default interval time for message display
    let messageInterval; // Variable to hold the message interval

    // Event listener for the reveal button
    revealButton.addEventListener('click', function() {
        if (counter === 0) {
            hiddenMessage.classList.remove('hidden');
            revealButton.innerHTML = "You Are Amazing! 🌸";
            revealButton.classList.add('bg-pink-700');
            
            // Shower hearts
            showerHearts();

            // Change button text after 5 seconds
            setTimeout(() => {
                revealButton.innerHTML = "Now click this again baby girl";
            }, 5000);
            counter = 1; // Update counter
        } else {
            revealButton.innerHTML = "Haha you touched it";
            // Update messages for the second click
            messages.splice(0, messages.length, "OOH", "You touch my tralalaa", "My bing bing bonggg"); 
            showerHearts(); // Shower hearts on button click

            // Change interval time and reset message interval
            intervaltime = 4000; // New interval for message display
            resetMessageInterval(); // Reset message interval
            counter = 0; // Reset counter
        }
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

    // Function to change the text
    function changeText() {
        const changeElement = document.querySelector('.change');
        if (changeElement) {
            changeElement.style.transition = 'opacity 0.5s ease-in-out';
            changeElement.style.opacity = '0';

            setTimeout(() => {
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                changeElement.innerText = messages[currentMessageIndex];
                changeElement.style.opacity = '1';
            }, 500);
        }
    }

    function resetMessageInterval() {
        // Clear existing interval if it exists
        if (messageInterval) {
            clearInterval(messageInterval);
        }
        // Set a new interval for changing messages
        messageInterval = setInterval(changeText, intervaltime);
    }

    // Initial message interval
    messageInterval = setInterval(changeText, intervaltime);
});
