import { ScientistPerson } from '../types';

export function getImageUrl(person: ScientistPerson): string {
	return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}
