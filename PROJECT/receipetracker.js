const recipes = [];
const recipe1 = {
  name: "spaghetti carbonara",
  ingredients: ["Spaghetti", "Parmesan cheese", "Pancetta", "black pepper"],
  ratings: [4, 5, 4, 5],
};
//add more on the recipe1
recipe1.cookingTime = 22;
recipe1.totalIngredients = null;
recipe1.difficultyLevel = "";
recipe1.averageRating = null;
console.log(recipe1);

const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  ratings: [4, 5, 5, 5],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};
// Step 1: Create recipe1
const recipe1 = {
  name: "Pasta Bolognese",
  ingredients: ["pasta", "ground beef", "tomato sauce", "onion", "garlic"],
  ratings: [5, 4, 4, 5],
  cookingTime: 30,
  totalIngredients: null,
  difficultyLevel: '',
  averageRating: null
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

// Step 3: Access properties
const recipe1Name = recipe1.name;
const recipe2Name = recipe2.name;
const recipe1CookingTime = recipe1.cookingTime;
const recipe2CookingTime = recipe2.cookingTime;

// Step 4: Log everything
console.log(recipe1Name);
console.log(recipe2Name);
console.log(recipe1CookingTime);
console.log(recipe2CookingTime);
recipes.push(recipe1,recipe2,recipe3)