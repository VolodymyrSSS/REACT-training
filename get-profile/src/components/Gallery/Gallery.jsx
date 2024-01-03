import Profile from '../Profile/Profile';

import './Gallery.css';

export default function Gallery() {
	return (
		<section>
			<p className='animated-text'>
				<span className='letter'>N</span>
				<span className='letter'>o</span>
				<span className='letter'>t</span>
				<span className='letter'>i</span>
				<span className='letter'>c</span>
				<span className='letter'>e</span>
				<span className='letter'>a</span>
				<span className='letter'>b</span>
				<span className='letter'>l</span>
				<span className='letter'>e</span>
				<span className='space'></span>
				{/* <span clasName='word'>Scientists</span> */}
				<span className='blinkword'> Scientists</span>

				<div className='animation-square'>Have a look!!!</div>
			</p>
			<div className='cards'>
				<Profile
					person={{
						imageId: 'szV5sdG',
						theme: {
							backgroundColor: 'violet',
							color: 'navy',
						},
						name: 'Maria Skłodowska-Curie',
						profession: 'physicist and chemist',
						discovery: ['polonium chemical element'],
						awards: [
							'Nobel Prize in Physics',
							'Nobel Prize in Chemistry',
							'Davy Medal',
							'Matteucci Medal',
						],
					}}
				/>
				<Profile
					person={{
						imageId: 'MK3eW3A',
						theme: {
							backgroundColor: 'navy',
							color: 'orange',
						},
						name: 'Katherine Johnson',
						profession: 'mathematician',
						discovery: ['calculating trajectories for NASA missions'],
						awards: [
							'Presidential Medal of Freedom',
							'Silver Snoopy',
							'NASA Group Achievement Award',
							'Congressional Gold Medal',
						],
					}}
				/>
				<Profile
					person={{
						imageId: 'lICfvbD',
						theme: {
							backgroundColor: 'dodgerblue',
							color: 'wheat',
						},
						name: 'Aklilu Lemma',
						profession: 'pathobiologist',
						discovery: ['an affordable preventative against bilharzia'],
						awards: ['the Right Livelihood Award of Sweden'],
					}}
				/>
				<Profile
					person={{
						imageId: 'QIrZWGI',
						theme: {
							backgroundColor: 'MediumSeaGreen',
							color: 'navy',
						},
						name: 'Alan L. Hart',
						profession: 'physician, radiologist, writer',
						discovery: [
							'the use of X-ray photography in tuberculosis detection',
						],
						awards: [
							'recognized as pre-eminent in the field of tubercular roentgenology',
							'published over nine short stories and four novels',
							'became one of the first trans men in the United States',
						],
					}}
				/>
				<Profile
					person={{
						imageId: 'yXOvdOS',
						theme: {
							backgroundColor: 'brown',
							color: 'yellow',
						},
						name: 'Hedy Lamarr',
						profession: 'actress and technology inventor',
						discovery: [
							'Invent new traffic lights',
							'Rehearse a movie scene',
							'Improve the spectrum technology',
						],
						awards: [
							'Viktor Kaplan Medal of the Austrian Association of Patent Holders and Inventors',
							'star on the Hollywood Walk of Fame',
							'Oscars of inventing',
						],
					}}
				/>
				<Profile
					person={{
						imageId: '7vQD0fP',
						theme: {
							backgroundColor: 'darkgrey',
							color: 'black',
						},
						name: 'Gregorio Y. Zara',
						profession: 'engineer, physicist',
						discovery: [
							'Improve the videophone',
							'Prepare aeronautics lectures',
							'Work on the alcohol-fuelled engine',
						],
						awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
					}}
				/>
				<Profile
					person={{
						imageId: 'YfeOqp2',
						theme: {
							backgroundColor: 'tomato',
							color: 'black',
						},
						name: 'Katsuko Saruhashi',
						profession: 'geochemist',
						discovery: ['a method for measuring carbon dioxide in seawater'],
						awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
					}}
				/>
			</div>
		</section>
	);
}
