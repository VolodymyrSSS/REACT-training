import React from 'react';

import Item from './Item';

export default function PackingList() {
	return (
		<section>
			<h1>Modest Raviolie's Packing List</h1>
			<ul className='packing-list'>
				<Item importance={9} name='Scubadiving equipment' />
				<Item importance={0} name='Harley Devidson Helmet' />
				<Item importance={6} name='Portable 30L sack' />
				<Item importance={0} name='Scrudriver 30mm' />
				<Item importance={7} name='Leserman' />
				<Item importance={2} name='Chocolate box' />
			</ul>
		</section>
	);
}
