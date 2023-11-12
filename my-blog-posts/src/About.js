import React from 'react';

const About = () => {
	return (
		<main className='About'>
			<h2>About</h2>
			<p style={{ marginTop: '1rem' }}>
				This blog app was created
				<br />
				by <span style={{ fontWeight: 'bold' }}>Volodymyr Sych</span>
				<br /> in the REACT training series.
			</p>
			<p>
				I have this avatar and
				<br />
				if you see it with the possibility of 62%
				<br />
				it was made by me.
			</p>
			<img src='./assets/myAvatar.jpeg' alt='Avatar'></img>
		</main>
	);
};

export default About;
