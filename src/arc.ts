import {Point} from "./point";
import {Angle} from "./angle";
import {Line} from "./line";

export class Arc {
	center: Point;
	radius: number;
	clockwise = true;
	private _startAngle: Angle;
	private _endAngle: Angle;
	private _startPoint: Point;
	private _endPoint: Point;

	constructor(center = new Point(), radius?: number, start?: Angle | Point, end?: Angle | Point) {
		this.center = center;
		this.radius = radius;
		if (start instanceof Angle) {
			this.setStartAngle(start);
		} else if (start instanceof Point) {
			this.setStartPoint(start);
		} else {
			this.setStartAngle(new Angle(0));
		}
		if (end instanceof Angle) {
			this.setEndAngle(end);
		}
		if (end instanceof Point) {
			this.setEndPoint(end);
		} else {
			this.setEndAngle(new Angle(Math.PI / 2));
		}
	}

	getStartAngle() {
		return this._startAngle;
	}

	setStartAngle(angle: Angle) {
		this._startAngle = angle;
		const d = new Point(Math.cos(this._startAngle.getRad()), Math.sin(this._startAngle.getRad())).multiply(this.radius);
		this._startPoint = this.center.clone().add(d);
	}

	getEndAngle() {
		return this._endAngle;
	}

	setEndAngle(angle: Angle) {
		this._endAngle = angle;
		const d = new Point(Math.cos(this._endAngle.getRad()), Math.sin(this._endAngle.getRad())).multiply(this.radius);
		this._endPoint = this.center.clone().add(d);
	}

	getStartPoint() {
		return this._startPoint;
	}

	setStartPoint(value: Point) {
		this._startPoint = value;
		this._startAngle.set(new Line(this.center, this._startPoint).theta, "rad");
	}

	getEndPoint() {
		return this._endPoint;
	}

	setEndPoint(value: Point) {
		this._endPoint = value;
		this._endAngle.set(new Line(this.center, this._endPoint).theta, "rad");
	}

	get length() {
		const {radius, _startAngle: startAngle, _endAngle: endAngle} = this;
		return radius * Math.abs(startAngle.value - endAngle.value);
	}

	get middle() {
		const angle = (this._startAngle.value + this._endAngle.value) / 2;
		const d = new Point(Math.cos(angle), Math.sin(angle)).multiply(this.radius);
		return this.center.clone().add(d);
	}

	flip(vertical = false, horizontal = false, anchor = new Point()) {
		this.center.flip(vertical, horizontal);
		this.setStartPoint(this.getStartPoint().flip(vertical, horizontal, anchor));
		this.setEndPoint(this.getEndPoint().flip(vertical, horizontal, anchor));
		if (vertical !== horizontal) {
			this.clockwise = !this.clockwise;
		}
		return this;
	}

	rotate(angle: number, anchor = new Point(0)) {
		this.center.rotate(angle, anchor);
		this.setStartPoint(this.getStartPoint().rotate(angle, anchor));
		this.setEndPoint(this.getEndPoint().rotate(angle, anchor));
		return this;
	}
}
