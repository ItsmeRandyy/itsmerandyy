const box = document.querySelector('.box');
const header = document.querySelector('header');

box.addEventListener('mousemove', e => {
    box.textContent = `x position: ${e.offsetX} | y position: ${e.offsetY}`;
});