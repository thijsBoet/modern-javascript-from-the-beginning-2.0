function Rectangle(name, width, height) {
	this.name = name;
	this.width = width;
	this.height = height;
	this.area = () => this.width * this.height;
}

const rect1 = new Rectangle('Rectangle 1', 10, 20);
const rect2 = new Rectangle('Rectangle 2', 20, 20);

console.log(rect1.name, rect1.width);
console.log(rect2['name'], rect2['width']);

// Add a new property to rect1
rect1.color = 'red';

rect2.perimeter = () => 2 * (rect2.width + rect2.height);

// Delete a property from rect2
delete rect2.perimeter;

// Check if a property exists
console.log(rect1.hasOwnProperty('color'));
console.log(rect2.hasOwnProperty('color'));

// Get keys of an object
console.log(Object.keys(rect1));

// Get values of an object
console.log(Object.values(rect1));

// Get key-value pairs of an object
console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
    if (typeof value !== 'function') {
        console.log(`${key} - ${value}`);
    }
}
