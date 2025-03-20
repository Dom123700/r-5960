
export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  cookTime: number;
  prepTime?: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  categories?: string[];
  ingredients?: string[];
  instructions?: string[];
  isFavorite?: boolean;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Classic Spaghetti Carbonara",
    description: "A traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    cookTime: 25,
    prepTime: 10,
    servings: 4,
    difficulty: "Medium",
    categories: ["Dinner", "Italian"],
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano, grated",
      "50g Parmesan, grated",
      "Freshly ground black pepper",
      "Salt to taste"
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook the spaghetti according to package instructions until al dente.",
      "While the pasta is cooking, heat a large skillet over medium heat. Add the diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together the eggs, grated Pecorino, and plenty of black pepper.",
      "Drain the pasta, reserving about 1/2 cup of the pasta water.",
      "Working quickly, add the hot pasta to the skillet with the pancetta. Remove from heat.",
      "Pour the egg and cheese mixture over the pasta, tossing constantly with tongs. Add a splash of the reserved pasta water to create a creamy sauce.",
      "Serve immediately with extra grated Parmesan and black pepper on top."
    ],
    isFavorite: true
  },
  {
    id: "2",
    name: "Avocado Toast with Poached Egg",
    description: "A simple and nutritious breakfast option that's both delicious and Instagram-worthy.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    cookTime: 15,
    prepTime: 5,
    servings: 2,
    difficulty: "Easy",
    categories: ["Breakfast", "Healthy"],
    ingredients: [
      "2 slices of sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp white vinegar",
      "Red pepper flakes",
      "Salt and pepper to taste",
      "Fresh herbs (optional)"
    ],
    instructions: [
      "Toast the sourdough bread slices until golden and crispy.",
      "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl. Mash with a fork and season with salt and pepper.",
      "Fill a saucepan with water, add white vinegar, and bring to a gentle simmer.",
      "Crack an egg into a small bowl, then slide it gently into the simmering water. Repeat with the second egg.",
      "Poach for 3-4 minutes until the whites are set but the yolks are still runny.",
      "Spread the mashed avocado on the toasted bread slices.",
      "Using a slotted spoon, remove the poached eggs and place on top of the avocado toast.",
      "Sprinkle with red pepper flakes, additional salt and pepper, and fresh herbs if desired."
    ]
  },
  {
    id: "3",
    name: "Chocolate Chip Cookies",
    description: "Classic homemade chocolate chip cookies with a soft center and crispy edges.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    cookTime: 12,
    prepTime: 15,
    servings: 24,
    difficulty: "Easy",
    categories: ["Dessert", "Baking"],
    ingredients: [
      "225g unsalted butter, softened",
      "200g granulated sugar",
      "200g brown sugar",
      "2 large eggs",
      "1 tsp vanilla extract",
      "385g all-purpose flour",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "350g chocolate chips"
    ],
    instructions: [
      "Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper.",
      "In a large bowl, cream together the butter, granulated sugar, and brown sugar until light and fluffy.",
      "Beat in the eggs one at a time, then stir in the vanilla.",
      "In a separate bowl, combine the flour, baking soda, and salt.",
      "Gradually mix the dry ingredients into the wet ingredients.",
      "Fold in the chocolate chips.",
      "Drop rounded tablespoons of dough onto the prepared baking sheet.",
      "Bake for 10-12 minutes, or until edges are golden but the center is still soft.",
      "Allow cookies to cool on the baking sheet for 2 minutes before transferring to a wire rack to cool completely."
    ]
  },
  {
    id: "4",
    name: "Thai Green Curry",
    description: "A fragrant and spicy Thai curry with tender chicken and fresh vegetables.",
    image: "https://images.unsplash.com/photo-1604248896793-06e8431eaf26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    cookTime: 35,
    prepTime: 15,
    servings: 4,
    difficulty: "Medium",
    categories: ["Dinner", "Thai"],
    ingredients: [
      "500g chicken breast, sliced",
      "4 tbsp green curry paste",
      "400ml coconut milk",
      "200ml chicken stock",
      "1 zucchini, sliced",
      "1 red bell pepper, sliced",
      "100g green beans, trimmed",
      "2 tbsp fish sauce",
      "1 tbsp brown sugar",
      "Fresh Thai basil leaves",
      "2 kaffir lime leaves",
      "1 tbsp vegetable oil",
      "Lime wedges for serving"
    ],
    instructions: [
      "Heat the oil in a large pan or wok over medium heat.",
      "Add the green curry paste and cook for 1-2 minutes until fragrant.",
      "Add the sliced chicken and stir-fry until the chicken is no longer pink.",
      "Pour in the coconut milk and chicken stock, bring to a simmer.",
      "Add the kaffir lime leaves and simmer for 5 minutes.",
      "Add the vegetables and cook for another 5-7 minutes until the vegetables are tender but still crisp.",
      "Stir in the fish sauce and brown sugar.",
      "Taste and adjust seasoning if needed.",
      "Remove from heat and stir in Thai basil leaves.",
      "Serve hot with steamed rice and lime wedges."
    ]
  },
  {
    id: "5",
    name: "Fresh Berry Smoothie Bowl",
    description: "A nutritious and vibrant smoothie bowl topped with fresh fruits and granola.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    cookTime: 5,
    prepTime: 10,
    servings: 1,
    difficulty: "Easy",
    categories: ["Breakfast", "Healthy", "Vegan"],
    ingredients: [
      "1 frozen banana",
      "1 cup mixed frozen berries",
      "1/4 cup almond milk",
      "1 tbsp almond butter",
      "1 tsp honey or maple syrup (optional)",
      "Toppings: Fresh berries, sliced banana, granola, chia seeds, coconut flakes"
    ],
    instructions: [
      "Place the frozen banana, mixed berries, almond milk, and almond butter in a blender.",
      "Blend until smooth and creamy, adding more almond milk if needed to achieve desired consistency.",
      "Taste and add honey or maple syrup if desired for extra sweetness.",
      "Pour the smoothie into a bowl.",
      "Arrange toppings artfully on top of the smoothie.",
      "Serve immediately."
    ]
  },
  {
    id: "6",
    name: "Homemade Margherita Pizza",
    description: "A classic Italian pizza with a crispy crust, fresh tomatoes, mozzarella, and basil.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    cookTime: 15,
    prepTime: 90,
    servings: 4,
    difficulty: "Medium",
    categories: ["Dinner", "Italian"],
    ingredients: [
      "500g bread flour",
      "7g instant yeast",
      "10g salt",
      "325ml warm water",
      "1 tbsp olive oil, plus extra for brushing",
      "400g can of plum tomatoes",
      "2 garlic cloves, minced",
      "250g fresh mozzarella, torn into pieces",
      "Fresh basil leaves",
      "Salt and pepper to taste"
    ],
    instructions: [
      "For the dough, mix the flour, yeast, and salt in a large bowl. Make a well in the center and add the water and olive oil.",
      "Mix together to form a dough, then knead for 10 minutes until smooth and elastic.",
      "Place the dough in an oiled bowl, cover, and let rise in a warm place for about 1 hour or until doubled in size.",
      "Meanwhile, prepare the sauce by blending the tomatoes with minced garlic, salt, and pepper.",
      "Preheat your oven to the highest temperature (usually 475-500°F/250-260°C) with a pizza stone or baking sheet inside.",
      "Divide the dough into 4 equal pieces and roll each into a thin circle.",
      "Brush the dough with olive oil, spread the tomato sauce, and top with mozzarella pieces.",
      "Carefully transfer the pizza to the preheated stone or baking sheet and bake for 10-15 minutes until the crust is golden and the cheese is bubbling.",
      "Remove from oven, top with fresh basil leaves, and serve immediately."
    ]
  },
  {
    id: "7",
    name: "Beef and Vegetable Stir-Fry",
    description: "A quick and flavorful stir-fry with tender beef and crisp vegetables in a savory sauce.",
    image: "https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    cookTime: 15,
    prepTime: 15,
    servings: 4,
    difficulty: "Easy",
    categories: ["Dinner", "Asian", "Quick"],
    ingredients: [
      "500g beef sirloin, thinly sliced",
      "2 tbsp vegetable oil",
      "1 onion, sliced",
      "2 bell peppers, sliced",
      "2 carrots, julienned",
      "2 cups broccoli florets",
      "3 garlic cloves, minced",
      "1 tbsp ginger, grated",
      "3 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp sesame oil",
      "1 tbsp cornstarch dissolved in 2 tbsp water",
      "Green onions for garnish",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "Marinate the beef slices in 1 tablespoon of soy sauce for 10 minutes.",
      "Heat 1 tablespoon of oil in a wok or large skillet over high heat.",
      "Add the beef and stir-fry for 2-3 minutes until browned. Remove and set aside.",
      "Add the remaining oil to the wok, then add garlic and ginger. Stir-fry for 30 seconds until fragrant.",
      "Add the onions, bell peppers, carrots, and broccoli. Stir-fry for 3-4 minutes until vegetables are crisp-tender.",
      "Return the beef to the wok, add the remaining soy sauce, oyster sauce, and sesame oil.",
      "Stir in the cornstarch mixture and cook for 1-2 minutes until the sauce thickens.",
      "Garnish with green onions and sesame seeds.",
      "Serve hot with steamed rice."
    ]
  },
  {
    id: "8",
    name: "Lemon Blueberry Pancakes",
    description: "Fluffy pancakes bursting with blueberries and a hint of lemon for a perfect breakfast treat.",
    image: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    cookTime: 20,
    prepTime: 10,
    servings: 4,
    difficulty: "Easy",
    categories: ["Breakfast", "Sweet"],
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1/2 tsp baking soda",
      "1/4 tsp salt",
      "2 large eggs",
      "2 cups buttermilk",
      "3 tbsp unsalted butter, melted",
      "1 tsp vanilla extract",
      "Zest of 1 lemon",
      "1 tbsp lemon juice",
      "1 1/2 cups fresh blueberries",
      "Maple syrup for serving",
      "Extra blueberries and lemon slices for garnish"
    ],
    instructions: [
      "In a large bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.",
      "In another bowl, whisk the eggs, then add the buttermilk, melted butter, vanilla extract, lemon zest, and lemon juice.",
      "Pour the wet ingredients into the dry ingredients and stir until just combined. Some lumps are okay.",
      "Gently fold in the blueberries.",
      "Let the batter rest for 5 minutes.",
      "Heat a griddle or non-stick pan over medium heat. Lightly grease with butter or oil.",
      "Pour 1/4 cup of batter onto the griddle for each pancake.",
      "Cook until bubbles form on the surface, about 2-3 minutes, then flip and cook for another 1-2 minutes until golden brown.",
      "Serve warm with maple syrup and garnish with extra blueberries and lemon slices."
    ]
  }
];

export const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Snack",
  "Appetizer",
  "Salad",
  "Soup",
  "Pasta",
  "Baking",
  "Drink",
  "Vegan",
  "Vegetarian",
  "Gluten-Free",
  "Healthy",
  "Quick",
  "Italian",
  "Asian",
  "Mexican",
  "Thai"
];

export const getRecipeById = (id: string): Recipe | undefined => {
  return recipes.find(recipe => recipe.id === id);
};

export const getRecipesByCategory = (category: string): Recipe[] => {
  const normalizedCategory = category.toLowerCase();
  return recipes.filter(
    recipe => recipe.categories?.some(cat => cat.toLowerCase() === normalizedCategory)
  );
};

export const searchRecipes = (query: string): Recipe[] => {
  const normalizedQuery = query.toLowerCase();
  return recipes.filter(recipe => {
    // Search in name, description, ingredients, and categories
    return (
      recipe.name.toLowerCase().includes(normalizedQuery) ||
      recipe.description.toLowerCase().includes(normalizedQuery) ||
      recipe.ingredients?.some(ingredient => 
        ingredient.toLowerCase().includes(normalizedQuery)
      ) ||
      recipe.categories?.some(category => 
        category.toLowerCase().includes(normalizedQuery)
      )
    );
  });
};
