
const body = document.querySelector('body');
const imgContainer = document.createElement('div')

function displayImg(imgUrl, elt) {

    body.appendChild(imgContainer);

    imgContainer.innerHTML = `<img src='${imgUrl}'>`;

    imgContainer.classList.add('displayMe');

    imgContainer.style.top = (elt.offset + 40) + 'px';

    imgContainer.style.left = elt.offsetLeft + 'px';
    
    let difference = document.documentElement.clientWidth - elt.offsetLeft;

    if(difference < 250) {

        imgContainer.style.right = '20px';
        imgContainer.style.left = 'auto';
        
    } else {

        imgContainer.style.left = elt.offsetLeft + 'px';
    }
    
    imgContainer.style.animation = 'fadeIn .8s';
}

function removeImg() {

    imgContainer.style.animation = 'fadeOut .8s';

    setTimeout(() => {
        body.removeChild(imgContainer);
    }, 750);
}