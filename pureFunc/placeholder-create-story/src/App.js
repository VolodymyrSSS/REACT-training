import { useState } from 'react';
import StoryTray from './components/StoryTray.js';
import { useTime } from './hooks/useTime.js';

let initialStories = [
	{ id: 0, label: "Elly's Story" },
	{ id: 1, label: "Taylor's Story" },
	{ id: 2, label: "Walter's Story" },
	{ id: 3, label: "Emma's Story" },
];

export default function App() {
	let [stories, setStories] = useState([...initialStories]);
	let time = useTime();

	// Prevent the memory from growing forever
	if (stories.length > 100) {
		stories.length = 100;
	}

	const addStory = () => {
		const nextId = Math.max(...stories.map((s) => s.id)) + 1; // Find the next ID
		const newStory = { id: nextId, label: `New Story ${nextId}` };
		setStories([...stories, newStory]); // Update state by adding new story
	};

	return (
		<div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
			<h2>It is {time.toLocaleTimeString()} now.</h2>
			<button className='btn-add' onClick={addStory}>
				Add Story
			</button>
			<StoryTray stories={stories} />
		</div>
	);
}
