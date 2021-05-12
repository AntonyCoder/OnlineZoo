const Amount = document.querySelectorAll('input[type=number]');
Amount.forEach((input) => {
    const min = +input.min;
    const max = +input.max;

    input.addEventListener('input', (e) => {
        const value = +input.value;
        if (value > max) { input.value = max }
        else if (value < min) { input.value = min }
    });
});

const feedbackBtn = document.querySelector('.btn-feedback'),
      closeBtn = document.querySelectorAll('.pop-up-btn__close'),
      popUp = document.querySelector('.pop-up__feedback'),
      modalOverlay = document.querySelector('.modal-overlay'),
      submitBtn = document.querySelector('.pop-up__feedback-btn'),
      inputs = document.querySelectorAll('#input'),
      donatBtn = document.querySelector('.footer-btn'),
      popUpDonat = document.querySelector('.pop-up__donat'),
      nextBtn = document.querySelector('#next-btn'),
      donatCard = document.querySelector('.pop-up__card'),
      inputAmount = document.querySelector('input[type = number]'),
      donatBtnClose = document.querySelector('#donate-btn');

/* Открытие фидбек окна */
feedbackBtn.addEventListener('click', function (){
  popUp.classList.add('pop-up__active');
  modalOverlay.classList.add('modal-overlay__active');
  document.body.classList.add('notScroll');
});
/* Закрытие всех pop-up*/
closeBtn.forEach((btn) => {
  btn.addEventListener('click', function (){
    popUp.classList.remove('pop-up__active');
    modalOverlay.classList.remove('modal-overlay__active');
    popUpDonat.classList.remove('pop-up__active');
    donatCard.classList.remove('pop-up__active');
    document.body.classList.remove('notScroll');
    inputs.forEach((input) => {
      input.value = '';
    });
  });
});
/* затемнение фона */
modalOverlay.addEventListener('click', function (){
  popUp.classList.remove('pop-up__active');
  popUpDonat.classList.remove('pop-up__active');
  donatCard.classList.remove('pop-up__active');
  modalOverlay.classList.remove('modal-overlay__active');
  document.body.classList.remove('notScroll');
  inputs.forEach((input) => {
    input.value = '';
  });
});

submitBtn.addEventListener('click', function(){
  popUp.classList.remove('pop-up__active');
  modalOverlay.classList.remove('modal-overlay__active');
  document.body.classList.remove('notScroll');
  alert('Thank you for your feedback');
  inputs.forEach((input) => {
    input.value = '';
  });
});
/* открытие доната */
donatBtn.addEventListener('click', () => {
  popUpDonat.classList.add('pop-up__active');
  modalOverlay.classList.add('modal-overlay__active');
  document.body.classList.add('notScroll');
});

nextBtn.addEventListener('click', () => {
  if(inputAmount.value !== ''){
    donatCard.classList.add('pop-up__active');
    modalOverlay.classList.add('modal-overlay__active');
    popUpDonat.classList.remove('pop-up__active');
    inputs.forEach((input) => {
    input.value = '';
  });
  }
});

donatBtnClose.addEventListener('click', () => {
  donatCard.classList.remove('pop-up__active');
  modalOverlay.classList.remove('modal-overlay__active');
  document.body.classList.remove('notScroll');
  alert('Thank you for your donation');
});