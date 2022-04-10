let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navigation');

menuBtn.addEventListener('click', function()
{
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active')
})
