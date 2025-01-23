import { Scientist } from '../types';

export function getImageUrl(person: Scientist, size: string = 's'): string {
	return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}
