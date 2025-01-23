import React from 'react';
import { getImageUrl } from '../utils/getImageUrl';
import { Scientist } from '../types';

interface AvatarProps {
	size: number;
	person: Scientist;
}

// function Avatar(props: AvatarProps): JSX.Element {
const Avatar: React.FC<AvatarProps> = (props) => {
	let person = props.person;
	let size = props.size;

	return (
		<img
			className='avatar'
			src={getImageUrl(person)}
			alt={person.name}
			width={size}
			height={size}
		/>
	);
};

export default Avatar;
