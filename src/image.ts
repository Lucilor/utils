export const loadImage = (src: string, crossOrigin?: boolean) =>
    new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        if (crossOrigin) {
            img.crossOrigin = "anonymous";
        }
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });

export const getImageDataUrl = (img: HTMLImageElement) => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Could not get context");
    }
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL();
};
