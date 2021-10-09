import {Parser} from "expr-eval";
import md5 from "md5";
import {ObjectOf} from "../types";

export const fibonacci = (n: number) => {
    const sqrt5 = Math.sqrt(5);
    return Math.round((((1 + sqrt5) / 2) ** n - ((1 - sqrt5) / 2) ** n) / sqrt5);
};

export const calc = (expression: string, vars: ObjectOf<number>) => {
    Object.keys(vars).forEach((key) => {
        if (key.match("[^\x00-\xff]")) {
            const key2 = md5(key);
            expression = expression.replaceAll(key, key2);
            vars[key2] = vars[key];
            delete vars[key];
        }
    });
    return Parser.evaluate(expression, vars);
};
