const key = 'visited';
export default function isFirstVisit(): boolean {
	const currentValue = window.localStorage.getItem(key);
	if (currentValue === null) {
		window.localStorage.setItem(key, 'true');
		return true;
	}
	return false;
}
