export declare class Angle {
    value: number;
    unit: "rad" | "deg";
    constructor(value?: number, unit?: "rad" | "deg");
    getRad(): number;
    getDeg(): number;
    constrain(): this;
    set(value?: number, unit?: "rad" | "deg"): this;
}
