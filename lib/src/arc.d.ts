import { Point } from "./point";
import { Angle } from "./angle";
export declare class Arc {
    center: Point;
    radius: number;
    clockwise: boolean;
    private _startAngle;
    private _endAngle;
    private _startPoint;
    private _endPoint;
    constructor(center?: Point, radius?: number, start?: Angle | Point, end?: Angle | Point);
    getStartAngle(): Angle;
    setStartAngle(angle: Angle): void;
    getEndAngle(): Angle;
    setEndAngle(angle: Angle): void;
    getStartPoint(): Point;
    setStartPoint(value: Point): void;
    getEndPoint(): Point;
    setEndPoint(value: Point): void;
    get length(): number;
    get middle(): Point;
    flip(vertical?: boolean, horizontal?: boolean, anchor?: Point): this;
    rotate(angle: number, anchor?: Point): this;
}
