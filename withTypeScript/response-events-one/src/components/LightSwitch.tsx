import React from 'react';

export default function LightSwitch(): React.ReactElement {
	function handleClick(): void {
		let bodyStyle = document.body.style;

		if (bodyStyle.backgroundColor === 'black') {
			bodyStyle.backgroundColor = 'tan';
		} else {
			bodyStyle.backgroundColor = 'black';
		}
	}

	return <button onClick={handleClick}>Toggle the lights</button>;
}
