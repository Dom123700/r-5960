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
    categories: ["Dinner", "Polish"],
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
    categories: ["Dinner", "Polish"],
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
    categories: ["Soup", "Polish"],
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
    categories: ["Appetizer", "Polish"],
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
    categories: ["Dinner", "Polish"],
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
    categories: ["Side Dish", "Polish"],
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
    categories: ["Soup", "Polish"],
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
    categories: ["Dessert", "Polish"],
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
    categories: ["Dessert", "Polish"],
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
    categories: ["Dessert", "Polish"],
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
  }// --- Additional 30 Original Recipes ---
{
  id: "19",
  name: "Spicy Chickpea Tacos",
  description: "Vibrant and flavorful tacos featuring crispy chickpeas, tangy slaw, and a kick of spice.",
  image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
  cookTime: 20,
  prepTime: 15,
  servings: 4,
  difficulty: "Easy",
  categories: ["Lunch", "Dinner", "Vegan", "Quick"],
  ingredients: [
    "1 can chickpeas, drained and rinsed",
    "2 tbsp olive oil",
    "1 tsp cumin",
    "1 tsp smoked paprika",
    "Salt and pepper to taste",
    "8 small taco shells",
    "2 cups shredded lettuce",
    "1 cup salsa",
    "Lime wedges for serving"
  ],
  instructions: [
    "Preheat the oven to 200°C.",
    "Toss chickpeas with olive oil, cumin, smoked paprika, salt, and pepper.",
    "Spread on a baking tray and roast for 15 minutes until crispy.",
    "Fill taco shells with chickpeas, lettuce, and salsa.",
    "Squeeze fresh lime juice over the top and serve immediately."
  ]
},
{
  id: "20",
  name: "Mediterranean Quinoa Salad",
  description: "A refreshing salad loaded with quinoa, cherry tomatoes, cucumbers, olives, and feta, dressed in lemon and olive oil.",
  image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
  cookTime: 15,
  prepTime: 10,
  servings: 4,
  difficulty: "Easy",
  categories: ["Lunch", "Salad", "Healthy"],
  ingredients: [
    "1 cup quinoa",
    "2 cups water",
    "1 cup cherry tomatoes, halved",
    "1 cucumber, diced",
    "1/2 cup kalamata olives, pitted and sliced",
    "100g feta cheese, crumbled",
    "Juice of 1 lemon",
    "2 tbsp olive oil",
    "Salt and pepper to taste"
  ],
  instructions: [
    "Rinse the quinoa and cook with water until fluffy; let cool.",
    "In a large bowl, combine quinoa, tomatoes, cucumber, olives, and feta.",
    "Drizzle with lemon juice and olive oil, season with salt and pepper, and toss gently.",
    "Serve chilled or at room temperature."
  ]
},
{
  id: "21",
  name: "Herb-Crusted Salmon with Lemon Butter",
  description: "A succulent salmon fillet with a crispy herb crust and a rich lemon butter sauce.",
  image: "https://images.unsplash.com/photo-1589923188900-1c2f1405c716?auto=format&fit=crop&w=800&q=80",
  cookTime: 20,
  prepTime: 10,
  servings: 2,
  difficulty: "Medium",
  categories: ["Dinner", "Seafood", "Healthy"],
  ingredients: [
    "2 salmon fillets",
    "1 cup breadcrumbs",
    "2 tbsp mixed chopped herbs (parsley, dill, thyme)",
    "Zest of 1 lemon",
    "3 tbsp butter",
    "Salt and pepper to taste",
    "1 tbsp olive oil"
  ],
  instructions: [
    "Preheat your oven to 200°C.",
    "Season salmon with salt and pepper, then press onto a mix of breadcrumbs, herbs, and lemon zest.",
    "Heat olive oil in a pan and sear the salmon briefly on each side.",
    "Transfer to the oven for 8-10 minutes until cooked.",
    "Melt butter with extra lemon juice and drizzle over the salmon before serving."
  ]
},
{
  id: "22",
  name: "Vegetable Stir-Fry with Cashew Sauce",
  description: "A colorful medley of stir-fried vegetables tossed in a creamy, nutty cashew sauce.",
  image: "https://images.unsplash.com/photo-1572448862520-df05d6d9a94d?auto=format&fit=crop&w=800&q=80",
  cookTime: 15,
  prepTime: 15,
  servings: 4,
  difficulty: "Easy",
  categories: ["Dinner", "Vegan", "Asian", "Quick"],
  ingredients: [
    "1 red bell pepper, sliced",
    "1 yellow bell pepper, sliced",
    "1 broccoli head, cut into florets",
    "1 cup snap peas",
    "1 carrot, julienned",
    "1/2 cup cashews",
    "2 garlic cloves, minced",
    "2 tbsp soy sauce",
    "1 tbsp rice vinegar",
    "1 tbsp sesame oil",
    "1 tsp grated ginger"
  ],
  instructions: [
    "In a blender, combine cashews, soy sauce, rice vinegar, ginger, and a splash of water to form a smooth sauce.",
    "Heat sesame oil in a wok and stir-fry garlic for 30 seconds.",
    "Add all vegetables and stir-fry for about 5-7 minutes until crisp-tender.",
    "Pour in the cashew sauce and toss to coat evenly.",
    "Serve hot over steamed rice or noodles."
  ]
},
{
  id: "23",
  name: "Rustic Ratatouille",
  description: "A hearty vegetable stew featuring eggplant, zucchini, bell peppers, and tomatoes simmered with Provençal herbs.",
  image: "https://images.unsplash.com/photo-1598515213697-2993a345f7d8?auto=format&fit=crop&w=800&q=80",
  cookTime: 40,
  prepTime: 15,
  servings: 4,
  difficulty: "Medium",
  categories: ["Dinner", "Vegan", "French", "Healthy"],
  ingredients: [
    "1 eggplant, diced",
    "2 zucchinis, sliced",
    "2 bell peppers, chopped",
    "4 tomatoes, diced",
    "1 onion, sliced",
    "3 garlic cloves, minced",
    "2 tbsp olive oil",
    "1 tsp dried thyme",
    "1 tsp dried rosemary",
    "Salt and pepper to taste"
  ],
  instructions: [
    "Heat olive oil in a large pot and sauté onion and garlic until translucent.",
    "Add eggplant, zucchinis, and bell peppers; cook for 5 minutes.",
    "Stir in tomatoes and herbs, season with salt and pepper.",
    "Simmer uncovered for 25 minutes until vegetables are tender.",
    "Serve warm with crusty bread."
  ]
},
{
  id: "24",
  name: "Baked Eggplant Parmesan",
  description: "A lighter twist on a classic Italian dish featuring breaded, baked eggplant layered with marinara sauce and melted cheese.",
  image: "https://images.unsplash.com/photo-1601924582970-0a918d2d0a2c?auto=format&fit=crop&w=800&q=80",
  cookTime: 35,
  prepTime: 20,
  servings: 4,
  difficulty: "Medium",
  categories: ["Dinner", "Italian", "Vegetarian"],
  ingredients: [
    "2 medium eggplants, sliced into 1/2cm rounds",
    "1 cup breadcrumbs",
    "2 eggs, beaten",
    "2 cups marinara sauce",
    "200g mozzarella cheese, sliced",
    "50g Parmesan cheese, grated",
    "Salt and pepper to taste",
    "Olive oil spray"
  ],
  instructions: [
    "Preheat the oven to 200°C.",
    "Dip eggplant slices in egg then coat in breadcrumbs; place on a baking sheet and spray lightly with olive oil.",
    "Bake for 20 minutes until golden.",
    "Layer baked eggplant in a dish with marinara sauce and cheeses.",
    "Bake for an additional 10 minutes until cheese melts; serve hot."
  ]
},
{
  id: "25",
  name: "Coconut Lime Chicken",
  description: "Tender chicken simmered in a creamy coconut and zesty lime sauce, perfect for a tropical dinner.",
  image: "https://images.unsplash.com/photo-1576402187878-df9c0d21db70?auto=format&fit=crop&w=800&q=80",
  cookTime: 30,
  prepTime: 15,
  servings: 4,
  difficulty: "Medium",
  categories: ["Dinner", "Asian", "Healthy"],
  ingredients: [
    "500g chicken thighs, boneless and skinless",
    "400ml coconut milk",
    "Juice and zest of 2 limes",
    "2 garlic cloves, minced",
    "1 tbsp grated ginger",
    "1 red chili, sliced",
    "Salt to taste",
    "1 tbsp olive oil",
    "Fresh cilantro for garnish"
  ],
  instructions: [
    "Heat olive oil in a pan and brown the chicken on all sides.",
    "Add garlic, ginger, and red chili; sauté briefly.",
    "Pour in coconut milk and lime juice/zest; simmer for 20 minutes until chicken is tender.",
    "Season with salt and garnish with fresh cilantro before serving."
  ]
},
{
  id: "26",
  name: "Mushroom Risotto",
  description: "A creamy risotto loaded with a medley of mushrooms and finished with a hint of truffle oil for extra luxury.",
  image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  cookTime: 30,
  prepTime: 10,
  servings: 4,
  difficulty: "Hard",
  categories: ["Dinner", "Italian", "Vegetarian"],
  ingredients: [
    "1½ cups Arborio rice",
    "200g mixed mushrooms, sliced",
    "1 onion, finely chopped",
    "2 garlic cloves, minced",
    "4 cups vegetable broth, kept warm",
    "½ cup white wine",
    "2 tbsp butter",
    "50g Parmesan cheese, grated",
    "1 tsp truffle oil",
    "Salt and pepper to taste"
  ],
  instructions: [
    "Sauté onion and garlic in butter until soft.",
    "Add rice and toast for 2 minutes until slightly translucent.",
    "Deglaze with white wine, then gradually add warm broth while stirring continuously.",
    "Stir in mushrooms and cook until the rice is creamy and tender.",
    "Mix in Parmesan, drizzle with truffle oil, season with salt and pepper, and serve immediately."
  ]
},
{
  id: "27",
  name: "Grilled Portobello Burger",
  description: "A hearty vegetarian burger featuring marinated, grilled Portobello mushrooms served on a toasted bun with fresh toppings.",
  image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  cookTime: 15,
  prepTime: 15,
  servings: 2,
  difficulty: "Easy",
  categories: ["Lunch", "Vegetarian", "Quick"],
  ingredients: [
    "2 large Portobello mushroom caps",
    "2 burger buns",
    "1 tbsp balsamic vinegar",
    "1 tbsp olive oil",
    "1 garlic clove, minced",
    "Salt and pepper to taste",
    "Lettuce leaves",
    "Tomato slices",
    "Red onion slices",
    "Optional cheese slices"
  ],
  instructions: [
    "Mix balsamic vinegar, olive oil, garlic, salt, and pepper; marinate mushrooms for 15 minutes.",
    "Grill mushrooms for 7 minutes per side until tender and juicy.",
    "Assemble burgers with toasted buns, lettuce, tomato, red onion, and grilled mushrooms (add cheese if desired)."
  ]
},
{
  id: "28",
  name: "Zesty Black Bean Soup",
  description: "A vibrant and hearty black bean soup with a tangy twist of lime and cumin—ideal for a quick, healthy meal.",
  image: "https://images.unsplash.com/photo-1598515211872-f86f4c2b5a9c?auto=format&fit=crop&w=800&q=80",
  cookTime: 25,
  prepTime: 10,
  servings: 4,
  difficulty: "Easy",
  categories: ["Soup", "Vegan", "Healthy"],
  ingredients: [
    "2 cans black beans, drained",
    "1 onion, chopped",
    "2 garlic cloves, minced",
    "1 tsp ground cumin",
    "Juice of 1 lime",
    "2 cups vegetable broth",
    "1 red bell pepper, diced",
    "Salt and pepper to taste",
    "1 tbsp olive oil",
    "Fresh cilantro for garnish"
  ],
  instructions: [
    "Heat olive oil in a pot and sauté onion and garlic until soft.",
    "Add red bell pepper and cumin; cook for 2 minutes.",
    "Stir in black beans and vegetable broth, simmer for 15 minutes.",
    "Add lime juice, adjust seasoning, and garnish with cilantro before serving."
  ]
},
{
  id: "29",
  name: "Sweet Potato and Kale Frittata",
  description: "A nourishing frittata bursting with roasted sweet potatoes, kale, and aromatic herbs—a perfect start to your day.",
  image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
  cookTime: 25,
  prepTime: 15,
  servings: 4,
  difficulty: "Easy",
  categories: ["Breakfast", "Vegetarian", "Healthy"],
  ingredients: [
    "1 large sweet potato, peeled and diced",
    "2 cups kale, chopped",
    "6 eggs",
    "½ cup milk",
    "1 small onion, diced",
    "1 garlic clove, minced",
    "Salt and pepper to taste",
    "2 tbsp olive oil",
    "Optional: crumbled feta cheese"
  ],
  instructions: [
    "Roast sweet potato in olive oil at 200°C for 20 minutes until tender.",
    "Sauté onion, garlic, and kale until wilted.",
    "Whisk eggs with milk, salt, and pepper; stir in roasted sweet potatoes and sautéed greens.",
    "Pour the mixture into an oven-safe pan and bake at 180°C for 10 minutes until set.",
    "Sprinkle feta on top if desired and serve warm."
  ]
},
{
  id: "30",
  name: "Berry Almond Overnight Oats",
  description: "A nutritious, make-ahead breakfast of overnight oats topped with fresh berries and toasted almonds.",
  image: "https://images.unsplash.com/photo-1551024709-8f23befc6e94?auto=format&fit=crop&w=800&q=80",
  cookTime: 0,
  prepTime: 5,
  servings: 1,
  difficulty: "Easy",
  categories: ["Breakfast", "Healthy", "Vegan"],
  ingredients: [
    "½ cup rolled oats",
    "1 cup almond milk",
    "1 tbsp chia seeds",
    "½ cup mixed berries",
    "1 tbsp almond butter",
    "Maple syrup to taste"
  ],
  instructions: [
    "Combine oats, almond milk, and chia seeds in a jar.",
    "Stir in almond butter and maple syrup.",
    "Top with fresh berries, cover, and refrigerate overnight.",
    "Enjoy cold the next morning."
  ]
},
{
  id: "31",
  name: "Savory Spinach and Feta Stuffed Chicken",
  description: "Juicy chicken breasts filled with a flavorful blend of spinach, feta, and herbs, then baked to perfection.",
  image: "https://images.unsplash.com/photo-1585238342029-cd8b20c88e89?auto=format&fit=crop&w=800&q=80",
  cookTime: 30,
  prepTime: 20,
  servings: 4,
  difficulty: "Medium",
  categories: ["Dinner", "Healthy"],
  ingredients: [
    "4 chicken breasts",
    "2 cups fresh spinach",
    "100g feta cheese, crumbled",
    "1 garlic clove, minced",
    "1 tbsp olive oil",
    "Salt and pepper to taste",
    "1 tsp dried oregano"
  ],
  instructions: [
    "Preheat oven to 180°C.",
    "Sauté spinach with garlic in olive oil until wilted; mix in feta and oregano.",
    "Slice a pocket into each chicken breast and stuff with the mixture.",
    "Season the outside with salt and pepper.",
    "Bake for 25–30 minutes until the chicken is fully cooked."
  ]
},
{
  id: "32",
  name: "Roasted Cauliflower Tacos",
  description: "Crispy roasted cauliflower with smoky spices served in warm tortillas with a tangy lime slaw.",
  image: "https://images.unsplash.com/photo-1598515213289-ace9f2e31f86?auto=format&fit=crop&w=800&q=80",
  cookTime: 25,
  prepTime: 15,
  servings: 4,
  difficulty: "Easy",
  categories: ["Lunch", "Dinner", "Vegan"],
  ingredients: [
    "1 head cauliflower, cut into florets",
    "2 tbsp olive oil",
    "1 tsp smoked paprika",
    "½ tsp cumin",
    "Salt and pepper to taste",
    "8 small tortillas",
    "2 cups shredded cabbage",
    "Juice of 1 lime",
    "¼ cup vegan mayo",
    "1 tsp hot sauce"
  ],
  instructions: [
    "Toss cauliflower with olive oil, smoked paprika, cumin, salt, and pepper.",
    "Roast in a preheated oven at 200°C for 20 minutes until golden.",
    "Mix cabbage with lime juice, vegan mayo, and hot sauce to form a slaw.",
    "Fill tortillas with roasted cauliflower and top with slaw before serving."
  ]
},
{
  id: "33",
  name: "Thai Peanut Noodle Salad",
  description: "A refreshing noodle salad with a creamy Thai peanut dressing, crisp vegetables, and a hint of lime.",
  image: "https://images.unsplash.com/photo-1572441710264-9d64f74aa3fa?auto=format&fit=crop&w=800&q=80",
  cookTime: 15,
  prepTime: 15,
  servings: 4,
  difficulty: "Easy",
  categories: ["Lunch", "Dinner", "Asian", "Vegetarian"],
  ingredients: [
    "200g rice noodles",
    "1 red bell pepper, thinly sliced",
    "1 cucumber, julienned",
    "2 carrots, shredded",
    "½ cup chopped peanuts",
    "¼ cup fresh cilantro, chopped",
    "¼ cup peanut butter",
    "Juice of 1 lime",
    "2 tbsp soy sauce",
    "1 tbsp honey",
    "1 tsp grated ginger",
    "1 tbsp sesame oil"
  ],
  instructions: [
    "Cook rice noodles as per package directions and rinse under cold water.",
    "Whisk together peanut butter, lime juice, soy sauce, honey, ginger, and sesame oil to form the dressing.",
    "Toss noodles with sliced vegetables and dressing.",
    "Garnish with cilantro and chopped peanuts before serving."
  ]
},
{
  id: "34",
  name: "Maple Dijon Glazed Pork Chops",
  description: "Juicy pork chops enhanced by a sweet and tangy glaze of maple syrup and Dijon mustard.",
  image: "https://images.unsplash.com/photo-1562967916-eb82221dfb47?auto=format&fit=crop&w=800&q=80",
  cookTime: 20,
  prepTime: 15,
  servings: 4,
  difficulty: "Medium",
  categories: ["Dinner", "American"],
  ingredients: [
    "4 pork chops",
    "3 tbsp maple syrup",
    "2 tbsp Dijon mustard",
    "1 garlic clove, minced",
    "1 tbsp olive oil",
    "Salt and pepper to taste",
    "Fresh thyme for garnish"
  ],
  instructions: [
    "Season pork chops with salt and pepper.",
    "Sear in olive oil over high heat until browned on both sides.",
    "Mix maple syrup, Dijon mustard, and garlic; brush over the chops.",
    "Transfer to a preheated oven at 180°C and bake for 10 minutes.",
    "Garnish with fresh thyme before serving."
  ]
},
{
  id: "35",
  name: "Saffron Seafood Paella",
  description: "A festive and aromatic seafood paella bursting with saffron-infused rice and an assortment of fresh seafood.",
  image: "https://images.unsplash.com/photo-1601924582970-0a918d2d0a2c?auto=format&fit=crop&w=800&q=80",
  cookTime: 45,
  prepTime: 20,
  servings: 6,
  difficulty: "Hard",
  categories: ["Dinner", "Seafood", "Spanish"],
  ingredients: [
    "2 cups short-grain rice",
    "500g mixed seafood (shrimp, mussels, clams)",
    "1 red bell pepper, sliced",
    "1 onion, chopped",
    "2 garlic cloves, minced",
    "A pinch of saffron threads",
    "4 cups seafood broth",
    "2 tomatoes, diced",
    "2 tbsp olive oil",
    "Salt and pepper to taste",
    "Fresh parsley for garnish"
  ],
  instructions: [
    "In a large pan, sauté onion, garlic, and bell pepper in olive oil.",
    "Add rice and saffron; stir for 2 minutes.",
    "Pour in seafood broth and diced tomatoes; bring to a simmer.",
    "Arrange seafood on top and cook until rice is tender and seafood is done.",
    "Season with salt and pepper, garnish with parsley, and serve."
  ]
},
{
  id: "36",
  name: "Vegetarian Lentil Shepherd’s Pie",
  description: "A hearty, comforting shepherd’s pie made with lentils, mixed vegetables, and a creamy mashed potato topping.",
  image: "https://images.unsplash.com/photo-1572448862718-5169ec6c6a02?auto=format&fit=crop&w=800&q=80",
  cookTime: 40,
  prepTime: 20,
  servings: 6,
  difficulty: "Medium",
  categories: ["Dinner", "Vegetarian", "Comfort Food"],
  ingredients: [
    "1 cup green or brown lentils",
    "2 cups vegetable broth",
    "1 onion, diced",
    "2 carrots, diced",
    "1 cup frozen peas",
    "3 garlic cloves, minced",
    "2 tbsp tomato paste",
    "4 cups mashed potatoes",
    "2 tbsp olive oil",
    "Salt and pepper to taste",
    "1 tsp dried thyme"
  ],
  instructions: [
    "Sauté onion, garlic, and carrots in olive oil until soft.",
    "Add lentils, tomato paste, and broth; simmer until lentils are tender.",
    "Stir in peas and thyme, then transfer the mixture to a baking dish.",
    "Top with mashed potatoes and bake at 180°C for 15 minutes until the top is golden.",
    "Serve hot."
  ]
},
{
  id: "37",
  name: "Crispy Baked Zucchini Fries",
  description: "Lightly breaded zucchini sticks baked to a crispy perfection—an ideal healthy snack or side dish.",
  image: "https://images.unsplash.com/photo-1598515211443-6e0dd27b7323?auto=format&fit=crop&w=800&q=80",
  cookTime: 25,
  prepTime: 15,
  servings: 4,
  difficulty: "Easy",
  categories: ["Snack", "Vegetarian", "Healthy"],
  ingredients: [
    "2 large zucchinis, cut into sticks",
    "1 cup breadcrumbs",
    "½ cup grated Parmesan cheese",
    "2 eggs, beaten",
    "Salt and pepper to taste",
    "1 tsp garlic powder",
    "Olive oil spray"
  ],
  instructions: [
    "Preheat the oven to 220°C.",
    "Dip zucchini sticks in egg, then coat in a mix of breadcrumbs, Parmesan, garlic powder, salt, and pepper.",
    "Arrange on a baking tray, spray lightly with olive oil, and bake for 25 minutes until crispy and golden."
  ]
},
{
  id: "38",
  name: "Homemade Vanilla Bean Ice Cream",
  description: "A rich and creamy ice cream made with real vanilla beans and a touch of homemade custard.",
  image: "https://images.unsplash.com/photo-1589307004397-8a10dffcf5a3?auto=format&fit=crop&w=800&q=80",
  cookTime: 0,
  prepTime: 240, // including custard cooking and freezing time
  servings: 6,
  difficulty: "Hard",
  categories: ["Dessert", "Frozen"],
  ingredients: [
    "500ml heavy cream",
    "250ml whole milk",
    "150g sugar",
    "1 vanilla bean, split and scraped",
    "4 egg yolks",
    "A pinch of salt"
  ],
  instructions: [
    "Heat milk, cream, and vanilla bean in a saucepan over medium heat.",
    "In a separate bowl, whisk egg yolks with sugar until pale.",
    "Slowly combine a bit of the hot milk mixture into the yolks, then return to the saucepan.",
    "Cook over low heat until the custard thickens slightly (do not boil).",
    "Strain the custard, cool completely, churn in an ice cream maker, and freeze until firm."
  ]
},
{
  id: "39",
  name: "Grilled Shrimp and Avocado Salad",
  description: "A light and refreshing salad featuring grilled shrimp, creamy avocado, and crisp greens dressed in citrus.",
  image: "https://images.unsplash.com/photo-1585238342157-1bcae9c36f1e?auto=format&fit=crop&w=800&q=80",
  cookTime: 10,
  prepTime: 15,
  servings: 2,
  difficulty: "Easy",
  categories: ["Salad", "Seafood", "Healthy"],
  ingredients: [
    "200g shrimp, peeled and deveined",
    "1 avocado, sliced",
    "Mixed salad greens",
    "1 orange, segmented",
    "Juice of 1 lime",
    "2 tbsp olive oil",
    "Salt and pepper to taste",
    "Fresh cilantro for garnish"
  ],
  instructions: [
    "Season shrimp with salt and pepper and grill over medium heat until pink and cooked through (about 3 minutes per side).",
    "In a bowl, combine salad greens, avocado, and orange segments.",
    "Drizzle with lime juice and olive oil, toss gently, and top with grilled shrimp.",
    "Garnish with fresh cilantro and serve immediately."
  ]
},
{
  id: "40",
  name: "Stuffed Bell Peppers with Rice and Beans",
  description: "Colorful bell peppers stuffed with a hearty mixture of rice, beans, tomatoes, and spices, baked until tender.",
  image: "https://images.unsplash.com/photo-1598515213224-3272c1b9d7fa?auto=format&fit=crop&w=800&q=80",
  cookTime: 35,
  prepTime: 20,
  servings: 4,
  difficulty: "Medium",
  categories: ["Dinner", "Vegetarian", "Healthy"],
  ingredients: [
    "4 bell peppers, tops cut off and seeds removed",
    "1 cup cooked rice",
    "1 can black beans, drained",
    "1 can diced tomatoes",
    "1 onion, diced",
    "2 garlic cloves, minced",
    "1 tsp cumin",
    "1 tsp chili powder",
    "Salt and pepper to taste",
    "1 cup shredded cheese (optional)",
    "2 tbsp olive oil"
  ],
  instructions: [
    "Preheat the oven to 190°C.",
    "Sauté onion and garlic in olive oil until softened; add rice, black beans, tomatoes, cumin, and chili powder; season with salt and pepper.",
    "Stuff each bell pepper with the rice mixture and top with cheese if using.",
    "Place in a baking dish, cover with foil, and bake for 30 minutes until peppers are tender."
  ]
},
{
  id: "41",
  name: "Spaghetti with Spinach Pesto",
  description: "A twist on traditional pesto using fresh spinach and nuts to create a vibrant, herby sauce tossed with spaghetti.",
  image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
  cookTime: 15,
  prepTime: 10,
  servings: 4,
  difficulty: "Easy",
  categories: ["Dinner", "Italian", "Vegetarian"],
  ingredients: [
    "400g spaghetti",
    "3 cups fresh spinach",
    "½ cup walnuts or pine nuts",
    "½ cup olive oil",
    "1 garlic clove",
    "50g Parmesan cheese, grated",
    "Salt and pepper to taste",
    "Juice of 1 lemon"
  ],
  instructions: [
    "Cook spaghetti until al dente and drain, reserving some pasta water.",
    "Blend spinach, nuts, garlic, lemon juice, and olive oil until smooth.",
    "Toss the pesto with spaghetti, adding reserved pasta water to adjust consistency if needed.",
    "Top with grated Parmesan, season with salt and pepper, and serve warm."
  ]
},
{
  id: "42",
  name: "Butternut Squash Soup with Sage",
  description: "A velvety, warming soup made from roasted butternut squash enhanced with aromatic sage and a touch of cream.",
  image: "https://images.unsplash.com/photo-1572448862489-3c9c6d6ec2f3?auto=format&fit=crop&w=800&q=80",
  cookTime: 40,
  prepTime: 15,
  servings: 4,
  difficulty: "Easy",
  categories: ["Soup", "Vegetarian", "Healthy"],
  ingredients: [
    "1 medium butternut squash, peeled and cubed",
    "1 onion, chopped",
    "2 garlic cloves, minced",
    "4 cups vegetable broth",
    "½ cup cream",
    "1 tsp dried sage",
    "Salt and pepper to taste",
    "2 tbsp olive oil"
  ],
  instructions: [
    "Roast the squash in olive oil at 200°C for 25 minutes until tender.",
    "Sauté onion and garlic in a pot until soft.",
    "Add roasted squash and vegetable broth; simmer for 10 minutes.",
    "Blend until smooth, stir in cream and dried sage, season with salt and pepper, and reheat gently before serving."
  ]
},
{
  id: "43",
  name: "Crispy Tofu Stir-Fry",
  description: "A vibrant stir-fry featuring crispy tofu, mixed vegetables, and a savory sauce with a hint of spice.",
  image: "https://images.unsplash.com/photo-1604908177529-9b9a97f384b1?auto=format&fit=crop&w=800&q=80",
  cookTime: 20,
  prepTime: 15,
  servings: 4,
  difficulty: "Easy",
  categories: ["Dinner", "Vegan", "Asian"],
  ingredients: [
    "400g firm tofu, pressed and cubed",
    "1 red bell pepper, sliced",
    "1 cup broccoli florets",
    "1 carrot, julienned",
    "2 garlic cloves, minced",
    "2 tbsp soy sauce",
    "1 tbsp hoisin sauce",
    "1 tsp sriracha",
    "1 tbsp sesame oil",
    "1 tbsp cornstarch"
  ],
  instructions: [
    "Toss tofu in cornstarch and fry in sesame oil until crispy; remove and set aside.",
    "Stir-fry bell pepper, broccoli, and carrot in the same pan with garlic.",
    "Add soy sauce, hoisin sauce, and sriracha; stir to combine.",
    "Return tofu to the pan, toss to coat with the sauce, and serve immediately."
  ]
},
{
  id: "44",
  name: "Apple Cinnamon Bread Pudding",
  description: "A comforting dessert made with chunks of apple, warm cinnamon, and a rich custard baked to golden perfection.",
  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
  cookTime: 45,
  prepTime: 15,
  servings: 6,
  difficulty: "Medium",
  categories: ["Dessert", "Baking"],
  ingredients: [
    "6 cups cubed bread",
    "2 apples, peeled and diced",
    "4 eggs",
    "2 cups milk",
    "100g sugar",
    "1 tsp cinnamon",
    "1 tsp vanilla extract",
    "¼ cup raisins (optional)",
    "2 tbsp butter"
  ],
  instructions: [
    "Preheat the oven to 180°C.",
    "Whisk together eggs, milk, sugar, cinnamon, and vanilla extract.",
    "Combine bread cubes, apples, and raisins in a baking dish; pour the custard mixture over evenly.",
    "Dot with butter and bake for 45 minutes until custard is set and the top is golden.",
    "Serve warm."
  ]
},
{
  id: "45",
  name: "Moroccan Chickpea Stew",
  description: "A hearty stew infused with Moroccan spices, tender chickpeas, and vegetables simmered in a rich tomato base.",
  image: "https://images.unsplash.com/photo-1598515213652-945df1d4ebc5?auto=format&fit=crop&w=800&q=80",
  cookTime: 35,
  prepTime: 15,
  servings: 4,
  difficulty: "Medium",
  categories: ["Dinner", "Vegan", "Moroccan"],
  ingredients: [
    "2 cans chickpeas, drained",
    "1 onion, chopped",
    "2 garlic cloves, minced",
    "1 bell pepper, diced",
    "1 can diced tomatoes",
    "1 cup vegetable broth",
    "1 tsp ground cumin",
    "1 tsp ground coriander",
    "½ tsp cinnamon",
    "Salt and pepper to taste",
    "2 tbsp olive oil",
    "Fresh cilantro for garnish"
  ],
  instructions: [
    "Heat olive oil in a pot and sauté onion and garlic until fragrant.",
    "Add bell pepper, cumin, coriander, and cinnamon; cook for 2 minutes.",
    "Stir in chickpeas, tomatoes, and broth, then simmer for 20 minutes.",
    "Adjust seasoning, garnish with cilantro, and serve hot."
  ]
},
{
  id: "46",
  name: "Lemon Herb Roasted Chicken",
  description: "A classic roasted chicken infused with lemon, garlic, and fresh herbs for a deliciously aromatic meal.",
  image: "https://images.unsplash.com/photo-1604908812220-d68747e3b441?auto=format&fit=crop&w=800&q=80",
  cookTime: 60,
  prepTime: 20,
  servings: 4,
  difficulty: "Medium",
  categories: ["Dinner", "American", "Healthy"],
  ingredients: [
    "1 whole chicken (about 1.5kg)",
    "Juice and zest of 2 lemons",
    "4 garlic cloves, minced",
    "2 tbsp olive oil",
    "1 tbsp fresh rosemary, chopped",
    "1 tbsp fresh thyme, chopped",
    "Salt and pepper to taste"
  ],
  instructions: [
    "Preheat oven to 200°C.",
    "Rub the chicken thoroughly with lemon juice, zest, garlic, herbs, salt, and pepper.",
    "Roast in the oven for 60 minutes, basting occasionally.",
    "Let rest for 10 minutes before carving and serving."
  ]
},
{
  id: "47",
  name: "Berry Coconut Smoothie",
  description: "A refreshing smoothie blending mixed berries with creamy coconut milk and a touch of honey for natural sweetness.",
  image: "https://images.unsplash.com/photo-1572441710199-8f76fce33d59?auto=format&fit=crop&w=800&q=80",
  cookTime: 5,
  prepTime: 5,
  servings: 1,
  difficulty: "Easy",
  categories: ["Drink", "Breakfast", "Healthy"],
  ingredients: [
    "1 cup mixed berries",
    "½ cup coconut milk",
    "½ cup ice",
    "1 tsp honey",
    "¼ cup water (adjust for desired consistency)"
  ],
  instructions: [
    "Combine all ingredients in a blender.",
    "Blend until smooth, adjusting thickness with water if needed.",
    "Serve immediately in a chilled glass."
  ]
},
{
  id: "48",
  name: "Caramelized Banana Crepes",
  description: "Thin, delicate crepes filled with caramelized bananas and drizzled with maple syrup for a decadent breakfast or dessert.",
  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
  cookTime: 15,
  prepTime: 20,
  servings: 4,
  difficulty: "Medium",
  categories: ["Breakfast", "Dessert", "Baking"],
  ingredients: [
    "1 cup all-purpose flour",
    "2 eggs",
    "1 cup milk",
    "2 bananas, sliced",
    "2 tbsp butter",
    "2 tbsp maple syrup",
    "A pinch of salt",
    "1 tsp vanilla extract"
  ],
  instructions: [
    "Whisk flour, eggs, milk, salt, and vanilla to form a thin batter.",
    "Cook crepes in a lightly buttered non-stick pan; set aside.",
    "In the same pan, sauté banana slices in butter and maple syrup until caramelized.",
    "Fill each crepe with caramelized bananas, fold, and serve warm."
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
  "Polish",
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
