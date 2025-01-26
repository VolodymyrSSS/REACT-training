import { Scientist } from '../types.js';

export function getImageUrl(person: Scientist): string {
	return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}
