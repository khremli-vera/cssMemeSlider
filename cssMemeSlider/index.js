let images = ['img/T0.jpeg', 'img/T2.jpeg', 'img/T3.jpeg', 'img/T4.jpeg']
let phrases = ['Я это не понимаю. Мне это неинтересно', 'Сомнительно...', 'Ни-ку-да', 'Но осуждаю']
let controls = document.querySelectorAll('.slider-btn')
let imageContainer = document.querySelector('.slider-image')
let imageTitle = document.querySelector('p')


function changeButtonColor(event) {
    let element = event.target;
    for (let i = 0; i < controls.length; i++) {
        controls[i].classList.remove('active')
    }
    element.classList.add('active')
}

function changeImages() {
     imageContainer.classList.remove('img-appear');
     imageContainer.classList.add('img-disappear');
    let index;
    for (let i = 0; i < controls.length; i++) {
        if (controls[i].classList.contains('active')) { 
            index = i;

        }
    }
    imageTitle.classList.remove('img-appear');
    imageTitle.classList.add('img-disappear');
    setTimeout(() => {
    imageContainer.classList.remove('img-disappear');
    imageContainer.src = images[index]
    imageContainer.classList.add('img-appear')
    imageTitle.classList.remove('img-disappear')
    imageTitle.textContent = phrases[index]
    imageTitle.classList.add('img-appear')
}, 300);
}

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', changeButtonColor);
    controls[i].addEventListener('click', changeImages);
}