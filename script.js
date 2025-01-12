// Cache DOM elements to avoid redundant queries
const parentMain = document.querySelector('.main');
const parentChild = parentMain.querySelector('.container');
const heading = parentChild.querySelector('#heading');
const sigh = parentChild.querySelector('.sigh');
const image1 = sigh.querySelector('img');

const noButton = document.querySelector('#no');
const yesButton = document.querySelector('#yes');
const mainBody = document.body;

// Calculate movement area dimensions
const areaWidth = window.innerWidth - 600;
const areaHeight = window.innerHeight;

// Flag to track if "no" button behavior is activated
let isNoButtonActive = false;

// Function to update button position
const randomizeButtonPosition = (button) => {
    const randomX = Math.floor(Math.random() * areaWidth);
    const randomY = Math.floor(Math.random() * areaHeight);
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
};

// Event listener for "no" button click
noButton.addEventListener('click', () => {
    image1.src = "soilder_cat.gif";
    mainBody.style.backgroundImage = 'url("thunderstrom.gif")';
    mainBody.style.backgroundSize = 'cover';
    mainBody.style.backgroundPosition = 'center';
    mainBody.style.backgroundRepeat = 'no-repeat';
    heading.innerHTML = 'Pleaseeeee !!!!';
    isNoButtonActive = true;

    // Add mouseover and touchstart listeners only once
    if (!noButton.dataset.listenersAdded) {
        noButton.addEventListener('mouseover', () => randomizeButtonPosition(noButton));
        noButton.addEventListener('touchstart', (event) => {
            randomizeButtonPosition(noButton);
            event.preventDefault(); // Prevent scrolling on touch devices
        });
        noButton.dataset.listenersAdded = true; // Mark listeners as added
    }
});

// Event listener for "yes" button click
yesButton.addEventListener('click', () => {
    image1.src = "new_chipi.gif";
    mainBody.style.backgroundImage = 'url("yes_gif.gif")';
    mainBody.style.backgroundSize = 'cover';
    mainBody.style.backgroundPosition = 'center';
    mainBody.style.backgroundRepeat = 'no-repeat';
    sigh.style.paddingTop = '1px';
    heading.innerHTML = 'Thankyouuuu !!';
    heading.style.color = 'black';
});
