const isNode = typeof process !== "undefined" && process.versions && process.versions.node;
if (isNode) {
    // nodejs
    global.navigator = {appName: "nodejs"} as any;
    global.window = {} as any;
}

export * from "./files";
export * from "./geometry";
export * from "./image";
export * from "./list-random";
export * from "./log";
export * from "./math";
export * from "./misc";
export * from "./object";
export * from "./rsa";
export * from "./storage";
export * from "./types";
export * from "./ui";
