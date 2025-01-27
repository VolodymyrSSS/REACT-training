import { ScientistPerson } from '../types.js';

export function getImageUrl(person: ScientistPerson): string {
	return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}
