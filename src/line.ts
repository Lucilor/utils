import {Point} from "./point";

export class Line {
	start: Point;
	end: Point;
	constructor(start: Point, end = start) {
		this.start = start;
		this.end = end;
	}

	containsPoint(point: Point, extend = false) {
		const {x: x1, y: y1} = this.start;
		const {x: x2, y: y2} = this.end;
		const {x, y} = point;
		const withinLine = extend || (Math.min(x1, x2) <= x && x <= Math.max(x1, x2) && Math.min(y1, y2) <= y && y <= Math.max(y1, y2));
		if ((x - x1) * (y2 - y1) === (x2 - x1) * (y - y1) && withinLine) {
			return true;
		} else {
			return false;
		}
	}

	get length() {
		const {x: x1, y: y1} = this.start;
		const {x: x2, y: y2} = this.end;
		return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
	}

	get middle() {
		const {x: x1, y: y1} = this.start;
		const {x: x2, y: y2} = this.end;
		return new Point(x1 + x2, y1 + y2).multiply(0.5);
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
		return Math.atan2(y2 - y1, x2 - x1);
	}

	get expression() {
		const slope = this.slope;
		if (isNaN(slope)) {
			return null;
		}
		const result: {[key: string]: number} = {a: 0, b: 0, c: 0};
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
			if (result[k] < 0) {
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

	equals(line: Line) {
		return this.start.equals(line.start) && this.end.equals(line.end);
	}

	flip(vertical = false, horizontal = false, anchor = new Point(0)) {
		this.start.flip(vertical, horizontal, anchor);
		this.end.flip(vertical, horizontal, anchor);
		return this;
	}

	rotate(angle: number, anchor = new Point(0)) {
		this.start.rotate(angle, anchor);
		this.end.rotate(angle, anchor);
		return this;
	}

	distance(to: Line) {
		if (this.slope !== to.slope) {
			return NaN;
		}
		const exp1 = this.expression;
		const exp2 = to.expression;
		return Math.abs(exp1.c - exp2.c) / Math.sqrt(exp1.a ** 2 + exp1.b ** 2);
	}

	intersect(line: Line, extend = false) {
		const slope1 = this.slope;
		const slope2 = line.slope;
		let intersection: Point = null;
		if (slope1 === slope2 || (!isFinite(slope1) && !isFinite(slope2))) {
			return intersection;
		}
		const exp1 = this.expression;
		const exp2 = line.expression;
		if (exp1 && exp2) {
			intersection = solveLinearEqXY(exp1.a, exp1.b, -exp1.c, exp2.a, exp2.b, -exp2.c);
		}
		if (extend === false && (!this.containsPoint(intersection) || !line.containsPoint(intersection))) {
			intersection = null;
		}
		return intersection;
	}
}

function solveLinearEqXY(a1: number, b1: number, c1: number, a2: number, b2: number, c2: number) {
	const k = a1 * b2 - a2 * b1;
	if (k === 0) {
		return null;
	} else {
		return new Point(b2 * c1 - b1 * c2, a1 * c2 - a2 * c1).divide(k);
	}
}
