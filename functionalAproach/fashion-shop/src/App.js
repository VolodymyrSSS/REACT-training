import Arrivals from './components/arrivals/Arrivals.jsx';
import Brands from './components/brands/Brands.jsx';
import Header from './components/header/Header.jsx';
import Promo from './components/promo/Promo.jsx';

function App() {
	return (
		<div>
			<Header />
			<Promo />
			<Brands />
			<Arrivals />
		</div>
	);
}

export default App;
