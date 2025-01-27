import React from 'react';

import Scientist from './Scientist';

import { people } from '../data/scientists';
import { ScientistPerson } from '../types';

export default function ScientistsList() {
	const scientists = people.map((person: ScientistPerson) => (
		<Scientist key={person.id} person={person} />
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
