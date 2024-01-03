import Gallery from './components/Gallery/Gallery.jsx';

import { today } from '../src/constants';
import { formatDay } from '../src/utils/formateDate';

function App() {
	return (
		<div>
			<header>
				<h4>
					These scientists' achivement defined as for {formatDay(today)}{' '}
					{today.getDate()}/{today.getMonth() + 1}/{today.getFullYear()}
				</h4>
			</header>
			<main>
				<Gallery />;
			</main>
		</div>
	);
}

export default App;
