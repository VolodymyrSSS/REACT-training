import Header from './components/header/Header';
import Articles from './components/articles/Articles.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about/About.jsx';

function App() {
	return (
		<Router>
			<div style={{ padding: '20px 40px' }}>
				<Header />
				<Switch>
					<Route path='/' exact={true}>
						<Articles />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
