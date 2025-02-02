import { recipes } from '../data';
import RecipeItem from './RecipeItem';

// Initial code:
// export default function RecipeList() {
// 	return (
// 		<div>
// 			<h1>Recipes</h1>
// 			{recipes.map((recipe) => (
// 				<div key={recipe.id}>
// 					<h2>{recipe.name}</h2>
// 					<ul>
// 						{recipe.ingredients.map((ingredient) => (
// 							<li key={ingredient}>{ingredient}</li>
// 						))}
// 					</ul>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

export default function RecipeList() {
	return (
		<article>
			<h1>Recipes</h1>
			{recipes.map((recipe) => (
				<RecipeItem key={recipe.id} {...recipe} />
			))}
		</article>
	);
}
