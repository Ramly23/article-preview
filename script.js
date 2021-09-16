const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
const arrow = document.querySelector('.arrow');
const shareContainer = document.querySelector('.share-container');

btn.addEventListener('click',function() {
    if(container.classList.contains('open')) {
        container.classList.remove('open');
        shareContainer.classList.remove('show');
        arrow.classList.remove('show');
    }
    else {
        container.classList.add('open');
        shareContainer.classList.add('show');
        arrow.classList.add('show');
    }
});