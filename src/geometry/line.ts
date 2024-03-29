import {Angle} from "./angle";
import {MatrixLike} from "./matrix";
import {DEFAULT_TOLERANCE, isBetween, isNearZero} from "./numbers";
import {Point} from "./point";

export class Line {
  start: Point;
  end: Point;
  get isFinite() {
    return this.start.isFinite && this.end.isFinite;
  }
  get isNaN() {
    return this.start.isNaN || this.end.isNaN;
  }

  constructor(start: Point, end = start) {
    this.start = start;
    this.end = end;
  }

  clone() {
    return new Line(this.start.clone(), this.end.clone());
  }

  copy({start, end}: Line) {
    this.start.copy(start);
    this.end.copy(end);
  }

  reverse() {
    [this.start, this.end] = [this.end, this.start];
    return this;
  }

  contains(object: Point | Line, extend = false, tolerance = DEFAULT_TOLERANCE): boolean {
    if (object instanceof Point) {
      const {x: x1, y: y1} = this.start;
      const {x: x2, y: y2} = this.end;
      const {x, y} = object;
      const withinLine = extend || (isBetween(x, x1, x2, true, tolerance) && isBetween(y, y1, y2, true, tolerance));
      return isNearZero((x - x1) * (y2 - y1) - (x2 - x1) * (y - y1), tolerance) && withinLine;
    } else if (object instanceof Line) {
      return this.contains(object.start, extend, tolerance) && this.contains(object.end, extend, tolerance);
    }
    return false;
  }

  get length() {
    return this.start.distanceTo(this.end);
  }

  get middle() {
    return this.getPoint(0.5);
  }

  get slope() {
    const {x: x1, y: y1} = this.start;
    const {x: x2, y: y2} = this.end;
    if (x1 === x2) {
      return Infinity;
    }
    return (y1 - y2) / (x1 - x2);
  }

  get theta() {
    const {x: x1, y: y1} = this.start;
    const {x: x2, y: y2} = this.end;
    return new Angle(Math.atan2(y2 - y1, x2 - x1), "rad");
  }

  get expression() {
    const slope = this.slope;
    const result = {a: 0, b: 0, c: 0};
    if (isFinite(slope)) {
      result.a = slope;
      result.b = -1;
      result.c = this.start.y - this.start.x * slope;
    } else {
      result.a = 1;
      result.c = -this.start.x;
    }
    let count = 0;
    for (const k in result) {
      if (result[k as keyof typeof result] < 0) {
        count++;
      }
    }
    if (count > 1) {
      result.a *= -1;
      result.b *= -1;
      result.c *= -1;
    }
    return result;
  }

  equals(line: Line, tolerance = DEFAULT_TOLERANCE) {
    return this.start.equals(line.start, tolerance) && this.end.equals(line.end, tolerance);
  }

  isParallelWith(line: Line, tolerance = DEFAULT_TOLERANCE) {
    const slope1 = line.slope;
    const slope2 = this.slope;
    if (!isFinite(slope1) && !isFinite(slope2)) {
      return true;
    }
    return isNearZero(slope1 - slope2, tolerance);
  }

  transform(matrix: MatrixLike) {
    this.start.transform(matrix);
    this.end.transform(matrix);
    return this;
  }

  distanceTo(line: Line | Point, tolerance = DEFAULT_TOLERANCE) {
    if (line instanceof Line) {
      if (!this.isParallelWith(line, tolerance)) {
        return NaN;
      }
      const exp1 = this.expression;
      const exp2 = line.expression;
      return Math.abs(exp1.c - exp2.c) / Math.sqrt(exp1.a ** 2 + exp1.b ** 2);
    } else {
      const {a, b, c} = this.expression;
      return Math.abs((a * line.x + b * line.y + c) / Math.sqrt(a ** 2 + b ** 2));
    }
  }

  intersects(line: Line, extend = false, tolerance = DEFAULT_TOLERANCE) {
    let intersection: Point | null = null;
    if (this.isParallelWith(line, tolerance)) {
      return intersection;
    }
    const exp1 = this.expression;
    const exp2 = line.expression;
    if (exp1 && exp2) {
      intersection = solveLinearEqXY(exp1.a, exp1.b, -exp1.c, exp2.a, exp2.b, -exp2.c);
    }
    if (!intersection) {
      return null;
    }
    if (extend === false && (!this.contains(intersection, extend, tolerance) || !line.contains(intersection, extend, tolerance))) {
      intersection = null;
    }
    return intersection;
  }

  crossProduct(line: Line) {
    const p1 = this.end.clone().sub(this.start);
    const p2 = line.end.clone().sub(line.start);
    return p1.crossProduct(p2);
  }

  getPoint(t: number) {
    const d = this.length * t;
    const theta = this.theta.rad;
    const dx = Math.cos(theta) * d;
    const dy = Math.sin(theta) * d;
    return this.start.clone().add(dx, dy);
  }
}

const solveLinearEqXY = (a1: number, b1: number, c1: number, a2: number, b2: number, c2: number) => {
  const k = a1 * b2 - a2 * b1;
  if (k === 0) {
    return null;
  } else {
    return new Point(b2 * c1 - b1 * c2, a1 * c2 - a2 * c1).divide(k);
  }
};
