const Point = require('./Point1.js')



Class Circle extends Point{
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius;
    }

    Area(){
        return this.radius * this.radius * Math.PI
    }
    

}