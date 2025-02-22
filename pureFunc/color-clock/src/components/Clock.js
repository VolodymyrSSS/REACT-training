// This code doesn’t work

// export default function Clock({ time }) {
// 	let hours = time.getHours();

// 	if (hours >= 0 && hours <= 6) {
// 		document.getElementById('time').className = 'night';
// 	} else {
// 		document.getElementById('time').className = 'day';
// 	}

// 	return <h1 id='time'>{time.toLocaleTimeString()}</h1>;
// }

// In this example, the side effect (modifying the DOM) was not necessary at all. You only needed to return JSX.
// It was fixed by calculating the className and including it in the render output

export default function Clock({ time }) {
	let hours = time.getHours();

	let className;

	if (hours >= 0 && hours <= 6) {
		className = 'night';
	} else {
		className = 'day';
	}

	return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}
