import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders a title', () => {
	render(<Header title={'Groceries List'} />);
	const titleElement = screen.getByText(/Groceries List/i);
	expect(titleElement).toBeInTheDocument();
});
