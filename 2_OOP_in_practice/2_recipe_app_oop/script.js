class Recipe {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

class Recipes {
  constructor() {
    this._recipes = [
      new Recipe("Pizza Margherita", ["Tomato Sauce", "Mozzarella Cheese", "Basil"]),
      new Recipe("Pesto Pasta", ["Pesto Sauce", "Pasta", "Parmesan Cheese"]),
      new Recipe("Tofu Alfredo", ["Tofu", "Alfredo Sauce", "Fettuccine Pasta"]),
      new Recipe("Veggie Stir Fry", ["Veggies", "Stir Fry Sauce", "Rice"])
    ];
  }

  findMatchingRecipe(ingredients) {
    for (const recipe of this._recipes) {
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
  }
}

class App {
  constructor() {
    this._checkboxes = document.querySelectorAll("input[type=checkbox]");
    this._recipeModal = document.getElementById('recipeModal');
    this._closeModal = document.getElementById("closeModal");
    this._closeToast = document.getElementById("closeToast");
    this._recipeTitle = document.getElementById('recipeTitle');
    this._recipeText = document.getElementById('recipe');
    this._errorToast = document.getElementById('errorToast');

    this._recipes = new Recipes();

    this._selectedIngredients = [];

    this._closeModal.addEventListener("click", (e) => {
      this._recipeModal.classList.remove("show");
    });

    this._closeToast.addEventListener("click", (e) => {
      this._errorToast.classList.remove("show");
    });

    this._checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => this._ingredientSelected(checkbox));
    });
  }

  _ingredientSelected(checkbox) {
    if (checkbox.checked) {
      this._selectedIngredients.push(checkbox.value);
    } else {
      this._selectedIngredients = this._selectedIngredients.filter(
        ingredient => ingredient !== checkbox.value
      );
    }

    if (this._selectedIngredients.length < 3) return;

    const recipe = this._recipes.findMatchingRecipe(this._selectedIngredients);

    if (this._selectedIngredients.length !== 3 || !recipe) {
      this._displayError();
    } else {
      this._displayRecipe(recipe);
    }
  }

  _displayRecipe(recipe) {
    this._recipeTitle.innerText = `Based on your selections, Here is a recipe for ${recipe.name}`;

    const list = document.createElement('ul');
    
    recipe.ingredients.forEach((ingredient) => {
      const listItem = document.createElement('li');
      listItem.innerText = ingredient;
      list.appendChild(listItem);
    });
    this._recipeText.appendChild(list);
    
    this._recipeModal.classList.add('show');
  }

  _displayError() {
    this._errorToast.classList.add('show');
  }
}

const app = new App();

app();
