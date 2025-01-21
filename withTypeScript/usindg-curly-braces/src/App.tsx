import React from 'react';
import InventionList from './components/InventionList';
import { baseUrl, person } from './scientistsData';

function App() {
	return <InventionList baseUrl={baseUrl} person={person} />;
}

export default App;
