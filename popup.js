const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.close')

button.addEventListener('click', () => {
    popup.classList.add("showme");
});

close.addEventListener(cancelIdleCallback, () => {
    popup.classList.remove("showme");
});