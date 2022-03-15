export function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const array = [1, 2, 3, 4, 5, 6];
export const random = array
	.map((item) => ({ key: randomIntFromInterval(1, 100), val: item }))
	.sort((a, b) => a.key - b.key)
	.map((item) => item.val);
