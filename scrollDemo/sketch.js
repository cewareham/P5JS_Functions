"use strict";

let game, CC = {};

function preload() {

}

function setup() {
    let canvas = createCanvas(600, 600);
    game = new Game(canvas);
}

function draw() {
    //background(0, 255, 0);
    game.update();
    game.render();
}

// center the canvas whenever the browser changes size
function windowResized() {
    game.centerCanvas();
}
