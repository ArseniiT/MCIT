class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  var square = new Rectangle(10, 10);
  console.log(square.height);
  console.log(square.area); // 100
  
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  
  console.log(Point.distance(p1, p2)); // 7.0710678118654755