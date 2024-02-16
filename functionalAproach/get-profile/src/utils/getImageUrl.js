// export function getImageUrl(person) {
// 	return 'https://i.imgur.com/' + person.imageId + person.imageSize + '.jpg';
// }

export function getImageUrl(person, size = 's') {
	return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}
