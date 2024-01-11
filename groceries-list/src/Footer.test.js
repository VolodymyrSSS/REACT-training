import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test("renders Footer's paragraphs correctly", () => {
	render(<Footer />);

	const paraElement = screen.getByText(
		'Copyright © 2023 Created by Volodymyr Sych'
	);
	expect(paraElement).toBeInTheDocument();

	const wordExpression = screen.getByText(/by Volodymyr Sych/);
	expect(wordExpression).toBeInTheDocument();

	const wordExpression2 = screen.getByText((content) =>
		content.startsWith('Copyright')
	);
	expect(wordExpression2).toBeInTheDocument();
});
