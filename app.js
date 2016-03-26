/**
 * Created by szhj on 2016/3/26.
 */
var stage = new createjs.Stage("game-view");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);

var gameView = new createjs.Container();
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);

var canvasArr = [[],[],[],[],[],[],[],[],[]];
var width = 9, height = 9;

function addCircles() {
    for (var indexY = 0; indexY < height; ++indexY) {
        for (var indexX = 0; indexX < width; ++indexX) {
            var circle = new Circle();
            gameView.addChild(circle);
            canvasArr[indexX][indexY] = circle;
            circle.indexX = indexX;
            circle.indexY = indexY;
            circle.x = indexY % 2 != 0 ? 30 + 55 * indexX : 55 * indexX;
            circle.y = 55 * indexY;
            if (indexX == 4 && indexY == 4) {
                circle.setCircleType(3);
            }
        }
    }
}

addCircles();