import { render, screen } from '@testing-library/react';
import AddItem from './AddItem';

test('renders Add Item button correctly', () => {
	render(<AddItem />);

	const addItemElement = screen.getByRole('button');
	expect(addItemElement).toBeInTheDocument();

	const nameElement = screen.getByText('Add Item');
	expect(nameElement).toBeInTheDocument();

	const nameElement2 = screen.getByLabelText('Add Item', {
		selector: 'button',
	});
	expect(nameElement2).toBeInTheDocument();
});
