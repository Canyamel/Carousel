const slider: HTMLElement = document.querySelector('#slider');
const slideArray: HTMLElement[] = Array.prototype.slice.call(slider.children);

const btnNext: HTMLElement = document.querySelector('#btn-next');
const btnPrev: HTMLElement = document.querySelector('#btn-prev');

let position: number = 0;

btnNext.onclick = function(): void {
  console.log('Next');

  slideArray[position].classList.add('hidden');
  position = (position + 1) % slideArray.length;
  slideArray[position].classList.remove('hidden');
};

btnPrev.onclick = function(): void {
  console.log('Prev');

  slideArray[position].classList.add('hidden');
  position = (position - 1 + slideArray.length) % slideArray.length;
  slideArray[position].classList.remove('hidden');
};