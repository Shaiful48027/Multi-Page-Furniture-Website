let closes = document.querySelector('#closer');

closes.onclick = ()=> {
    closes.style.display = 'none';
    navbar.classList.remove('active');
    cart-btn.classList.remove('active');
    loginForm.classList.remove('active');
};


let navbar = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = 'block';
    navbar.classList.add('active');
};