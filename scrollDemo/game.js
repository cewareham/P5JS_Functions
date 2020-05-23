"use strict";

// Game class
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        // 3 possible params:
        //   1-> "img.png" -> single img path/filename
        //   2 -> ["img1.png", "img2.png"] -> array of path/filenames (1x img ok)
        //   (the above is 'long corridor'->all displayed horizontally)
        //   3 -> [["img1.png", "img2.png"], ["img3.png", "img4.png"]] -> 2d array
        //*** FIRST OPTION ***
        //this.background = new Background("../images/dungeonFloor1.png");

        //*** SECOND OPTION horizontal 1,2,3,4 left to right ***
        this.background = new Background(["../images/dungeonFloor1.png",
                                          "../images/dungeonFloor2.png",
                                          "../images/dungeonFloor3.png",
                                          "../images/dungeonFloor4.png"]);
        
        //*** SECOND OPTION vertical 1,2,3,4 top to bottom***
        // this.background = new Background(["../images/dungeonFloor1.png",
        //                                   "../images/dungeonFloor2.png",
        //                                   "../images/dungeonFloor3.png",
        //                                   "../images/dungeonFloor4.png"], false);
        
        //*** THIRD OPTION ***
        // this.background = new Background([ ["../images/dungeonFloor1.png", "../images/dungeonFloor2.png"],
        //                                  ["../images/dungeonFloor3.png", "../images/dungeonFloor4.png"] ]);
        
        this.centerCanvas();
    }
  
    update() {
        //this.background.update();
        if (keyIsDown(RIGHT_ARROW))
            this.background.scroll(-5, 0);
        if (keyIsDown(DOWN_ARROW))
            this.background.scroll(0, -5);
        if (keyIsDown(LEFT_ARROW))
            this.background.scroll(5, 0);
        if (keyIsDown(UP_ARROW))
            this.background.scroll(0, 5);
    }
  
    render() {
        //background('blue');
        //this.background.render();
    }

    centerCanvas() {
        var xx = (windowWidth - width) / 2;
        var yy = (windowHeight - height) / 2;
        this.canvas.position(xx, yy);
    }
}
