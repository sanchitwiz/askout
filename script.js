const parentMain = document.querySelector('.main');
const parentChild = parentMain.querySelector('.container');
const heading = parentChild.querySelector('#heading');
const sigh = parentChild.querySelector('.sigh');
const image1 = sigh.querySelector('img');

let flag = false;
const areaWidth = window.innerWidth - 600;
const areaHeight = window.innerHeight;

const noButtonFirst = document.querySelector('#no');
const yesButton = document.querySelector('#yes');

noButtonFirst.addEventListener('click', () => {
    image1.src = "soilder_cat.gif";
    const mainBody = document.body
    mainBody.style.backgroundImage = 'url("thunderstrom.gif")';
    mainBody.style.backgroundSize = 'cover';
    mainBody.style.backgroundPosition = 'center';
    mainBody.style.backgroundRepeat = 'no-repeat';
    // mainBody.style.filter = 'brightness(0.5)';
    heading.style.color = '#fff';
    heading.innerHTML = 'Pleaseeeee !!!!';
    flag = true;

    if (flag) {
        const noButtonSecond = document.querySelector('#no');
        noButtonSecond.addEventListener('mouseover', () => {
            let randomX = Math.floor(Math.random() * areaWidth);
            let randomY = Math.floor(Math.random() * areaHeight);
            
            // Adjust the position of the button
            noButtonSecond.style.left = randomX + 'px';
            noButtonSecond.style.top = randomY + 'px';
        });
        noButtonSecond.addEventListener('touchstart', (event) => {
            let randomX = Math.floor(Math.random() * areaWidth);
            let randomY = Math.floor(Math.random() * areaHeight);
            
            // Adjust the position of the button
            noButtonSecond.style.left = randomX + 'px';
            noButtonSecond.style.top = randomY + 'px';
            
            // Prevent the default touch behavior (e.g., scrolling)
            event.preventDefault();
        });
        
    }
});

yesButton.addEventListener('click', () => {
    image1.src = "new_chipi.gif";
    const mainBody = document.body
    mainBody.style.backgroundImage = 'url("yes_gif.gif")';
    mainBody.style.backgroundSize = 'cover';
    mainBody.style.backgroundPosition = 'center';
    mainBody.style.backgroundRepeat = 'no-repeat';
    sigh.style.paddingTop = '1px';
    heading.innerHTML = 'Thankyouuuu !!'
    heading.style.color = 'black';
});





