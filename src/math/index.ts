export const fibonacci = (n: number) => {
    const sqrt5 = Math.sqrt(5);
    return Math.round((((1 + sqrt5) / 2) ** n - ((1 - sqrt5) / 2) ** n) / sqrt5);
};
