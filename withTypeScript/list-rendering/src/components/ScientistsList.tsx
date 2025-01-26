import React from 'react';
import { people } from '../data/scientists';
import { getImageUrl } from '../utils/utils';
import { Scientist } from '../types';

export default function ScientistsList() {
	const scientists = people.map((person: Scientist) => (
		<li key={person.id}>
			<img src={getImageUrl(person)} alt={person.name} />
			<p>
				<b>{person.name}:</b> {person.profession} known for{' '}
				{person.accomplishment}
			</p>
		</li>
	));

	return (
		<>
			<article>
				<h1>The Scientists List</h1>
				<ul>{scientists}</ul>
			</article>
		</>
	);
}
