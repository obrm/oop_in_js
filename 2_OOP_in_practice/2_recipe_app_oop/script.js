class Recipe {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

class Recipes {
  constructor() {
    this.recipes = [
      new Recipe("Pizza Margherita", ["Tomato Sauce", "Mozzarella Cheese", "Basil"]),
      new Recipe("Pesto Pasta", ["Pesto Sauce", "Pasta", "Parmesan Cheese"]),
      new Recipe("Tofu Alfredo", ["Tofu", "Alfredo Sauce", "Fettuccine Pasta"]),
      new Recipe("Veggie Stir Fry", ["Veggies", "Stir Fry Sauce", "Rice"])
    ];
  }

  findMatchingRecipe(ingredients) {
    for (const recipe of this.recipes) {
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
    this.checkboxes = document.querySelectorAll("input[type=checkbox]");
    this.submitButton = document.getElementById("submit");
    this.recipeModal = document.getElementById('recipeModal');
    this.closeModal = document.getElementById("closeModal");
    this.closeToast = document.getElementById("closeToast");
    this.recipeTitle = document.getElementById('recipeTitle');
    this.recipeText = document.getElementById('recipe');
    this.errorToast = document.getElementById('errorToast');

    this.recipes = new Recipes();

    this.selectedIngredients = [];

    this.closeModal.addEventListener("click", (e) => {
      this.recipeModal.classList.remove("show");
    });

    this.closeToast.addEventListener("click", (e) => {
      this.errorToast.classList.remove("show");
    });

    this.checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => this.ingredientSelected(checkbox));
    });
  }

  ingredientSelected(checkbox) {
    if (checkbox.checked) {
      this.selectedIngredients.push(checkbox.value);
    } else {
      this.selectedIngredients = this.selectedIngredients.filter(
        ingredient => ingredient !== checkbox.value
      );
    }

    if (this.selectedIngredients.length < 3) return;

    const recipe = this.recipes.findMatchingRecipe(this.selectedIngredients);

    if (this.selectedIngredients.length !== 3 || !recipe) {
      this.displayError();
    } else {
      this.displayRecipe(recipe);
    }
  }

  displayRecipe(recipe) {
    this.recipeTitle.innerText = `Based on your selections, Here is a recipe for ${recipe.name}`;

    const list = document.createElement('ul');
    
    recipe.ingredients.forEach((ingredient) => {
      const listItem = document.createElement('li');
      listItem.innerText = ingredient;
      list.appendChild(listItem);
    });
    this.recipeText.appendChild(list);
    
    this.recipeModal.classList.add('show');
  }

  displayError() {
    this.errorToast.classList.add('show');
  }
}

const app = new App();

app();
