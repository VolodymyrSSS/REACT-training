import { getImageUrl } from '../utils';

export function Avatar({ person }) {
	return (
		<img
			className='avatar'
			src={getImageUrl(person)}
			alt={person.name}
			width={50}
			height={50}
		/>
	);
}
