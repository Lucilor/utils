import {Line} from "..";
import {DEFAULT_TOLERANCE} from "./numbers";
import {Matrix, MatrixLike} from "./matrix";

export class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number);
    constructor(xy: number[] | {x: number; y: number});
    constructor(x: number | number[] | {x: number; y: number} = 0, y?: number) {
        if (Array.isArray(x)) {
            this.x = x[0];
            this.y = x[1];
        } else if (typeof x === "number") {
            this.x = x;
            this.y = typeof y === "number" ? y : x;
        } else if (typeof x?.x === "number" && typeof x?.y === "number") {
            this.x = x.x;
            this.y = x.y;
        } else {
            this.x = this.y = 0;
        }
    }

    set(x?: number, y?: number): Point;
    set(point: Point): Point;
    set(x: number | Point = 0, y = x) {
        if (typeof x === "number") {
            this.x = x;
            this.y = y as number;
        } else {
            this.x = x.x;
            this.y = x.y;
        }
        return this;
    }

    equals(point: Point, tolerance = DEFAULT_TOLERANCE) {
        const {x, y} = point;
        return Math.abs(x - this.x) <= tolerance && Math.abs(y - this.y) <= tolerance;
    }

    add(point?: Point): Point;
    add(x?: number, y?: number): Point;
    add(x?: Point | number, y?: number): Point {
        if (x instanceof Point) {
            this.x += x.x;
            this.y += x.y;
            return this;
        }
        return this.add(new Point(x, y));
    }

    sub(point?: Point): Point;
    sub(x?: number, y?: number): Point;
    sub(x?: Point | number, y?: number): Point {
        if (x instanceof Point) {
            this.x -= x.x;
            this.y -= x.y;
            return this;
        }
        return this.sub(new Point(x, y));
    }

    multiply(point?: Point): Point;
    multiply(x?: number, y?: number): Point;
    multiply(x?: Point | number, y?: number): Point {
        if (x instanceof Point) {
            this.x *= x.x;
            this.y *= x.y;
            return this;
        }
        return this.multiply(new Point(x, y));
    }

    divide(point?: Point): Point;
    divide(x?: number, y?: number): Point;
    divide(x?: Point | number, y?: number): Point {
        if (x instanceof Point) {
            this.x /= x.x;
            this.y /= x.y;
            return this;
        }
        return this.divide(new Point(x, y));
    }

    clone() {
        return new Point(this.x, this.y);
    }

    copy(point?: Point | null) {
        if (!point) {
            return this;
        }
        return this.set(point.x, point.y);
    }

    toArray(): [number, number] {
        return [this.x, this.y];
    }

    distanceTo(point: Point | Line) {
        const {x, y} = this;
        if (point instanceof Point) {
            return Math.hypot(x - point.x, y - point.y);
        } else {
            return point.distanceTo(this);
        }
    }

    crossProduct(point: Point) {
        return this.x * point.y - this.y * point.x;
    }

    transform(matrix: MatrixLike) {
        matrix = new Matrix(matrix);
        const {a, d, e, f} = matrix;
        const angle = matrix.rotate();
        const origin = new Point(matrix.origin);
        if (angle) {
            const {x: x1, y: y1} = origin;
            const {x: x2, y: y2} = this;
            const theta = Math.atan2(y2 - y1, x2 - x1) + angle;
            const length = Math.hypot(x1 - x2, y1 - y2);
            const offset = new Point(Math.cos(theta), Math.sin(theta)).multiply(length);
            this.x = origin.x + offset.x + e;
            this.y = origin.y + offset.y + f;
        } else {
            const distance = this.clone().sub(origin).multiply(a, d);
            this.x = origin.x + distance.x + e;
            this.y = origin.y + distance.y + f;
        }
        return this;
    }

    normalize() {
        return this.divide(Math.hypot(this.x, this.y));
    }
}
