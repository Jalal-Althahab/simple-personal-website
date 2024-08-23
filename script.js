
let slideIndex = 0;
let startX;

showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

const slideshowContainer = document.getElementById('slideshow-container');

slideshowContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

    slideshowContainer.addEventListener('touchmove', (e) => {
    if (!startX) return;
    let moveX = e.touches[0].clientX;
    let diffX = startX - moveX;

    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            plusSlides(1); // Swipe left
        } else {
            plusSlides(-1); // Swipe right
        }
        startX = null; // Reset startX after swipe
    }
});

slideshowContainer.addEventListener('touchend', () => {
    startX = null;
});
