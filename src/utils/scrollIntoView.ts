export default function scrollIntoView(id) {
	console.log(document?.getElementById(id));

	document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
