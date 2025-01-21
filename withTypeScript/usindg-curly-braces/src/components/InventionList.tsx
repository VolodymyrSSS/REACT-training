import React from 'react';

interface InventionProps {
	baseUrl: string;
	person: {
		theme: React.CSSProperties;
		name: string;
		imageId: string;
		imageSize: string;
	};
}

const InventionList: React.FC<InventionProps> = ({ baseUrl, person }) => {
	return (
		<div style={person.theme}>
			<h1>{person.name}'s Todos</h1>
			<img
				className='avatar'
				src={baseUrl + person.imageId + person.imageSize + '.jpg'}
				alt={person.name}
			/>
			<ul>
				<li>Improve the videophone</li>
				<li>Prepare aeronautics lectures</li>
				<li>Work on the alcohol-fuelled engine</li>
			</ul>
		</div>
	);
};

export default InventionList;
