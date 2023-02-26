// Object Literal
const rectangle = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
    area: () => this.width * this.height,
    perimeter: () => 2 * (this.width + this.height)
}

console.log(rectangle.area());