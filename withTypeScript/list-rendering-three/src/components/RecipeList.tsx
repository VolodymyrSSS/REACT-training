import React from 'react';
import { recipes, Recipe } from '../data';

export default function RecipeList() {
	return (
		<div>
			<h1>Recipes</h1>
			{recipes.map((recipe: Recipe) => (
				<div key={recipe.id}>
					<h2>{recipe.name}</h2>
					<ul>
						{recipe.ingredients.map((ingredient, index) => (
							<li key={ingredient + index}>{ingredient}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
