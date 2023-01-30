const recipeTitle = document.getElementById('recipeTitle');
const recipeText = document.getElementById('recipe');
const recipeModal = document.getElementById('recipeModal');
const errorToast = document.getElementById('errorToast');
const closeRecipeButton = document.getElementById("closeModal");
const closeToastButton = document.getElementById("closeToast");
const checkboxes = document.querySelectorAll("input[type='checkbox']");

const selectedIngredients = [];

function Recipe(name, ingredients) {
  return { name, ingredients };
}

const getRecipes = () => [
  Recipe("Pizza Margherita", ["Tomato Sauce", "Mozzarella Cheese", "Basil"]),
  Recipe("Pesto Pasta", ["Pesto Sauce", "Pasta", "Parmesan Cheese"]),
  Recipe("Tofu Alfredo", ["Tofu", "Alfredo Sauce", "Fettuccine Pasta"]),
  Recipe("Veggie Stir Fry", ["Veggies", "Stir Fry Sauce", "Rice"])
];

const findMatchingRecipe = (recipes, ingredients) => {
  for (const recipe of recipes) {
    let match = true;
    for (const ingredient of recipe.ingredients) {
      if (!ingredients.includes(ingredient)) {
        match = false;
        break;
      }
    }
    if (match) return recipe;
  }
  return null;
};

const handleCheckboxChange = (checkboxes, selectedIngredients, displayRecipe, displayError) => {
  for (const checkbox of checkboxes) {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selectedIngredients.push(checkbox.value);
      } else {
        selectedIngredients = selectedIngredients.filter(
          ingredient => ingredient !== checkbox.value
        );
      }

      if (selectedIngredients.length < 3) return;

      const recipe = findMatchingRecipe(getRecipes(), selectedIngredients);

      if (selectedIngredients.length !== 3 || !recipe) {
        displayError();
      } else {
        displayRecipe(recipe);
      }
    });
  }
};

const displayRecipe = (recipe) => {
  recipeTitle.innerText = `Based on your selections, Here is a recipe for ${recipe.name}`;

  const list = document.createElement('ul');

  recipe.ingredients.forEach((ingredient) => {
    const listItem = document.createElement('li');
    listItem.innerText = ingredient;
    list.appendChild(listItem);
  });
  recipeText.appendChild(list);

  recipeModal.classList.add('show');
};

const displayError = () => {
  errorToast.classList.add('show');
};

const closeModal = () => {
  recipeModal.classList.remove('show');
};

const closeToast = () => {
  errorToast.classList.remove('show');
};


closeRecipeButton.addEventListener("click", closeModal);

closeToastButton.addEventListener("click", closeToast);

handleCheckboxChange(checkboxes, selectedIngredients, displayRecipe, displayError);