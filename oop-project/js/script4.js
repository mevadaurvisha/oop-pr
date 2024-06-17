class shop {
    constructor() {}

    Rectangle(width, height) {
        document.getElementById('circle').innerHTML = `Rectangle Area: ${width * height}`;
    }

    Circle(radius) {    
        document.getElementById('rectangle').innerHTML = `Circle Area: ${3.14 * radius * radius}`;
    }
}

let s1 = new shop();
s1.Rectangle(5, 8);

let s2 = new shop();
s2.Circle(3);