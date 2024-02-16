import { getImageUrl } from '../../utils/getImageUrl';
import './Avatar.css';

const ratio = window.devicePixelRatio; // could show a sharper image for high DPI screens

export default function Avatar({ person, size }) {
	// request the closest image size based on the size prop
	let thumbnailSize = 's'; // default size
	if (size * ratio > 90) {
		thumbnailSize = 'b';
	}
	return (
		<img
			className='avatar'
			src={getImageUrl(person, thumbnailSize)}
			alt={person.name}
			width={size}
			height={size}
		/>
	);
}
