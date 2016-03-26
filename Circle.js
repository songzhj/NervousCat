/**
 * Created by szhj on 2016/3/26.
 */
function Circle() {
    createjs.Shape.call(this);

    this.setCircleType = function (type) {
        this._circleType = type;
        switch (type) {
            case 1:
                this.setColor("#ccc");
                break;
            case 2:
                this.setColor("#f60");
                break;
            case 3:
                this.setColor("#f0f");
                break;
        }
    }

    this.setColor = function (colorString) {
        this.graphics.beginFill(colorString);
        this.graphics.drawCircle(0, 0, 25);
        this.graphics.endFill();
    }

    this.getCircleType = function () {
        return this._circleType;
    }

    this.setCircleType(1);
}

Circle.prototype = new createjs.Shape();