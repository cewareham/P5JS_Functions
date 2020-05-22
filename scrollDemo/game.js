"use strict";

// Game class
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.background = new Background(["../images/dungeonFloor1.png",
                "../images/dungeonFloor2.png",
                "../images/dungeonFloor3.png",
                "../images/dungeonFloor4.png"]);
        this.centerCanvas();
    }
  
    update() {
        this.background.update();
    }
  
    render() {
        //background('blue');
        this.background.render();
    }

    centerCanvas() {
        var xx = (windowWidth - width) / 2;
        var yy = (windowHeight - height) / 2;
        this.canvas.position(xx, yy);
    }
}
