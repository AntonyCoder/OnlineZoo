const mapImage = document.getElementById('map');
const wrapper = document.getElementById('wrapper');
const headerElem = document.getElementById('header');
const footerElem = document.getElementById('footer');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');
const mapPicture = document.querySelector('.map-bg');


let topIndent = 0;
let leftIndent = 0;

const calculateCoords = (e, elem) => {
  var box = elem.getBoundingClientRect();
  topIndent = e.pageY - box.top + pageYOffset;
  leftIndent = e.pageX - box.left + pageXOffset;
};

const moveAt = (e) => {
  if (mapImage.style.position !== "absolute") {mapImage.style.position = "absolute";}
  mapImage.style.left = e.pageX - (document.documentElement.clientWidth - mapImage.offsetWidth) / 2 - leftIndent + 'px';
  if (e.pageX >= wrapper.offsetWidth) {
    stopDrag();
  } else if (e.pageX <= 0) {
    stopDrag();
  }
  mapImage.style.top = e.pageY - 173 + 2 * pageYOffset - topIndent + 'px';
};

const stopDrag = () => {
  document.removeEventListener('mousemove', moveAt);
  document.removeEventListener('mouseup', stopDrag);
};

mapImage.addEventListener('mousedown', (e) => {

  if (mapImage.offsetWidth <= wrapper.offsetWidth && mapImage.offsetWidth <= wrapper.offsetHeight) {
    return;
  }

  calculateCoords(e, mapImage);
  moveAt(e);

  document.addEventListener('mousemove', moveAt);
  document.addEventListener('mouseup', stopDrag);
});



mapImage.ondragstart = function() {
  return false;
};

headerElem.addEventListener('mouseenter', stopDrag);
footerElem.addEventListener('mouseenter', stopDrag);

// zoomInButton.addEventListener('click', () => {
//   console.log(mapImage.offsetWidth);
//   mapImage.style.width = `${mapImage.offsetWidth * 1.25}px`;
// });

// zoomOutButton.addEventListener('click', () => {
//   console.log(mapImage.offsetWidth);
//   mapImage.style.width = `${mapImage.offsetWidth / 1.25}px`;
// });

zoomInButton.addEventListener('click', () => {
  if (mapImage.offsetWidth <= wrapper.offsetWidth * 2) {
    if (mapImage.style.position !== "absolute") {mapImage.style.position = "absolute";}
    const prevWidth = mapImage.offsetWidth;
    const prevHeight = mapImage.offsetHeight;
    mapImage.style.width = `${mapImage.offsetWidth * 1.25}px`;
    mapImage.style.height = "auto";
    console.log(mapImage.offsetWidth);
    const nextWidth = mapImage.offsetWidth;
    const nextHeight = mapImage.offsetHeight;
    const topPos = mapImage.offsetTop || 0;
    const leftPos = mapImage.offsetLeft || 0;


    mapImage.style.left = `${leftPos - ((nextWidth - prevWidth) / 2)}px`;
    mapImage.style.top = `${topPos - ((nextHeight - prevHeight) / 2)}px`;
  }
});

zoomOutButton.addEventListener('click', () => {
  if (mapImage.offsetWidth >= wrapper.offsetWidth || mapImage.offsetHeight >= wrapper.offsetHeight) {
    if (mapImage.style.position !== "absolute") {mapImage.style.position = "absolute";}
    const prevWidth = mapImage.offsetWidth;
    const prevHeight = mapImage.offsetHeight;
    mapImage.style.width = `${mapImage.offsetWidth / 1.25}px`;
    mapImage.style.height = "auto";
    const nextWidth = mapImage.offsetWidth;
    const nextHeight = mapImage.offsetHeight;
    const topPos = mapImage.offsetTop || 0;
    const leftPos = mapImage.offsetLeft || 0;


    mapImage.style.left = `${leftPos + ((prevWidth - nextWidth) / 2)}px`;
    mapImage.style.top = `${topPos + ((prevHeight - nextHeight) / 2)}px`;

    if (mapImage.offsetWidth <= wrapper.offsetWidth && mapImage.offsetHeight <= wrapper.offsetHeight) {
      mapImage.style.width = `${wrapper.offsetWidth}px`;
      mapImage.style.height = "auto";
      mapImage.style.top = `${(wrapper.offsetHeight - mapImage.offsetHeight) / 2}px`;
      mapImage.style.left = '0px';
      if (mapImage.offsetHeight >= wrapper.offsetHeight) {
        mapImage.style.height = `${wrapper.offsetHeight}px`;
        mapImage.style.width = 'auto';
        mapImage.style.top = '0px';
        mapImage.style.left = `${(wrapper.offsetWidth - mapImage.offsetWidth) / 2}px`;
      }
    }
  }
});