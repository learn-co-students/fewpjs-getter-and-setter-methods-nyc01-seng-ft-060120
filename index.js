// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  get circumference(){
    const pi = Math.PI;
    return 2 * pi * this.radius
  }
  
  get area(){
    const pi = Math.PI;
    return pi * (this.radius * this.radius)
  }
  
  set diameter(value){
    this.radius = value / 2
  }
  
  set circumference(value){
    const pi = Math.PI;
    this.radius = value / pi / 2
  }
  
}