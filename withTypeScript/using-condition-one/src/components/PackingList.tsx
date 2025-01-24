import Item from './Item';
import './PackingList.css';

export default function PackingList() {
	return (
		<section>
			<h1>Sally Ride's Packing List</h1>
			<ul className='packing-list'>
				<Item isPacked={true} name='Swimming suit' />
				<Item isPacked={true} name='Helmet with a golden leaf suvenir' />
				<Item isPacked={false} name='Photo of Modest' />
				<Item isPacked={true} name='Stamp collection' />
				<Item isPacked={false} name='10 bars of chocolate' />
			</ul>
		</section>
	);
}
