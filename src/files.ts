export const downloadByString = (content: string, filename: string) => {
    const blob = new Blob([content]);
    const url = URL.createObjectURL(blob);
    downloadByUrl(url, filename);
    URL.revokeObjectURL(url);
};

export const downloadByUrl = (url: string, filename = "") => {
    const link = document.createElement("a");
    link.download = filename;
    link.style.display = "none";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export type FileSizeUnit = "B" | "KB" | "MB" | "GB" | "TB" | "PB" | "EB" | "ZB" | "YB";

const fileSizeArray: FileSizeUnit[] = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

export const getFileSize = (raw: number, options: {inputUnit?: FileSizeUnit; outputUnit?: FileSizeUnit; fractionDigits?: number} = {}) => {
    const {inputUnit, outputUnit} = options;
    const fractionDigits = options.fractionDigits ?? 2;
    if (outputUnit) {
        const inputIndex = inputUnit ? fileSizeArray.indexOf(inputUnit) : 0;
        const outputIndex = fileSizeArray.indexOf(outputUnit);
        raw *= Math.pow(1024, inputIndex - outputIndex);
        return `${raw.toFixed(fractionDigits)}${outputUnit}`;
    } else {
        let index = inputUnit ? fileSizeArray.indexOf(inputUnit) : 0;
        while (raw >= 1024 && index < fileSizeArray.length - 1) {
            raw /= 1024;
            index++;
        }
        return `${raw.toFixed(fractionDigits)}${fileSizeArray[index]}`;
    }
};
