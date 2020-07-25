// class Bird {
//     // constructors set the attributes a Bird is instantiated with
//     constructor(name){
//         this.name = name;
//     }
//     // setter methods set attributes a Bird is not instantiated with
//     set phrase(phrase){
//         this._phrase;
//     }
//     // getter methods gets any attribute of Bird
//     get speak(){
//         return `${this.name} says ${this._phrase || 'squawk'}`
//     }
// }

// let daffy = new Bird('Daffy');
// daffy.speak; //=> 'Daffy says squawk'
// daffy.phrase = "it's rabbit season!";
// daffy.speak; //=> 'Daffy says it's rabbit season!'

// const pi = MATH.PI

// class Circle {
// 	constructor(radius) {
// 		this.radius = radius;
// 	}

// 	get diameter() {
// 		return this.radius * 2;
// 	}

// 	set diameter(diameter) {
// 		this.radius = diameter / 2;
// 	}

// 	get circumference() {
// 		return (this.radius * 2) * pi;
// 	}

// 	set circumference(circumference) {
// 		this.radius = circumference / (pi * 2);
// 	}

// 	get area() {
// 		return pi * (this.radius * this.radius);
// 	}

// 	set area(area) {
// 		this.radius = Math.sqrt(area / pi);
// 	}
// }

const pi = Math.PI;

class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	get diameter() {
		return this.radius * 2;
	}

	set diameter(diameter) {
		this.radius = diameter / 2;
	}

	get circumference() {
		return this.radius * 2 * pi;
	}

	set circumference(circumference) {
		this.radius = circumference / (pi * 2);
	}

	get area() {
		return pi * (this.radius * this.radius);
	}

	set area(area) {
		this.radius = Math.sqrt(area / pi);
	}
}
