// import JSEncrypt from "jsencrypt";

// export function RSAEncrypt(data: any) {
// 	const jsEncrypt = new JSEncrypt();
// 	jsEncrypt.setPublicKey(publicKey);
// 	let plainText = JSON.stringify(data);
// 	const limit = 127;
// 	const result = [];
// 	while (plainText.length > 0) {
// 		result.push(jsEncrypt.encrypt(plainText.slice(0, limit)));
// 		plainText = plainText.slice(limit);
// 	}
// 	return encodeURIComponent(result.join("&&&&&"));
// }

export function dataURLtoBlob(dataURL: string) {
	const arr = dataURL.split(",");
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {type: mime});
}