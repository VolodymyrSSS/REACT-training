import React from 'react';

/* code to be refactored:

function Drink({ name }) {
	return (
		<section>
			<h1>{name}</h1>
			<dl>
				<dt>Part of plant</dt>
				<dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
				<dt>Caffeine content</dt>
				<dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
				<dt>Age</dt>
				<dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
			</dl>
		</section>
	);
}*/

export default function Drink({ name }: { name: string }) {
	let part: string | undefined;
	let caffeine: string | undefined;
	let age: string | undefined;

	if (name === 'tea') {
		part = 'leaf';
		caffeine = '15–70 mg/cup';
		age = '4,000+ years';
	} else if (name === 'coffee') {
		part = 'bean';
		caffeine = '80–185 mg/cup';
	}

	return (
		<section>
			<h1>{name}</h1>
			<dl>
				<dt>Part of plant</dt>
				<dd>{part}</dd>
				<dt>Caffeine content</dt>
				<dd>{caffeine}</dd>
				<dt>Age</dt>
				<dd>{age}</dd>
			</dl>
		</section>
	);
}
