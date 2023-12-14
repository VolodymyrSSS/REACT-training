import { render, screen } from '@testing-library/react';
import App from './App';

describe('Header', () => {
	test('title renders corectly', () => {
		render(<App />);
		const title = screen.getByText('Groceries List');
		expect(title).toBeInTheDocument();
	});
});
