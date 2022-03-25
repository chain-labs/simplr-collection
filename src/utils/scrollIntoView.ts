export default function scrollIntoView(id) {
	document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
