class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((a, e) => (a += e), 0);
  }
}

class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }
  get isValid() {
    if (this.countSides !== 3) return false;
    this.sides.sort((a, b) => a - b);
    return this.sides[0] + this.sides[1] > this.sides[2];
  }
}

class Square extends Polygon {
  constructor(sides) {
    super(sides);
  }
  get isValid() {
    return (
      this.countSides === 4 &&
      this.sides[0] === this.sides[1] &&
      this.sides[2] === this.sides[3] &&
      this.sides[3] === this.sides[0]
    );
  }

  get area() {
    if (this.isValid) return this.sides[0] ** 2;
  }
}
