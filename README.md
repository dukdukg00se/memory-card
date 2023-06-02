# Space Memory Card Game

## Overview

A card game testing your memory. Accumulate points by clicking on a card. But don't click a card more than once! See if you can reach 20 points!

[Live Demo]()

<img src="./src/assets/app-screenshot.png" width="55%">

## Learning Objectives

- Practice building with React functional components
- Using state
- Using React hooks

## Notes

This project was done as part of [The Odin Project](https://www.theodinproject.com/paths) curriculum and is the [Memory Card](https://www.theodinproject.com/lessons/node-path-javascript-memory-card) project. The goal for this project was to use hooks as well as a lot of state.

** Note to self - As this project was immediately preceded by the React hooks portion of the course and one of the assignment prompts was to create a "function that display the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts", I took that to mean to use the useEffect hook to invoke the card shuffle function. However, after some thought, I realized useEffect wasn't appropriate here. The deck shuffles when the user presses a card and it's better to use an event handler to handle this interaction. useEffect is recommended to be used to "step out" of your React code and synchronize with some external system. **

## Future Improvements

- Add levels to the game, with higher levels corresponding to an increase in deck size
- Add a loading spinner
- Add a favicon to page

## Credits

- Design inspired by and card images from [TheOnlyHamster](https://github.com/Theonlyhamstertoh/planet-cards). All logic and code is original.
