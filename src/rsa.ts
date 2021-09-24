import JSEncrypt from "jsencrypt";

export class RSA {
    static encrypt(data: any, publicKey: string, separator = "&&&&&") {
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(publicKey);
        let plainText = JSON.stringify(data);
        if (!plainText) {
            return "";
        }
        const limit = 63;
        const result = [];
        while (plainText.length > 0) {
            result.push(jsEncrypt.encrypt(plainText.slice(0, limit)) || "");
            plainText = plainText.slice(limit);
        }
        return encodeURIComponent(result.join(separator));
    }

    static decrypt(text: string, privateKey: string, separator = "&&&&&") {
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPrivateKey(privateKey);
        const texts = decodeURIComponent(text).split(separator);
        let str = "";
        texts.forEach((v) => {
            str += jsEncrypt.decrypt(v) || "";
        });
        return JSON.parse(str);
    }
}
