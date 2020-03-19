import { Point } from "./point";
export declare class Line {
    start: Point;
    end: Point;
    constructor(start: Point, end?: Point);
    containsPoint(point: Point, extend?: boolean): boolean;
    get length(): number;
    get middle(): Point;
    get slope(): number;
    get theta(): number;
    get expression(): {
        [key: string]: number;
    };
    equals(line: Line): boolean;
    rotate(angle: number, anchor?: Point): this;
    distance(to: Line): number;
    intersect(line: Line, extend?: boolean): Point;
}
