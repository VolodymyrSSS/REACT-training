export interface RecipeDataProps {
	id: string;
	name: string;
	ingredients: string[];
}

export const recipes: RecipeDataProps[] = [
	{
		id: 'greek-salad',
		name: 'Greek Salad',
		ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
	},
	{
		id: 'hawaiian-pizza',
		name: 'Hawaiian Pizza',
		ingredients: [
			'pizza crust',
			'pizza sauce',
			'mozzarella',
			'ham',
			'pineapple',
		],
	},
	{
		id: 'hummus',
		name: 'Hummus',
		ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
	},
];
