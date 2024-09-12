import Card from '../card/Card';
import './Arrivals.css';

import cat01Img from './../../img/categories/cat-01.jpg';
import cat02Img from './../../img/categories/cat-02.jpg';
import cat03Img from './../../img/categories/cat-03.jpg';

const Arrivals = () => {
	return (
		<sections classList='arrivals'>
			<div className='container'>
				<div className='arrivals__header'>
					<h2 className='title-2'>NEW ARRIVALS</h2>
				</div>
				<div className='arrivals__cards'>
					<div>
						<Card title='Hoodies & Sweetshirt' img={cat01Img} />
					</div>
					<div>
						<Card title='Coats & Parkas' img={cat02Img} />
					</div>
					<div>
						<Card title='Tees & T-Shirt' img={cat03Img} />
					</div>
				</div>
			</div>
		</sections>
	);
};

export default Arrivals;
