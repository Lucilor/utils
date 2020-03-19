export declare class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    constructor(xy: number[]);
    set(x?: number, y?: number): Point;
    set(point: Point): Point;
    equals(v: Point): boolean;
    equalsAppr(v: Point, accuracy: number): boolean;
    add(v: Point | number): Point;
    sub(v: Point | number): Point;
    multiply(v: Point | number): Point;
    divide(v: Point | number): Point;
    clone(): Point;
    flip(vertical?: boolean, horizontal?: boolean, anchor?: Point): this;
    rotate(angle: number, anchor?: Point): Point;
    toArray(): number[];
}
