export class Point {
	x: number;
	y: number;
	constructor(x?: number, y?: number);
	constructor(xy: number[]);
	constructor(x: number | number[] = 0, y?: number) {
		if (Array.isArray(x)) {
			this.x = x[0];
			this.y = x[1];
		} else if (typeof x === "number") {
			this.x = x;
			this.y = typeof y === "number" ? y : x;
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

	equals(v: Point) {
		return v.x === this.x && v.y === this.y;
	}

	equalsAppr(v: Point, accuracy: number) {
		return Math.abs(v.x - this.x) <= accuracy && Math.abs(v.y - this.y) <= accuracy;
	}

	add(v: Point | number): Point {
		if (typeof v === "number") {
			return this.add(new Point(v));
		}
		this.x += v.x;
		this.y += v.y;
		return this;
	}

	sub(v: Point | number): Point {
		if (typeof v === "number") {
			return this.sub(new Point(v));
		}
		this.x -= v.x;
		this.y -= v.y;
		return this;
	}

	multiply(v: Point | number): Point {
		if (typeof v === "number") {
			return this.multiply(new Point(v));
		}
		this.x *= v.x;
		this.y *= v.y;
		return this;
	}

	divide(v: Point | number): Point {
		if (typeof v === "number") {
			return this.divide(new Point(v));
		}
		this.x /= v.x;
		this.y /= v.y;
		return this;
	}

	clone() {
		return new Point(this.x, this.y);
	}

	flip(vertical = false, horizontal = false, anchor = new Point(0)) {
		const dx = anchor.x - this.x;
		const dy = anchor.y - this.y;
		if (vertical === true) {
			this.y += dy * 2;
		}
		if (horizontal === true) {
			this.x += dx * 2;
		}
		return this;
	}

	rotate(angle: number, anchor = new Point(0)) {
		const {x: x1, y: y1} = anchor;
		const {x: x2, y: y2} = this;
		const theta = Math.atan2(y2 - y1, x2 - x1) + angle;
		const length = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
		const d = new Point(Math.cos(theta), Math.sin(theta)).multiply(length);
		return this.set(anchor.x + d.x, anchor.y + d.y);
	}

	toArray() {
		return [this.x, this.y];
	}

	// distance(to: Point | Line) {
	// 	const {x, y} = this;
	// 	if (to instanceof Point) {
	// 		return Math.sqrt((x - to.x) ** 2 + (y - to.y) ** 2);
	// 	}
	// 	// tslint:disable-next-line: no-use-before-declare
	// 	if (to instanceof Line) {
	// 		const {a, b, c} = to.expression;
	// 		return Math.abs((a * x + b * y + c) / Math.sqrt(a ** 2 + b ** 2));
	// 	}
	// }
}
