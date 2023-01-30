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

class RecipeFinder {
  constructor() {
    this.ingredients = [
      new Ingredient('Chicken'), // 0
      new Ingredient('Beef'), // 1
      new Ingredient('Tofu'), // 2
      new Ingredient('Broccoli'), // 3
      new Ingredient('Carrots'), // 4 
      new Ingredient('Spinach'), // 5
      new Ingredient('Rice'), // 6 
      new Ingredient('Pasta'), // 7
      new Ingredient('Bread'), // 8
    ];

    this.recipes = [
      new Recipe([
        this.ingredients[0],
        this.ingredients[3],
        this.ingredients[4],
        this.ingredients[6]
      ]),
      new Recipe([
        this.ingredients[1],
        this.ingredients[4],
        this.ingredients[7],
        this.ingredients[8]
      ]),
      new Recipe([
        this.ingredients[2],
        this.ingredients[3],
        this.ingredients[5],
        this.ingredients[6]
      ])
    ];
  }

  findRecipe(selectedIngredients) {
    // Loop through all the recipes
    for (const recipe of this.recipes) {
      // Check if all the ingredients in the recipe are also selected by the user
      let isMatch = true;
      for (const ingredient of recipe.ingredients) {
        if (!selectedIngredients.includes(ingredient)) {
          isMatch = false;
          break;
        }
      }

      // If all the ingredients in the recipe are selected, return the recipe
      if (isMatch) {
        return recipe;
      }
    }

    // If no recipe was found, return null
    return null;
  }
}

// Initialize the RecipeFinder instance
const recipeFinder = new RecipeFinder();

// Get the checkbox elements
const checkboxes = document.querySelectorAll(".ingredient-checkbox");

// Add event listeners to the checkboxes to update the selected ingredients list when they change
const selectedIngredients = [];

for (const checkbox of checkboxes) {
  checkbox.addEventListener("change", event => {
    const ingredientName = event.target.value;
    const ingredient = recipeFinder.ingredients.find(
      ingredient => ingredient.name === ingredientName
    );

    if (event.target.checked) {
      selectedIngredients.push(ingredient);
    } else {
      selectedIngredients.splice(selectedIngredients.indexOf(ingredient), 1);
    }
  });
}

// Get the button element
const button = document.querySelector("#submit");

// Add event listener to the button to find the recipe when it's clicked
button.addEventListener("click", () => {
  // Find the recipe with the selected ingredients
  const recipe = recipeFinder.findRecipe(selectedIngredients);

  // Check if a recipe was found
  if (recipe) {
    document.getElementById('recipeModal').classList.add('show');
  } else {
    document.getElementById('errorToast').classList.add('show');
    //
  }
});
