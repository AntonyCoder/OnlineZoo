const burgerBtn = document.querySelector('.burger-btn');
const burgerBtnClose = document.querySelector('.burger-btn__close');
const burgerMenu = document.querySelector('.burger-menu');

const openBurgerMenu = () => {
  burgerMenu.classList.add('burger-menu__active');
};

const closeBurgerMenu = () => {
  burgerMenu.classList.remove('burger-menu__active');
};

burgerBtn.addEventListener('click', openBurgerMenu);
burgerBtnClose.addEventListener('click', closeBurgerMenu);