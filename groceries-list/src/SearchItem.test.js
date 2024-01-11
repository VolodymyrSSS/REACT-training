import { render, screen } from '@testing-library/react';
import SearchItem from './SearchItem';

test("renders Footer's paragraphs correctly", () => {
	render(<SearchItem />);

	const nameElement = screen.getByPlaceholderText('Search items');
	expect(nameElement).toBeInTheDocument();
});
