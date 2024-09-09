var slider = document.querySelector('#slider');
var slideArray = Array.prototype.slice.call(slider.children);
var btnNext = document.querySelector('#btn-next');
var btnPrev = document.querySelector('#btn-prev');
var position = 0;
btnNext.onclick = function () {
    console.log('Next');
    slideArray[position].classList.add('hidden');
    position = (position + 1) % slideArray.length;
    slideArray[position].classList.remove('hidden');
};
btnPrev.onclick = function () {
    console.log('Prev');
    slideArray[position].classList.add('hidden');
    position = (position - 1 + slideArray.length) % slideArray.length;
    slideArray[position].classList.remove('hidden');
};
