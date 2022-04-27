window.onload = main;

function main() {
    const popup = document.querySelector('.register');
    const navbtn = document.querySelector('.menu__button');
    const topbtn = document.querySelector('.top__button');
    const close = document.querySelector('.register__close-button');
    const overlayDiv = document.createElement('div');

    const selectActivityContainer = document.querySelector('.select-container');
    const selectActivityInput = document.getElementById('select-activity');
    const selectActivityMenu = document.querySelector('.select-activity__menu');

    overlayDiv.classList.add('overlay');
    overlayDiv.addEventListener('click', onPopupClose);

    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.navigation');

    menuBtn.addEventListener('click', function()
    {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active')
    })


    selectActivityInput.addEventListener('click', function(ev)
    {
        selectActivityContainer.classList.toggle('expanded');
        updateOptions()
    })

    selectActivityMenu.addEventListener('click', function(ev)
    {
        const value = ev.target.dataset.activity;
        if (value)
        {
            selectActivityInput.value = value
        }
        selectActivityContainer.classList.remove('expanded')
    })

    const selectActivityMenuOptions = document.querySelectorAll('.select-activity__menu_option');

    function updateOptions()
    {
        const currentValue = selectActivityInput.value
        selectActivityMenuOptions.forEach(option =>
        {
            if (currentValue === option.dataset.activity)
            {
                option.classList.add('option__checked')
            }
            else
            {
                option.classList.remove('option__checked')
            }
        })
    }

    function onClick()
    {
        document.body.appendChild(overlayDiv);
        popup.classList.add('show');
        document.body.style.overflow = "hidden";
    }

    function onPopupClose()
    {
        document.body.removeChild(overlayDiv);
        popup.classList.remove('show');
        document.body.style.overflow = "";
    }

    navbtn.addEventListener('click', onClick);
    topbtn.addEventListener('click', onClick);


    close.addEventListener('click', function () {
        document.body.removeChild(overlayDiv);
        popup.classList.remove('show');
        document.body.style.overflow = "";
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.body.removeChild(overlayDiv);
            popup.classList.remove('show');
            document.body.style.overflow = "";
        }
    });
}
