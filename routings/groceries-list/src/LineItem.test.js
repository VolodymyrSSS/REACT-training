import { render, screen } from '@testing-library/react';
import LineItem from './LineItem';

describe('Item', () => {
	const item = ['Pizza'];

	test('renders an item from the list', () => {
		render(<LineItem item={item} />);
		const listElement = screen.queryByRole('listitem');
		expect(listElement).toBeInTheDocument();
	});

	test('is not rendered when the item is not added', () => {
		render(<LineItem item={item} />);
		const itemElement = screen.queryByText('Pizza');
		expect(itemElement).not.toBeInTheDocument();
	});
});

describe('Checkbox', () => {
	const item = ['Pizza'];

	test('is rendered when the item is added', () => {
		render(<LineItem item={item} />);
		const checkboxElement = screen.queryByRole('checkbox');
		expect(checkboxElement).toBeInTheDocument();
	});
});
