import './Brands.css';

import hm from './../../img/brands/HM.png';
import obey from './../../img/brands/Obey.png';
import shopify from './../../img/brands/Shopify.png';
import lacoste from './../../img/brands/Lacoste.png';
import levis from './../../img/brands/Levis.png';
import amazon from './../../img/brands/Amazon.png';

const Brands = () => {
	return (
		<section className='brands'>
			<div className='container'>
				<ul className='brands__list'>
					<li>
						<a href='https://www.hm.com/ua/'>
							<img src={hm} alt='H&M' />
						</a>
					</li>
					<li>
						<a href='https://obeyclothing.eu/'>
							<img src={obey} alt='Obey' />
						</a>
					</li>
					<li>
						<a href='https://www.shopify.com/'>
							<img src={shopify} alt='Shopify' />
						</a>
					</li>
					<li>
						<a href='https://www.lacoste.ua/'>
							<img src={lacoste} alt='Lacoste' />
						</a>
					</li>
					<li>
						<a href='https://md-fashion.ua/store/levis'>
							<img src={levis} alt='Levis' />
						</a>
					</li>
					<li>
						<a href='https://www.amazon.com/'>
							<img src={amazon} alt='Amazon' />
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Brands;
