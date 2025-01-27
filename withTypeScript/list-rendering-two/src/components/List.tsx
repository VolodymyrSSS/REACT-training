import React from 'react';

import { ScientistPerson } from '../types';
import { people } from '../data/scientists';
import { getImageUrl } from '../utils/getImageUrl';

export default function List() {
	const chemists = people.filter(
		(person: ScientistPerson) => person.profession === 'chemist'
	);
	const everyoneElse = people.filter(
		(person: ScientistPerson) => person.profession !== 'chemist'
	);

	return (
		<article>
			<h2>Chemists</h2>
			<ul>
				{chemists.map((person) => (
					<li key={person.id}>
						<img src={getImageUrl(person)} alt={person.name} />
						<p>
							<b>{person.name}:</b>
							{' ' + person.profession + ' '}
							known for {person.accomplishment}
						</p>
					</li>
				))}
			</ul>
			<h2>Everyone Else</h2>
			<ul>
				{everyoneElse.map((person) => (
					<li key={person.id}>
						<img src={getImageUrl(person)} alt={person.name} />
						<p>
							<b>{person.name}:</b>
							{' ' + person.profession + ' '}
							known for {person.accomplishment}
						</p>
					</li>
				))}
			</ul>
		</article>
	);
}
