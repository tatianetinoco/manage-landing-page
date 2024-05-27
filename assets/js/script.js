const emailInput = document.getElementById('email');
const emailBtn = document.getElementById('btn');
const message = document.getElementsByClassName('errorMessage')[0];

emailBtn.addEventListener('click', validaEmail);

function validaEmail(event){
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    console.log(emailValue)
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        message.innerText = "";
        emailInput.value = "";
        message.classList.remove('error');
        emailInput.classList.remove('errorInput');
        message.classList.add('success');
        message.innerText = "Email sent successfully!";
        return true;
    } else {
        message.innerText = "Please Insert a Valid Email";
        message.classList.add('error');
        emailInput.classList.add('errorInput');
        return false;
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const checkboxMenu = document.getElementById('checkbox-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const headerMenu = document.querySelector('.header__menu');

    checkboxMenu.addEventListener('change', function () {
        if (checkboxMenu.checked) {
            menuOverlay.style.display = 'block';
            headerMenu.style.display = 'block';
        } else {
            menuOverlay.style.display = 'none';
            headerMenu.style.display = 'none';
        }
    });

    menuOverlay.addEventListener('click', function () {
        checkboxMenu.checked = false;
        menuOverlay.style.display = 'none';
        headerMenu.style.display = 'none';
    });
});

