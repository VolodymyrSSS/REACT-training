import Card from '../Card/Card';
import Avatar from '../Avatar/Avatar';
import './Profile.css';

export default function Profile({ person, size = 100 }) {
	return (
		<article style={person.theme}>
			<Card title={person.name}>
				<Avatar person={person} size={size} />
			</Card>
			<Card title='Famous by:'>
				<ul>
					<li>
						<b>Profession:</b> {person.profession}
					</li>
					<li>
						<b>Awards: {person.awards.length} </b>({person.awards.join(', ')})
					</li>
					<li>
						<b>Discovered: </b>
						{person.discovery.join(', ')}
					</li>
				</ul>
			</Card>
		</article>
	);
}
