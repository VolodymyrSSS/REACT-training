import React from 'react';

interface CardProps {
	title: string;
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
	return (
		<div className='card'>
			<div className='card-content'>
				<h1>{title}</h1>
				{children}
			</div>
		</div>
	);
};

export default Card;
