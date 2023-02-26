function Rectangle(name, width, height) {
    this.name = name
	this.width = width;
    this.height = height;
    this.area = () => this.width * this.height;
}

const rect1 = new Rectangle('rect1',10, 20);

console.log(rect1.area());

const rect2 = new Rectangle('rect2', 20, 30);
const rect3 = new Rectangle('rect3', 30, 30);

console.log(rect2.name,rect2.area());
console.log(rect3.name, rect3.area());

console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);