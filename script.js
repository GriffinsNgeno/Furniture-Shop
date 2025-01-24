AOS.init();
document.addEventListener('DOMContentLoaded', function () {
    const bars = document.getElementById('bars');
    const menu = document.getElementById('menu');

    // Toggle the mobile menu when the hamburger icon is clicked
    bars.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Close the mobile menu when a link is clicked
    const menuLinks = document.querySelectorAll('.menu li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('active'); // Hide the menu after clicking a link
        });
    });
});