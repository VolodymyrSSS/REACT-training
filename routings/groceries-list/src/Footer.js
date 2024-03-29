import React from 'react';

const Footer = ({ length }) => {
	const today = new Date();
	return (
		<footer>
			<p>
				{length} list {length === 1 ? 'item' : 'items'}
			</p>
			<p>Copyright &copy; {today.getFullYear()} Created by Volodymyr Sych</p>
		</footer>
	);
};

export default Footer;
