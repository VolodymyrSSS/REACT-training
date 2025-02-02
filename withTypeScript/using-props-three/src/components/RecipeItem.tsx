import React from 'react';
import { RecipeDataProps } from '../data';

export default function RecipeItem({ name, ingredients }: RecipeDataProps) {
	return (
		<div>
			<h2>{name}</h2>
			<ul>
				{ingredients.map((ingredient, index) => (
					<li key={ingredient + index}>{ingredient}</li>
				))}
			</ul>
		</div>
	);
}
