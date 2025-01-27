import React from 'react';
import { getImageUrl } from '../utils/utils';
import { ScientistPerson } from '../types';

interface ScientistProps {
	person: ScientistPerson;
}

export default function Scientist({ person }: ScientistProps) {
	return (
		<li>
			<img src={getImageUrl(person)} alt={person.name} />
			<p>
				<b>{person.name}:</b> {person.profession} known for{' '}
				{person.accomplishment}
			</p>
		</li>
	);
}
