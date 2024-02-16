import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders a title', () => {
	render(<Header title={'Groceries List'} />);

	const nameElement1 = screen.getByText('Groceries List');
	expect(nameElement1).toBeInTheDocument();

	const nameElement2 = screen.getByText('groceries list', { exact: false });
	expect(nameElement2).toBeInTheDocument();

	const nameElement3 = screen.getByText(/List/);
	expect(nameElement3).toBeInTheDocument();

	const nameElement4 = screen.getByText(/groceries list/i);
	expect(nameElement4).toBeInTheDocument();

	const nameElement5 = screen.getByText(/^groceries list$/i);
	expect(nameElement5).toBeInTheDocument();
});
