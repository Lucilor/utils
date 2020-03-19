export class Angle {
	value: number;
	unit: "rad" | "deg";

	constructor(value = 0, unit: "rad" | "deg" = "rad") {
		this.value = value;
		this.unit = unit;
	}

	getRad() {
		if (this.unit === "deg") {
			return (this.value / 180) * Math.PI;
		}
		return this.value;
	}

	getDeg() {
		if (this.unit === "rad") {
			return (this.value / Math.PI) * 180;
		}
		return this.value;
	}

	constrain() {
		let limit: number;
		if (this.unit === "rad") {
			limit = Math.PI * 2;
		}
		if (this.unit === "deg") {
			limit = 360;
		}
		while (this.value < 0) {
			this.value += limit;
		}
		while (this.value > limit) {
			this.value -= limit;
		}
		return this;
	}

	set(value = 0, unit: "rad" | "deg" = "rad") {
		this.value = value;
		this.unit = unit;
		return this;
	}
}