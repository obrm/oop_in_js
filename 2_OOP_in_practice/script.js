// Define a class for ingredients
class Ingredient {
  // The constructor sets the name of the ingredient
  constructor(name) {
    this.name = name;
  }
}

// Define a class for recipes
class Recipe {
  // The constructor sets the ingredients used in the recipe
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  // A static method to create a recipe from a list of ingredients
  static createRecipe(ingredients) {
    // Filter the ingredients to only include the selected ones
    const recipeIngredients = ingredients.filter(ingredient => ingredient.selected);
    // Check if at least 2 ingredients are selected
    if (recipeIngredients.length < 2) {
      // If not, return an error message
      return 'Please select at least 2 ingredients to create a recipe.';
    }
    // If enough ingredients are selected, create a new recipe
    return new Recipe(recipeIngredients);
  }
}

// Create an array of ingredients
const ingredients = [
  new Ingredient('Eggs'),
  new Ingredient('Bacon'),
  new Ingredient('Bread'),
  new Ingredient('Cheese'),
  new Ingredient('Tomatoes')
];

// Add a click event listener to the "Generate Recipe" button
document.querySelector('#generate-recipe-button').addEventListener('click', () => {
  // Filter the ingredients to only include the selected ones
  const selectedIngredients = ingredients.filter(ingredient => ingredient.selected);
  // Create a recipe using the selected ingredients
  const recipe = Recipe.createRecipe(selectedIngredients);
  if (recipe instanceof Recipe) {
    // If a recipe was created, log the ingredients used
    console.log(`Recipe created with ingredients: ${recipe.ingredients.map(ingredient => ingredient.name).join(', ')}`);
  } else {
    // If an error message was returned, log the error message
    console.log(recipe);
  }
});
