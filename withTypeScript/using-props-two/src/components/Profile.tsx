import { getImageUrl } from '../utils';

import { Scientist } from '../types';

interface ProfileProps {
	person: Scientist;
	imageSize?: number;
}

// export default function Profile({ person, imageSize = 70 }: ProfileProps) {
const Profile: React.FC<ProfileProps> = ({ person, imageSize = 70 }) => {
	if (!person) {
		return <div>No person data available.</div>;
	}

	const imageSrc = getImageUrl(person);

	return (
		<section className='profile'>
			<h2>{person.name}</h2>
			<img
				className='avatar'
				src={imageSrc}
				alt={person.name}
				width={imageSize}
				height={imageSize}
			/>
			<ul>
				<li>
					<b>Profession:</b> {person.profession}
				</li>
				<li>
					<b>Awards: {person.awards.length} </b>({person.awards.join(', ')})
				</li>
				<li>
					<b>Discovered: </b>
					{person.discovery}
				</li>
			</ul>
		</section>
	);
};

export default Profile;
