"use strict";

class Background {
    constructor(imgs) {
        this.imgs = imgs;
        this.color = color('black');
        this.setTiles(this.imgs);
        this.loaded = false;

        this.stagePosX = 0;
        this.stagePosY = 0;
        this.tileWidth = 0;
        this.tileHeight = 0;
    }

    setTiles = (tiles) => {
        if (typeof tiles === 'string') {
            this.tiles = [[loadImage(tiles, this.tilesLoaded)]];
        }
    }

    tilesLoaded = () => {
        this.stagePosX = 0;
        this.stagePosY = 0;
        this.tileWidth = this.tiles[0][0].width;
        this.tileHeight = this.tiles[0][0].height;
        this.loaded = true;
        image(this.tiles[0][0], 0, 0);
    }

    update = () => {

    }

    render = () => {
        //if (this.loaded) image(this.tiles[0][0], 0, 0);
    }
}
