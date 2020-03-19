import { Point } from "./point";
import { Line } from "./line";
export declare class Rectangle {
    position: Point;
    width: number;
    height: number;
    constructor(position: Point, width: number, height: number);
    containsPoint(point: Point): boolean;
    containsLine(line: Line): boolean;
    get x(): number;
    get y(): number;
    get top(): number;
    get right(): number;
    get bottom(): number;
    get left(): number;
    equals(rect: Rectangle): boolean;
    intersects(rect: Rectangle): Rectangle;
}
