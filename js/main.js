/*
 File: https://alinaryan.github.io/GUIHW8V2
 Assignment: Scrabble Table game
 Alina Ryan, UMass Lowell Computer Science, alina_ryan@student.uml.edu
 Copyright (c) 2020 by Alina Ryan. All rights reserved. May be
 freely copied or excerpted for educational purposes with credit to the
 author.
 Updated by Alina Ryan on Dec 17, 2020 */

// letters array from Jesse Heines
 let letters = `{"pieces": [
 	{"letter":"A", "value":1,  "amount":9},
 	{"letter":"B", "value":3,  "amount":2},
 	{"letter":"C", "value":3,  "amount":2},
 	{"letter":"D", "value":2,  "amount":4},
 	{"letter":"E", "value":1,  "amount":12},
 	{"letter":"F", "value":4,  "amount":2},
 	{"letter":"G", "value":2,  "amount":3},
 	{"letter":"H", "value":4,  "amount":2},
 	{"letter":"I", "value":1,  "amount":9},
 	{"letter":"J", "value":8,  "amount":1},
 	{"letter":"K", "value":5,  "amount":1},
 	{"letter":"L", "value":1,  "amount":4},
 	{"letter":"M", "value":3,  "amount":2},
 	{"letter":"N", "value":1,  "amount":6},
 	{"letter":"O", "value":1,  "amount":8},
 	{"letter":"P", "value":3,  "amount":2},
 	{"letter":"Q", "value":10, "amount":1},
 	{"letter":"R", "value":1,  "amount":6},
 	{"letter":"S", "value":1,  "amount":4},
 	{"letter":"T", "value":1,  "amount":6},
 	{"letter":"U", "value":1,  "amount":4},
 	{"letter":"V", "value":4,  "amount":2},
 	{"letter":"W", "value":4,  "amount":2},
 	{"letter":"X", "value":8,  "amount":1},
 	{"letter":"Y", "value":4,  "amount":2},
 	{"letter":"Z", "value":10, "amount":1}
   ]
 }`

 const newLetters = JSON.parse(letters)
 // array to hold the images to show
 let lettersArr = [];
 // go thru the json and get each "letter"
 for(let i = 0; i < newLetters.pieces.length; i++){
   // get the amount of the letters and push them into the array. the arry should have 100 values
   for(let j = 0; j < newLetters.pieces[i].amount; j++)
     // push the letter into the array based on its amount
     lettersArr.push(`graphics_data/tiles/Scrabble_Tile_${newLetters.pieces[i].letter}.jpg`)
 }

// source adapted from Brad Traversy
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  //setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop(e) {
  e.preventDefault();
  this.className = 'empty';
  this.replaceWith(fill);
}
