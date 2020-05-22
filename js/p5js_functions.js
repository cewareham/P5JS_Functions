"use strict";

class Background {
    constructor(imgs) {
        this.imgs = imgs;
        this.color = color('black');
        this.setTiles(this.imgs);
    }

    setTiles = (tiles) => {
        if (typeof tiles === 'string') {
            this.tiles = [[loadImage(tiles, tilesLoaded)]];
        }

    }

    tilesLoaded = () => {
        this.stagePosX = 0;
        this.stagePosY = 0;
        this.tileWidth = this.tiles[0][0].width;
        this.tileHeight = this.tiles[0][0].height;
        image(this.tiles[0][0], 0, 0);
    }
}
