// الكود الخاص بالـ slideshow
let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 6000); 
}

for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('fade');
}


const fixedIcon = document.getElementById('fixedIcon');

// إظهار الأيقونات عند التحويم على أيقونة WhatsApp
fixedIcon.addEventListener('mouseenter', () => {
    socialIcons.classList.add('show'); // إظهار الأيقونات
});

// إخفاء الأيقونات عند الخروج من التحويم
fixedIcon.addEventListener('mouseleave', () => {
    socialIcons.classList.remove('show'); // إخفاء الأيقونات
});
// إظهار الأيقونات عند التحويم على أيقونة WhatsApp
fixedIcon.addEventListener('mouseenter', () => {
    socialIcons.classList.add('show'); // إظهار الأيقونات
    setTimeout(() => {
        socialIcons.style.opacity = 1; // جعلها مرئية
    }, 0); // ابدأ بإظهار الأيقونات فوراً
});
