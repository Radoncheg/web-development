window.onload = main;

function main() {
    var start = null;
    const popup = document.querySelector('.register');
    const navbtn = document.querySelector('.menu__button');
    const topbtn = document.querySelector('.top__button');
    const close = document.querySelector('.register__close-button');
    const overlayDiv = document.createElement('div');
    const selectActivityMenuOptions = document.querySelectorAll('.select-activity__menu_option');
    const selectActivityContainer = document.querySelector('.select-container');
    const selectActivityInput = document.getElementById('select-activity');
    const selectActivityMenu = document.querySelector('.select-activity__menu');
    overlayDiv.classList.add('overlay');
    overlayDiv.addEventListener('click', onPopupClose);

    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.navigation');

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        popup.style.visibility = "visible";
        scalePopupWindow = 0.5;
        popup.style.transform = "scale(" + scalePopupWindow + ")";
        requestAnimationFrame(openPopupAnimation);
      }

    function openPopupAnimation() {
        let step = 0.05;
        scalePopupWindow += step;
        popup.style.transform = "scale(" + scalePopupWindow + ")";
        if (scalePopupWindow < 1) {
        requestAnimationFrame(openPopupAnimation)
        }
    }

    function closePopupAnimation(){
        let step = 0.05;
        scalePopupWindow -= step;
        popup.style.transform = "scale(" + scalePopupWindow + ")";
        if (scalePopupWindow > 0.5) {
        requestAnimationFrame(closePopupAnimation)
        }
        else {
        popup.style.visibility = "hidden";
        document.body.removeChild(overlayDiv);
        }
    }

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active')
    })


    selectActivityInput.addEventListener('click', function (ev) {
        selectActivityContainer.classList.toggle('expanded');
        updateOptions()
    })

    selectActivityMenu.addEventListener('click', function (ev) {
        const value = ev.target.dataset.activity;
        if (value) {
            selectActivityInput.value = value
        }
        selectActivityContainer.classList.remove('expanded')
    })

    function updateOptions() {
        const currentValue = selectActivityInput.value
        selectActivityMenuOptions.forEach(option => {
            if (currentValue === option.dataset.activity) {
                option.classList.add('option__checked')
            } else {
                option.classList.remove('option__checked')
            }
        })
    }

    function onClick() {
        document.body.appendChild(overlayDiv);
        document.body.style.overflow = "hidden";
        window.requestAnimationFrame(step);
    }

    function onPopupClose() {
        document.body.style.overflow = "";
        requestAnimationFrame(closePopupAnimation);
    }

    navbtn.addEventListener('click', onClick);
    topbtn.addEventListener('click', onClick);


    close.addEventListener('click', function () {
        document.body.style.overflow = "";
        requestAnimationFrame(closePopupAnimation);
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.body.style.overflow = "";
            popup.style.visibility = "hidden";
            requestAnimationFrame(closePopupAnimation);
        }
    });
}

