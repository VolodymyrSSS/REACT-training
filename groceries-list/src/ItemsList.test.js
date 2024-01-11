import { render, screen } from '@testing-library/react';
import ItemsList from './ItemsList';

describe('List of items', () => {
	const items = ['Pizza', 'Soda pop', 'Milk and soured cream'];

	test('renders correctly', () => {
		render(<ItemsList items={items} />);
		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();
	});

	test('renders a number of items in the list', () => {
		render(<ItemsList items={items} />);
		const listElements = screen.getAllByRole('listitem');
		// expect(listElements).toHaveLength(3);
		expect(listElements).toHaveLength(items.length);
	});

	test('matches even if items contain additional elements', () => {
		expect(['Pizza', 'Soda pop', 'Milk and soured cream', 'Herring']).toEqual(
			expect.arrayContaining(items)
		);
	});

	test('does not match if it does not contain expected elements', () => {
		expect(['Pizza', 'Soda pop', 'Rotten eggs']).not.toEqual(
			expect.arrayContaining(items)
		);
	});
});

describe('Checkboxes', () => {
	const items = ['Pizza', 'Soda pop', 'Milk and soured cream'];

	test('are rendered number equals to the added items number', () => {
		render(<ItemsList items={items} />);
		const checkboxElements = screen.queryAllByRole('checkbox');
		expect(checkboxElements).toHaveLength(items.length);
	});
});
