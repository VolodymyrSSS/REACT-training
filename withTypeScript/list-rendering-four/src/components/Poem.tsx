import React, { JSX } from 'react';
import { poem } from './poemTachibanaHokushi';

// Initial code:
// export default function Poem() {
// 	return (
// 		<article>
// 			{poem.lines.map((line, index) => (
// 				<p key={index}>{line}</p>
// 			))}
// 		</article>
// 	);
// }

export default function Poem() {
	let output: JSX.Element[] = [];

	// Fill the output array
	// This is a rare case where index as a key is acceptable because a poem’s lines will never reorder
	poem.lines.forEach((line, i) => {
		output.push(<hr key={i + '-separator'} />);
		output.push(<p key={i + '-text'}>{line}</p>);
	});
	// Remove the first <hr />
	output.shift();

	return <article>{output}</article>;
}

// Alternatively, I could render a collection of Fragments which contain hr and p.
// However, the <>...</> shorthand syntax doesn’t support passing keys, so I have to
// write <Fragment> explicitly:
// export default function Poem(): JSX.Element {
// 	return (
// 		<article>
// 			{poem.lines.map((line, i) => (
// 				<React.Fragment key={i}>
// 					{i > 0 && <hr />}
// 					<p>{line}</p>
// 				</React.Fragment>
// 			))}
// 		</article>
// 	);
// }
