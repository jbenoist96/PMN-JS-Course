class Point{

    //Constr
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    //getters
    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    //setters
    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    //toString
    toString(){
        return `votre point se situe en (${this.x}, ${this.y})`;
    }

}


//Main

//Init
let p1 = new Point(2,1);

//Test
/*
console.log(p1.getX());
console.log(p1.getY());
console.log(p1.toString());

p1.setX(3);
p1.setY(0);
console.log(p1.toString());
*/

module.exports = Point;