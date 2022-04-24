let popup = document.querySelector('.register');
let navbtn = document.querySelector('.menu__button');
let topbtn = document.querySelector('.top__button');
let page = document.querySelector('.page');
let close = document.querySelector('.register__close-button');


navbtn.addEventListener('click', function()
{
    popup.classList.toggle('show');
    page.classList.toggle('fogging');
})

close.addEventListener('click', function()
{
    popup.classList.toggle('show');
    page.classList.toggle('fogging');
})

topbtn.addEventListener('click', function()
{
    popup.classList.toggle('show');
    page.classList.toggle('fogging');
})

document.addEventListener('keypress', function (e) {
    if (e.key === 'Escape') {
        popup.classList.toggle('show');
        page.classList.toggle('fogging');
        }
});