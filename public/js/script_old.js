const slider = document.querySelector('#slider');
const slideArray = Array.from(slider.children);

const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let position = 0;

btnNext.onclick = function() {
  console.log('Next');

  slideArray[position].classList.add('hidden');
  position = (position + 1) % slideArray.length;
  slideArray[position].classList.remove('hidden');
};

btnPrev.onclick = function() {
  console.log('Prev');

  slideArray[position].classList.add('hidden');
  position = (position - 1 + slideArray.length) % slideArray.length;
  slideArray[position].classList.remove('hidden');
};