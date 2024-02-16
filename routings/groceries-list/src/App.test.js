import { render, screen } from '@testing-library/react';
import App from './App';

describe('Header', () => {
	test('should render title correctly', () => {
		render(<App />);
		const pageHeading = screen.getByRole('heading', {
			name: 'Groceries List',
		});
		expect(pageHeading).toBeInTheDocument();

		const pageHeading2 = screen.getByRole('heading', {
			level: 1,
		});
		expect(pageHeading2).toBeInTheDocument();
	});
});

describe('Add Item field', () => {
	test('should render input field AddItem correctly', () => {
		render(<App />);
		const addElement = screen.getByRole('textbox');
		expect(addElement).toBeInTheDocument();

		const nameElement = screen.getByRole('textbox', {
			name: 'Add Item',
		});
		expect(nameElement).toBeInTheDocument();

		const nameElement2 = screen.getByLabelText('Add Item', {
			selector: 'input',
		});
		expect(nameElement2).toBeInTheDocument();

		const nameElement3 = screen.getByPlaceholderText('Add Item');
		expect(nameElement3).toBeInTheDocument();
	});
});

describe('Search field', () => {
	test('should render input field Search items correctly', () => {
		render(<App />);
		const addElement = screen.getByRole('searchbox');
		expect(addElement).toBeInTheDocument();

		const nameElement = screen.getByRole('searchbox', {
			name: 'Search',
		});
		expect(nameElement).toBeInTheDocument();
	});
});

describe('Main block', () => {
	const items = ['Pizza', 'Soda pop', 'Milk and soured cream'];

	test('should render main correctly', () => {
		render(<App />);
		const mainElement = screen.getByRole('main');
		expect(mainElement).toBeInTheDocument();
	});

	test("is not rendered error message 'Error: failed to fetch' when can retrive the items", () => {
		render(<App items={items} />);

		const errorMessage = screen.queryByText('Your list is empty');
		expect(errorMessage).not.toBeInTheDocument();
	});
});

describe('Footer block', () => {
	test('should render footer correctly', () => {
		render(<App />);
		const footerElement = screen.getByRole('contentinfo');
		expect(footerElement).toBeInTheDocument();
	});
});
