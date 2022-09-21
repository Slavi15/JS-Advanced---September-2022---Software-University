function rectangleFunction(width, height, color) {
    const capitalized = color.charAt(0).toUpperCase() + color.slice(1);

    return {
        width,
        height,
        color: capitalized,
        calcArea: function() {
            return width * height;
        }
    };
};

let rect = rectangleFunction(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());