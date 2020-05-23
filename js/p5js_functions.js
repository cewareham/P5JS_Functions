"use strict";

class Background {
    constructor(imgs, horizontalTiles = true) {
        this.imgs = imgs;
        this.color = color('black');
        this.render = this.nullRender;
        this.horizontalTiles = horizontalTiles;
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
            if (this.horizontalTiles) {
                // BEGIN HORIZONTAL tiles 1,2,3,4 -> left to right
                this.tiles = [[]];
                tiles.forEach( (ii) => {
                    this.tiles[0].push(loadImage(ii, this.tilesLoaded));
                });
                // END HORIZONTAL tiles 1,2,3,4 -> left to right
            } else {
                // BEGIN VERTICALLY stacked tiles -> 1,2,3,4 top to bottom
                this.tiles = [];
                tiles.forEach( (ii) => {
                    this.tiles.push([loadImage(ii, this.tilesLoaded)]);
                });
                // END VERTICALLY stacked tiles -> 1,2,3,4 top to bottom
            }
        } else {
            this.numImgs = this.imgs[0].length * this.imgs[1].length;
            // create 2d array
            // src: https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/
            this.tiles = new Array(this.imgs[0].length);
            for (let ii=0; ii<this.tiles.length; ii++) {
                this.tiles[ii] = [];
            }
            tiles[0].forEach( (ii) => {
                this.tiles[0].push(loadImage(ii, this.tilesLoaded));
            });
            tiles[1].forEach( (jj) => {
                this.tiles[1].push(loadImage(jj, this.tilesLoaded));
            });
        }
    }

    tilesLoaded = () => {
        this.stagePosX = 0;
        this.stagePosY = 0;
        this.tileWidth = this.tiles[0][0].width;
        this.tileHeight = this.tiles[0][0].height;
        this.numLoaded++;
        if (this.numLoaded == this.numImgs) {
            image(this.tiles[0][0], 0, 0);
            this.render = this.realRender;
        }
    }

    scroll = (xx, yy) => {
        this.stagePosX -= xx;
        this.stagePosY -= yy;

        let mm = this.mod(this.stagePosX, this.tileWidth * this.tiles[0].length);
        let col = this.toInt(mm / this.tileWidth);
        let xOff = (0 - this.mod(this.stagePosX, this.tileWidth));
        mm = this.mod(this.stagePosY, this.tileHeight * this.tiles.length);
        let row = this.toInt(mm / this.tileHeight);
        let yOff = (0 - this.mod(this.stagePosY, this.tileHeight));

        mm = this.mod(this.stagePosX + this.tileWidth, this.tileWidth * this.tiles[0].length);
        let col2 = this.toInt(mm / this.tileWidth);
        mm = this.mod(this.stagePosY + this.tileHeight, this.tileHeight * this.tiles.length);
        let row2 = this.toInt(mm / this.tileHeight);

        image(this.tiles[row][col], xOff, yOff);
        image(this.tiles[row][col2], xOff + this.tileWidth, yOff);
        image(this.tiles[row2][col], xOff, yOff + this.tileHeight);
        image(this.tiles[row2][col2], xOff + this.tileWidth, yOff + this.tileHeight);
    }

    update = () => {

    }

    // call the do-nothing render until all
    //  image(s) loaded then call realRender
    nullRender() {}

    realRender = () => {

    }

    // python's true modulo NOT JS' remainder
    // src: https://math.stackexchange.com/questions/674419/is-there-a-formula-for-modulo
    mod = (xx, yy) => {
        return xx - yy * Math.floor(xx/yy);
    }

    toInt(obj, def) {
        if (obj !== null) {
          var x = parseInt(obj, 10);
          if (!isNaN(x)) return x;
        }
        return toInt(def, 0);
    }
}
