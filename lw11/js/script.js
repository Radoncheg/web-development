window.onload = main;

function main() {
  var start = null;
  let isOpenPopup = true;
  const popup = document.querySelector('.register');
  const navbtn = document.querySelector('.menu__button');
  const topbtn = document.querySelector('.top__button');
  const close = document.querySelector('.register__close-button');
  const overlayDiv = document.createElement('div');
  const selectActivityMenuOptions = document.querySelectorAll('.select-activity__menu_option');
  const selectActivityContainer = document.querySelector('.select-container');
  const selectActivityInput = document.getElementById('select-activity');
  const selectActivityMenu = document.querySelector('.select-activity__menu');
  const form = document.getElementById('register');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const activityInput = document.getElementById('select-activity');
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.navigation');

  overlayDiv.classList.add('overlay');
  overlayDiv.addEventListener('click', onPopupClose);

  function showPopup(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    popup.style.visibility = "visible";
    scalePopupWindow = 0.5;
    popup.style.transform = "scale(" + scalePopupWindow + ")";
    requestAnimationFrame(openPopupAnimation);
  }

  function openPopupAnimation() {
    const step = 0.05;
    scalePopupWindow += step;
    popup.style.transform = "scale(" + scalePopupWindow + ")";
    if (scalePopupWindow < 1 && isOpenPopup) {
      requestAnimationFrame(openPopupAnimation)
    }   
  }
   
  function closePopupAnimation() {
    isOpenPopup = true;
    const step = 0.05;
    const input = document.querySelector('input');
    scalePopupWindow -= step;
    popup.style.transform = "scale(" + scalePopupWindow + ")";
    if (scalePopupWindow > 0.5) {
      requestAnimationFrame(closePopupAnimation)
    }
    else {
      popup.style.visibility = "hidden";
      popup.classList.remove('fatal-error');
      document.querySelectorAll('input').forEach(el=>el.value = '');
      document.getElementById('agreement').checked = false;
      nameInput.classList.remove('input-error');
      emailInput.classList.remove('input-error');
      activityInput.classList.remove('input-error'); 
      if (isOpenPopup == true) {
        document.body.removeChild(overlayDiv);
      }
    }
  }

  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active')
  })

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')
    const email = formData.get('email')
    const activities = formData.get('activities')
    const agreement = formData.get('agreement')
    const newUser = {name, email, activities, agreement: !!agreement};
    if (validateValues(newUser)) {
      sendUserData(newUser);
    }
  })

  async function sendUserData(newUser) {
    const formData = new FormData();
    formData.append('name', newUser.name)
    formData.append('email', newUser.email)
    formData.append('activities', newUser.activities)
    formData.append('agreement', newUser.agreement)
    let options = {
      method: 'POST',
      body: formData
    }
    try {        
      const response = await fetch("saveSurvey.php", options);
      if (response.status !== 200) {
        popup.classList.add('fatal-error');
        response.message = 'Directory does not exist';
        console.log('Error! ' + response.status + ' ' + response.message);
      }
      else {
        document.body.style.overflow = "";
        requestAnimationFrame(closePopupAnimation);
      }
    } catch (e) {
      console.log(e)
      }        
  }

  function validateValues (values) {
    let hasError = false
    if (isValidName(values.name)) {
      nameInput.classList.remove('input-error');
    } 
    else {
      nameInput.classList.add('input-error');
      hasError = true
    }
    if (isValidEmail(values.email)) {
      emailInput.classList.remove('input-error');
    } 
    else {
      emailInput.classList.add('input-error');
      hasError = true 
    }
    if (!values.activities) {
      activityInput.classList.add('input-error');
      hasError = true
    }
    else {
      activityInput.classList.remove('input-error'); 
    }
    return !hasError
  }

  function isValidEmail(email) {
    let regexp = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
    return regexp.test(email);
  }

  function isValidName(name) {
    let regexp = new RegExp("^[A-Za-zА-Яа-яЁё\s]+$");
    return regexp.test(name);
  }

 
    
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
      }
      else {
        option.classList.remove('option__checked')
      }
    })
  }

  function onClick() {
    document.body.appendChild(overlayDiv);
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(showPopup);
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
      isOpenPopup = false;
      requestAnimationFrame(closePopupAnimation);
    }
  });
}

