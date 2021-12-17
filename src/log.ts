import {keysOf, ObjectOf} from "./types";

export const log = (msg: string, type?: string, styles: Partial<CSSStyleDeclaration> = {}, ...others: any[]) => {
    if (typeof type === "string" && type) {
        type = `[${type}] `;
    } else {
        type = "";
    }
    const div = document.createElement("div");
    keysOf(styles).forEach((key: any) => (div.style[key] = styles[key] as any));
    const cssText = div.style.cssText;
    let msg2 = type + msg;
    if (cssText) {
        if (!msg2.includes("%c")) {
            msg2 = "%c" + msg2;
        }
        console.log(msg2, cssText, ...others);
    } else {
        console.log(msg2, ...others);
    }
};

export class Timer {
    private _pool: ObjectOf<number> = {};
    fractionDigits = 2;
    get now() {
        return performance.now();
    }

    constructor(public logStyles?: Partial<CSSStyleDeclaration>) {}

    private _getTimeString(name: string) {
        const time = (this.now - this._pool[name]) / 1000;
        return time.toFixed(this.fractionDigits) + "s";
    }

    log(name: string, content: string) {
        if (content) {
            content += ": ";
        }
        log(`${content}${this._getTimeString(name)}`, "Timer", this.logStyles);
        return this;
    }

    start(name: string, content?: string) {
        this._pool[name] = this.now;
        if (typeof content === "string") {
            this.log(name, content);
        }
        return this;
    }

    end(name: string, content?: string) {
        if (typeof content === "string") {
            this.log(name, content);
        }
        delete this._pool[name];
        return this;
    }
}
