export function formatDay(date) {
	return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}
