import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the number of items', () => {
	render(<Footer length={2} />);
	const lengthItems = screen.getByText('2 list items');
	expect(lengthItems).toEqual('2 list items');
});
