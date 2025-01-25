import React from 'react';

interface ItemProps {
	name: string;
	importance: number;
}

const Item: React.FC<ItemProps> = ({ name, importance }) => {
	return (
		<li className='item'>
			{name}
			{importance > 0 && ' '}
			{importance > 0 && <i>(Importance: {importance})</i>}
		</li>
	);
};

export default Item;
