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

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });