import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
	const items = ['Pizza', 'Soda pop', 'Milk and soured cream'];

	test("is not rendered message 'Your list is empty.' when there are items in a list", () => {
		render(<Content items={items} />);

		const messageElement = screen.queryByText('Your list is empty');
		expect(messageElement).not.toBeInTheDocument();
	});
});
