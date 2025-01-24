import { JSX } from 'react/jsx-runtime';

interface ItemProps {
	name: string;
	isPacked: boolean;
}

function Item(props: ItemProps): JSX.Element | null {
	let { name, isPacked } = props;

	// Conditionally returning JSX with if/else statement
	// if (isPacked) {
	// 	return <li className='item'>{name} ✅</li>;
	// }
	// return <li className='item'>{name}</li>;

	// Conditionally returning nothing with null
	// if (isPacked) {
	// 	return null;
	// }
	// return <li className='item'>{name}</li>;

	// Conditional (ternary) operator (? :)
	// return <li className='item'>{isPacked ? <del>{name}</del> : name}</li>;
	// or like
	// return <li className='item'>{isPacked ? name + ' ✅' : name + ' ❌'}</li>;

	// Conditionally assigning JSX to a variable
	let itemContent = name;
	if (isPacked) {
		itemContent = name + ' ✅';
	}
	return <li className='item'>{itemContent}</li>;
}

export default Item;
