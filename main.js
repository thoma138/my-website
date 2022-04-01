
const body = document.querySelector('body');
const imgContainer = document.createElement('div')

function displayImg(imgUrl, elt) {

    body.appendChild(imgContainer);

    imgContainer.innerHTML = `<img src='${imgUrl}'>`;

    imgContainer.classList.add('displayMe');

    imgContainer.style.top = (elt.offset + 5) + 'px';

    imgContainer.style.left = elt.offsetLeft + 'px';
    
    let difference = document.documentElement.clientWidth - elt.offsetLeft;


}

function removeImg() {

    imgContainer.style.animation = 'fadeOut 8s';

    setTimeout(() => {
        body.removeChild(imgContainer);
    }, 750);
}