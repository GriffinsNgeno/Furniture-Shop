AOS.init();
document.addEventListener('DOMContentLoaded', function () {
    const bars = document.getElementById('bars');
    const menu = document.getElementById('menu');

    bars.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

   
    const menuLinks = document.querySelectorAll('.menu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('active'); 
        });
    });
});

let swiper = new Swiper('.mySwiper', {
    loop: true,  
    navigation: {
        nextEl: '.next',  
        prevEl: '.prev',  
    },
    pagination: {
        el: '.swiper-pagination',  
        clickable: true,
    },
    autoplay: {
        delay: 3000,  
        disableOnInteraction: false,  
    }
});
