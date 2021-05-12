// выезжающий aside 
const sidebarBtn = document.querySelector('.sidebar-btn');
const aside = document.querySelector('.sidebar');

function openSidebar(){
    if(sidebarBtn.classList.contains('sidebar-btn__active')){
        sidebarBtn.classList.remove('sidebar-btn__active');
        aside.classList.remove('sidebar-active');
    } else {
        sidebarBtn.classList.add('sidebar-btn__active');
        aside.classList.add('sidebar-active');
    }
}

sidebarBtn.addEventListener('click', openSidebar);

// блоки information

const buttonsInfo = document.querySelectorAll('.animal-info-up_btn');
const animalText = document.querySelectorAll('.animal-info-text');
const animalItem = document.querySelectorAll('.animal-full-info-item');

animalItem.forEach((item, i) => {
  item.addEventListener('click', function() {
      if(animalItem[i].style.height != '61px'){
          animalText[i].style.display = 'none';
          animalItem[i].style.padding = '8px 20px';
          animalItem[i].style.height = '61px';
          buttonsInfo[i].style.transform = 'rotate(270deg)';
       } else {
          animalText[i].style.display = 'block';
          animalItem[i].style.padding = '20px';
          animalItem[i].style.height = '142px';
          buttonsInfo[i].style.transform = 'rotate(90deg)';
       }
  });
});

// замена видео 

const videos = document.querySelectorAll('.animal-live2');
const videoMain = document.querySelector('.animal-live1');
const videoWrap = document.querySelectorAll('.animal-video__cover');


videoWrap.forEach((item) => {
  item.addEventListener('click', function() {
      let videoMainSrc = videoMain.src;
      let video = item.nextElementSibling;
      let videoSrc = item.nextElementSibling.src;
      video.setAttribute('src', videoMainSrc);
      videoMain.setAttribute('src', videoSrc);
  });
});
