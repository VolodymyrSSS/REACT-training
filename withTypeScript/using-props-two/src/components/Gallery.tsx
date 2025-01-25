import React from 'react';
import Profile from './Profile';
import { scientists } from '../scientistsData';

const Gallery: React.FC = () => {
	return (
		<div>
			<h1>Notable Scientists</h1>
			<Profile person={scientists[0]} />
			<Profile person={scientists[1]} />
		</div>
	);
};

export default Gallery;
