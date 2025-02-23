// export default function StoryTray({ stories }) {
// 	stories.push({
// 		id: 'create',
// 		label: 'Create Story',
// 	});

// 	return (
// 		<ul>
// 			{stories.map((story) => (
// 				<li key={story.id}>{story.label}</li>
// 			))}
// 		</ul>
// 	);
// }

/*
Notice how whenever the clock updates, “Create Story” is added twice. This serves as a hint that we have a mutation during rendering—Strict Mode calls components twice to make these issues more noticeable.
StoryTray function is not pure. By calling push on the received stories array (a prop!), it is mutating an object that was created before StoryTray started rendering. This makes it buggy and very difficult to predict.
The simplest first fix is to not touch the array at all, and render “Create Story” separately:
*/
// export default function StoryTray({ stories }) {
// 	return (
// 		<ul>
// 			{stories.map((story) => (
// 				<li key={story.id}>{story.label}</li>
// 			))}
// 			<li>Create Story</li>
// 		</ul>
// 	);
// }

/*Alternatively, we could create a new array (by copying the existing one) before you push an item into it:*/

export default function StoryTray({ stories }) {
	// Copy the array!
	let storiesToDisplay = stories.slice();

	// Does not affect the original array:
	storiesToDisplay.push({
		id: 'create',
		label: 'Create Story',
	});

	return (
		<ul>
			{storiesToDisplay.map((story) => (
				<li key={story.id}>{story.label}</li>
			))}
		</ul>
	);
}

/*
  This keeps such mutation local and your rendering function pure. However, it is still need to be careful: for example, if you tried to change any of the array’s existing items, you’d have to clone those items too.
*/
