class CustomStorage {
	private _field: string;
	storage: Storage;
	constructor(type: "local" | "session", field: string) {
		if (type === "local") {
			this.storage = localStorage;
		}
		if (type === "session") {
			this.storage = sessionStorage;
		}
		this._field = field;
	}

	save(key: string, value: any) {
		let data = {};
		try {
			data = JSON.parse(this.storage.getItem(this._field)) || {};
		} catch (error) {}
		data[key] = JSON.stringify(value);
		this.storage.setItem(this._field, JSON.stringify(data));
	}

	load(key: string, isObject = false) {
		let data = null;
		try {
			data = JSON.parse(this.storage.getItem(this._field));
		} catch (error) {
			return isObject ? null : "";
		}
		if (data && data[key]) {
			const result = data[key];
			if (isObject) {
				try {
					return JSON.parse(result);
				} catch (error) {
					console.warn(`JSON parse error: loading from storage: ${result}.`);
					return null;
				}
			}
			return result;
		}
		return "";
	}

	remove(key: string) {
		let data = null;
		try {
			data = JSON.parse(this.storage.getItem(this._field));
		} catch (error) {}
		if (data && data[key]) {
			delete data[key];
			this.storage.setItem(this._field, JSON.stringify(data));
		}
	}

	clear() {
		this.storage.setItem(this._field, "");
	}
}

export class LocalStorage extends CustomStorage {
	constructor(field: string) {
		super("local", field);
	}
}

export class SessionStorage extends CustomStorage {
	constructor(field: string) {
		super("session", field);
	}
}

// export const local = new LocalStorage("cad-data");
// export const session = new SessionStorage("cad-data");

// export class Cookie {
//   static save(key: string, value: any, expiresInDays = 30) {
//     const expires = new Date();
//     expires.setTime(expires.getTime() + expiresInDays * 24 * 60 * 60 * 1000);
//     document.cookie = `${key}=${encrypt(JSON.stringify(value), key)}; expires=${expires}`;
//   }

//   static load(key: string, isObject = false) {
//     const cookie = decodeURIComponent(document.cookie)
//       .split(";")
//       .map(v => v.trim());
//     for (const cv of cookie) {
//       if (cv.indexOf(key) === 0) {
//         const result = decrypt(cv.substring(key.length + 1), key);
//         if (isObject) {
//           try {
//             return JSON.parse(result);
//           } catch (error) {
//             console.warn(`JSON parse error when loading from cookie: ${result}.`);
//             return null;
//           }
//         }
//         return result;
//       }
//     }
//     return null;
//   }

//   static remove(key: string) {
//     const cookie = decodeURIComponent(document.cookie)
//       .split(";")
//       .map(v => v.trim());
//     for (const i in cookie) {
//       if (cookie[i].indexOf(key) === 0) {
//         document.cookie = `${key}=; expires=${new Date(0)}`;
//       }
//     }
//   }
// }
