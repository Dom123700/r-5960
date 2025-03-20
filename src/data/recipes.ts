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
  },
  // --- New Polish Recipes ---
  {
    id: "9",
    name: "Classic Polish Pierogi",
    description: "Traditional Polish dumplings filled with a blend of potato and farmer’s cheese, served with a rich onion-butter sauce.",
    image: "https://th.bing.com/th/id/R.e7dfad8999e1c5b4462f0881084df47f?rik=Bol5DYPEJD8QPQ&pid=ImgRaw&r=0",
    cookTime: 90,
    prepTime: 30,
    servings: 4,
    difficulty: "Medium",
    categories: ["Dinner"],
    ingredients: [
      "500g all-purpose flour",
      "1/2 tsp salt",
      "2 large eggs",
      "250ml warm water",
      "400g potatoes, boiled and mashed",
      "200g farmer’s cheese",
      "1 large onion, thinly sliced",
      "Salt and pepper to taste",
      "2 tbsp butter"
    ],
    instructions: [
      "In a bowl, mix the flour, salt, eggs, and warm water until a smooth dough forms; cover and let rest for 30 minutes.",
      "Combine the mashed potatoes with farmer’s cheese; season with salt and pepper.",
      "Roll the dough thinly on a floured surface and cut into circles about 7-8cm in diameter.",
      "Place a spoonful of filling in the center of each circle, fold over, and press the edges firmly to seal.",
      "Bring a large pot of salted water to boil and cook the pierogi in batches until they float to the surface.",
      "Meanwhile, sauté the onions in butter until golden brown.",
      "Serve the boiled pierogi drizzled with the caramelized onions."
    ]
  },
  {
    id: "10",
    name: "Hearty Polish Bigos",
    description: "A robust hunter’s stew with sauerkraut, fresh cabbage, assorted meats, and a blend of spices that deepen in flavor.",
    image: "https://th.bing.com/th/id/OIP.FqjQH9fBxDKn8RF6IZIT4wHaE8?rs=1&pid=ImgDetMain",
    cookTime: 120,
    prepTime: 20,
    servings: 6,
    difficulty: "Hard",
    categories: ["Dinner"],
    ingredients: [
      "500g sauerkraut, rinsed",
      "300g fresh cabbage, shredded",
      "200g pork shoulder, cubed",
      "200g smoked sausage, sliced",
      "150g beef, cubed",
      "1 large onion, chopped",
      "2 garlic cloves, minced",
      "1 cup red wine",
      "1 bay leaf",
      "5 juniper berries",
      "1 tsp paprika",
      "Salt and pepper to taste",
      "2 tbsp vegetable oil"
    ],
    instructions: [
      "Heat oil in a large pot and brown the pork, beef, and sausage until all sides are seared.",
      "Add chopped onion and garlic, cooking until softened.",
      "Stir in the sauerkraut and fresh cabbage, then pour in the red wine.",
      "Season with bay leaf, juniper berries, paprika, salt, and pepper.",
      "Bring to a simmer, cover, and let cook for at least 2 hours, stirring occasionally.",
      "Adjust seasoning before serving."
    ]
  },
  {
    id: "11",
    name: "Traditional Polish Żurek",
    description: "A tangy sour rye soup enriched with sausage, boiled eggs, and aromatic herbs—perfect for a chilly day.",
    image: "https://th.bing.com/th/id/OIP.vwo2iuz06AEHII0qEBgcogHaE7?rs=1&pid=ImgDetMain",
    cookTime: 60,
    prepTime: 10,
    servings: 4,
    difficulty: "Medium",
    categories: ["Soup"],
    ingredients: [
      "1 liter sour rye starter (zakwas)",
      "500ml water or light broth",
      "200g smoked sausage, sliced",
      "4 hard-boiled eggs",
      "1 large onion, diced",
      "2 garlic cloves, minced",
      "1 tsp marjoram",
      "Salt and pepper to taste",
      "1 tbsp vegetable oil"
    ],
    instructions: [
      "Heat oil in a pot and sauté the onion and garlic until translucent.",
      "Add the sausage slices and fry for a few minutes until they begin to crisp.",
      "Pour in the water or broth and bring to a simmer.",
      "Stir in the sour rye starter and marjoram; season with salt and pepper.",
      "Let the soup simmer for 20 minutes, then serve with halved boiled eggs."
    ]
  },
  {
    id: "12",
    name: "Polish Placki Ziemniaczane",
    description: "Crispy potato pancakes with a golden crust, served with sour cream or apple sauce.",
    image: "https://www.thespruceeats.com/thmb/ZhxeYunMx-zdx0nZwoTorKCbq-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/polish-potato-pancakes-recipe-1137080-hero-01-f0beefea0f4e4ed4b3684c9435809257.jpg",
    cookTime: 40,
    prepTime: 15,
    servings: 4,
    difficulty: "Easy",
    categories: ["Appetizer"],
    ingredients: [
      "500g potatoes, peeled and grated",
      "1 medium onion, grated",
      "2 large eggs",
      "3 tbsp all-purpose flour",
      "Salt and pepper to taste",
      "Oil for frying",
      "Sour cream or apple sauce, for serving"
    ],
    instructions: [
      "Squeeze the excess moisture from the grated potatoes and onion.",
      "Mix the potatoes, onion, eggs, and flour in a bowl; season with salt and pepper.",
      "Heat oil in a frying pan over medium heat.",
      "Spoon a portion of the mixture into the pan and flatten gently into a pancake.",
      "Fry until golden brown on both sides (about 3-4 minutes per side).",
      "Drain on paper towels and serve with sour cream or apple sauce."
    ]
  },
  {
    id: "13",
    name: "Polish Gołąbki",
    description: "Tender cabbage rolls stuffed with a savory mix of minced meat and rice, simmered in a rich tomato sauce.",
    image: "https://i.pinimg.com/originals/83/f5/57/83f5577731b3348d705ad8e9504d4e7f.jpg",
    cookTime: 75,
    prepTime: 20,
    servings: 6,
    difficulty: "Medium",
    categories: ["Dinner"],
    ingredients: [
      "1 large head of cabbage",
      "500g ground pork or beef",
      "100g rice, cooked",
      "1 large onion, finely chopped",
      "2 garlic cloves, minced",
      "400ml tomato puree",
      "1 cup beef or vegetable broth",
      "Salt and pepper to taste",
      "1 tsp dried thyme",
      "1 tbsp vegetable oil"
    ],
    instructions: [
      "Core the cabbage and carefully separate the leaves. Blanch them in boiling water for 5 minutes until pliable.",
      "In a bowl, combine the ground meat, cooked rice, chopped onion, garlic, salt, and pepper.",
      "Place a spoonful of the filling on each cabbage leaf and roll tightly.",
      "Heat oil in a large pot and arrange the cabbage rolls seam-side down.",
      "Pour the tomato puree and broth over the rolls, then sprinkle with dried thyme.",
      "Cover and simmer for about 45 minutes until the cabbage is tender and the flavors meld."
    ]
  },
  {
    id: "14",
    name: "Polish Kopytka",
    description: "Soft, pillowy potato dumplings that serve as a comforting side dish or a hearty main course when tossed in a creamy sauce.",
    image: "https://annainthekitchen.com/wp-content/uploads/2020/10/kopytkapolish127.jpg",
    cookTime: 45,
    prepTime: 15,
    servings: 4,
    difficulty: "Easy",
    categories: ["Side Dish"],
    ingredients: [
      "600g boiled potatoes, mashed",
      "200g all-purpose flour (plus extra for dusting)",
      "1 egg",
      "Salt to taste",
      "2 tbsp butter",
      "Fresh parsley, chopped (optional)"
    ],
    instructions: [
      "Mix the mashed potatoes, egg, flour, and salt until a soft dough forms.",
      "On a floured surface, roll the dough into a log about 2cm thick.",
      "Cut the log into 2cm pieces and gently press each piece with a fork.",
      "Boil a large pot of salted water and cook the dumplings until they float to the top.",
      "Drain and toss with melted butter and chopped parsley before serving."
    ]
  },
  {
    id: "15",
    name: "Polish Barszcz Czerwony (Red Beet Soup)",
    description: "A vibrant and earthy beet soup that is both refreshing and deeply flavored, traditionally served with a dollop of sour cream.",
    image: "https://th.bing.com/th/id/R.35fdfea3fd78b645311c78e6730097da?rik=Scw5xhFWMPoUNg&pid=ImgRaw&r=0",
    cookTime: 60,
    prepTime: 10,
    servings: 4,
    difficulty: "Easy",
    categories: ["Soup"],
    ingredients: [
      "500g beets, peeled and diced",
      "1 large onion, chopped",
      "2 garlic cloves, minced",
      "1 liter vegetable broth",
      "2 tbsp lemon juice",
      "Salt and pepper to taste",
      "1 tbsp olive oil",
      "Sour cream, for garnish"
    ],
    instructions: [
      "Heat olive oil in a large pot and sauté the chopped onion and garlic until soft.",
      "Add the diced beets and cook for about 5 minutes, stirring occasionally.",
      "Pour in the vegetable broth and bring to a simmer; cook until the beets are tender (about 40 minutes).",
      "Stir in lemon juice, salt, and pepper.",
      "Serve hot with a spoonful of sour cream on top."
    ]
  },
  {
    id: "16",
    name: "Creamy Polish Sernik (Cheesecake)",
    description: "A light and creamy cheesecake with a buttery crust and a tangy twist from traditional Polish farmer’s cheese.",
    image: "https://annainthekitchen.com/wp-content/uploads/2022/10/polish-cheesecake-1-960x640.jpg",
    cookTime: 75,
    prepTime: 15,
    servings: 8,
    difficulty: "Medium",
    categories: ["Dessert"],
    ingredients: [
      "250g digestive biscuits, crushed",
      "100g unsalted butter, melted",
      "500g farmer’s cheese",
      "250g cream cheese",
      "200g sugar",
      "3 large eggs",
      "1 tsp vanilla extract",
      "Zest of 1 lemon"
    ],
    instructions: [
      "Mix the crushed biscuits with the melted butter and press the mixture firmly into the base of a springform pan.",
      "Beat together the farmer’s cheese, cream cheese, and sugar until smooth.",
      "Add the eggs one at a time, then stir in the vanilla extract and lemon zest.",
      "Pour the filling over the crust and smooth the top.",
      "Bake in a preheated oven at 170°C (340°F) for about 55 minutes or until set.",
      "Cool completely and chill in the refrigerator for at least 4 hours before serving."
    ]
  },
  {
    id: "17",
    name: "Traditional Polish Pączki",
    description: "Fluffy, deep-fried doughnuts filled with a sweet jam and dusted with powdered sugar for a delightfully indulgent treat.",
    image: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_768,h_512/https://polishfoodies.com/wp-content/uploads/2022/01/paczki3-768x512.jpeg",
    cookTime: 120,
    prepTime: 30,
    servings: 12,
    difficulty: "Hard",
    categories: ["Dessert"],
    ingredients: [
      "500g all-purpose flour",
      "50g sugar",
      "1/2 tsp salt",
      "2 tsp instant yeast",
      "200ml warm milk",
      "4 egg yolks",
      "100g unsalted butter, softened",
      "Zest of 1 orange",
      "1 tsp vanilla extract",
      "Jam of your choice (e.g., rose hip or plum)",
      "Powdered sugar for dusting",
      "Oil for deep frying"
    ],
    instructions: [
      "Dissolve the yeast in warm milk with a pinch of sugar; let stand for 5 minutes.",
      "Mix the flour, remaining sugar, salt, egg yolks, butter, orange zest, and vanilla extract in a large bowl.",
      "Add the yeast mixture and knead into a smooth, elastic dough. Cover and let rise for 1 hour.",
      "Roll out the dough to 1cm thickness and cut rounds using a cookie cutter.",
      "Place a small dollop of jam in the center of each round, fold over, and seal the edges carefully.",
      "Allow the pączki to rest for another 30 minutes before deep frying in oil heated to around 175°C until golden brown.",
      "Drain on paper towels and dust generously with powdered sugar."
    ]
  },
  {
    id: "18",
    name: "Polish Makowiec (Poppy Seed Roll)",
    description: "A festive yeast roll swirled with a rich, aromatic poppy seed filling, perfect for celebrations or a sweet treat any day.",
    image: "https://th.bing.com/th/id/R.dc4f55f6505cb8788d4875ce7e1ff6a6?rik=xnpytE3ESbKJzg&pid=ImgRaw&r=0",
    cookTime: 150,
    prepTime: 30,
    servings: 10,
    difficulty: "Medium",
    categories: ["Dessert"],
    ingredients: [
      "500g all-purpose flour",
      "2 tsp dry yeast",
      "100ml warm milk",
      "80g sugar",
      "2 large eggs",
      "100g unsalted butter, melted",
      "A pinch of salt",
      "300g poppy seed filling (ground poppy seeds, honey, raisins, and lemon zest)",
      "Powdered sugar for dusting"
    ],
    instructions: [
      "Combine warm milk, yeast, and a teaspoon of sugar in a bowl; let it activate for 10 minutes.",
      "Mix the flour, remaining sugar, eggs, melted butter, and salt to form a smooth dough; knead until elastic.",
      "Cover the dough and let it rise for 1 hour until doubled in size.",
      "Roll the dough into a rectangle on a floured surface.",
      "Evenly spread the poppy seed filling over the dough, leaving a small border at the edges.",
      "Roll up the dough tightly along the longer side and pinch the seam to seal.",
      "Place the roll on a baking tray, cover, and let rise for another 30 minutes.",
      "Bake at 180°C (350°F) for 30-35 minutes until golden.",
      "Cool and dust with powdered sugar before slicing."
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
