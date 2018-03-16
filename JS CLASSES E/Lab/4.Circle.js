class Circle{
	constructor(radius){
		this.radius=radius;
	}
	get radius(){
		return this._radius;
	}
	set radius(radius){
		if(radius<=0){
			throw  new RangeError('radius must be positive number')
		}
		this._radius=radius;
	}


	get diameter(){
return this.radius*2;
	}
	set diameter(diameter){
		if(diameter<=0){
		    throw  new RangeError('diameter must be positive number')
		  }
		this.radius=diameter/2;
	}
	get area(){
		return Math.PI *this.radius*this.radius;
	}
}
let s=new Circle(5);
console.log(s.diameter);
console.log(s.area);
s.radius=8;
console.log(s.diameter);
console.log(s.area);
let c2=new Circle(-3);
console.log(c2.radius);