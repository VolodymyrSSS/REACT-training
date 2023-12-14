import React from 'react';
import FunctionContextComponent from './components/Function ContextComponent';
// import ClassContextComponent from './components/ClassContextComponent';

import { ThemeProvider } from './components/ThemeContext';

export default function App() {
	return (
		<ThemeProvider>
			<FunctionContextComponent />
			{/* <ClassContextComponent /> */}
		</ThemeProvider>
	);
}
