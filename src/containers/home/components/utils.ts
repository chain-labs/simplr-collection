export function randomIntFromInterval(min, max) {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const array = [1, 2, 3, 4, 5, 6];
export const random = array
	.map((item) => ({ key: randomIntFromInterval(1, 100), val: item }))
	.sort((a, b) => a.key - b.key)
	.map((item) => item.val);

export const roadmapArray = [
	{
		status: 'done',
		text: 'Launch Simplr Collection on Polygon and Ethereum',
		headText: '2022, Q1',
		position: '-27%',
		arrowTop: '35%',
	},
	{
		status: 'progress',
		text: 'Make Draft feature live',
		headText: 'Q2',
		arrowTop: '35%',
	},
	{
		status: 'not done',
		text: 'Exclusive community for SEAT holders goes live',
		headText: 'Q2',
		arrowTop: '10%',
		position: '-15%',
	},
	{
		status: 'not done',
		text: 'Polish Simplr Collection App',
		headText: 'Q3',
		arrowTop: '35%',
	},
	{
		status: 'not done',
		text: 'Roll out new Collection type.',
		headText: 'Q3',
		arrowTop: '35%',
		position: '-15%',
	},
	{
		status: 'not done',
		text: 'Partner with multiple NFT communities',
		headText: 'Q3',
		arrowTop: '35%',
	},
	{
		status: 'not done',
		text: 'Launch NFT marketplace for Primary Sales',
		headText: 'Q3',
		arrowTop: '35%',
		position: '-15%',
	},
	{
		status: 'not done',
		text: 'Adding Analytics to Creator Dashboard ',
		headText: 'Q4',
		arrowTop: '35%',
	},
	{
		status: 'not done',
		text: 'Simplr Collection goes Multichain',
		headText: '2023, Q2',
		arrowTop: '35%',
		position: '-27%',
	},
	{
		status: 'not done',
		text: 'Simplr Bridge Beta goes live',
		headText: 'Q4',
		arrowTop: '35%',
	},
];
