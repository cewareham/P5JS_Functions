"use strict";

class Background {
    constructor(imgs) {
        this.imgs = imgs;
        this.color = color('black');
        this.tileIdx0 = 0;
        this.tileIdx1 = 0;
        this.render = this.nullRender;
        this.setTiles(this.imgs);
    }

    setTiles = (tiles) => {
        this.numLoaded = 0;
        if (typeof tiles === 'string') {    // img=single path/filename string
            this.numImgs = 1;
            this.tiles = [[loadImage(tiles, this.tilesLoaded)]];
        }
        else if (typeof tiles[0] === 'string') {    // img=array of path/filename strings
            this.numImgs = this.imgs.length;
            this.tiles = [];
            tiles.forEach( (ii) => {
                this.tiles.push([loadImage(ii, this.tilesLoaded)]);
            });
        }
    }

    tilesLoaded = () => {
        this.stagePosX = 0;
        this.stagePosY = 0;
        this.tileWidth = this.tiles[0][0].width;
        this.tileHeight = this.tiles[0][0].height;
        this.numLoaded++;
        if (this.numLoaded == this.numImgs) this.render = this.realRender;
    }

    update = () => {
        if (keyIsDown(LEFT_ARROW))  this.tileIdx0 = 0;
        if (keyIsDown(RIGHT_ARROW)) this.tileIdx0 = 2;
        if (keyIsDown(UP_ARROW))    this.tileIdx0 = 1;
        if (keyIsDown(DOWN_ARROW))  this.tileIdx0 = 3;
    }

    nullRender() {}

    realRender = () => {
        image(this.tiles[this.tileIdx0][this.tileIdx1], 0, 0);
    }
}
