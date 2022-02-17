export default async (func: Function, timeout: number): Promise<any> => {
	return new Promise(async (resolve, reject) => {
		const timer = setTimeout(() => {
			reject(new Error(`Timeout of ${timeout}ms exceeded.`));
		}, timeout);
		const result = await func(resolve, reject);
		clearTimeout(timer);
		resolve(result);
	});
};
