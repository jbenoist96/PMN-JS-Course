//imports
const Point = require('./Point1.js');

//Class
class Circle{
    //Const
    constructor(x, y, radius){
        this.center = new Point(x, y)
        this.radius = radius;
    }


    Area(){
        return this.radius * this.radius * Math.PI
    }

    containsPoint(p1){
        let dist = Math.sqrt(Math.pow(p1.x-this.center.x, 2)+Math.pow(p1.y-this.center.y, 2))
        return dist <= this.radius;
    }


    

}

let c1 = new Circle(4,5,7);
let p1 = new Point(1,2);
let p2 = new Point(8,24);
console.log(c1.containsPoint(p1));
console.log(c1.containsPoint(p2));