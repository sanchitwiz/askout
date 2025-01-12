# Interactive Button Game

This is a fun and interactive web-based project where users can interact with two buttons: "Yes" and "No." The "No" button becomes increasingly tricky to click, while the "Yes" button triggers a satisfying response.

## Features

- **Dynamic Button Movement:** The "No" button moves to a random position when hovered over or touched, making it challenging to click.
- **Custom Visual Effects:** 
  - Clicking the "No" button changes the background and image to create a dramatic effect.
  - Clicking the "Yes" button results in a joyful animation and response.
- **Responsive Design:** Works on both desktop and touch devices.

## How It Works

1. **Clicking the "No" Button:**
   - The background changes to a thunderstorm effect.
   - The main image changes to a "Soldier Cat" GIF.
   - The button starts moving to random positions on hover or touch.
   - The heading updates to plead with the user.

2. **Clicking the "Yes" Button:**
   - The background changes to a positive visual effect.
   - The main image changes to a "Happy Chipi" GIF.
   - The heading updates to thank the user.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling and visual effects.
- **JavaScript**: Dynamic interactions and event handling.

## Setup

1. Clone or download the repository.
2. Ensure the following assets are in the same directory:
   - `soilder_cat.gif`
   - `thunderstrom.gif`
   - `new_chipi.gif`
   - `yes_gif.gif`
3. Open the `index.html` file in a browser.

## Code Overview

### Key JavaScript Logic

- **Dynamic Button Movement:**
  ```javascript
  const randomizeButtonPosition = (button) => {
      const randomX = Math.floor(Math.random() * areaWidth);
      const randomY = Math.floor(Math.random() * areaHeight);
      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
  };
