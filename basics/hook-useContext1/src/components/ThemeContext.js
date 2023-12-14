// actually it is a custom hook
import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// again s custome hook to use useContext in functional Component
export function useTheme() {
	return useContext(ThemeContext);
}
export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
	const [darkTheme, setDarkTheme] = useState(true);

	function toggleTheme() {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	}

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}
