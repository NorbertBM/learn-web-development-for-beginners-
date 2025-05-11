const recipes = [
  {
    title: "Spaghetti Carbonara",
    category: "Pasta",
    image: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g Pecorino Romano cheese",
      "Black pepper",
      "Salt",
    ],
    instructions: [
      "Cook the spaghetti in salted boiling water until al dente.",
      "While the pasta is cooking, cut the pancetta into small cubes and fry until crispy.",
      "In a bowl, whisk together the eggs, cheese, and a generous amount of black pepper.",
      "Drain the spaghetti and add it to the pancetta pan. Mix well.",
      "Remove the pan from the heat and add the egg mixture, stirring quickly to create a creamy sauce.",
      "Serve immediately with extra cheese and pepper.",
    ],
  },
  {
    title: "Classic Margherita Pizza",
    category: "Pizza",
    image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
    ingredients: [
      "250g strong bread flour",
      "1 tsp dried yeast",
      "1 tsp sugar",
      "1 tsp salt",
      "150ml warm water",
      "2 tbsp olive oil",
      "100g tomato sauce",
      "150g mozzarella cheese",
      "Fresh basil leaves",
    ],
    instructions: [
      "In a large bowl, combine flour, yeast, sugar, and salt.",
      "Add warm water and olive oil, and mix to form a dough.",
      "Knead the dough for about 10 minutes until smooth.",
      "Let the dough rise in a warm place for 1 hour.",
      "Preheat oven to 220°C (425°F).",
      "Roll out the dough on a floured surface.",
      "Spread tomato sauce over the base, add mozzarella cheese, and bake for 15-20 minutes.",
      "Garnish with fresh basil leaves before serving.",
    ],
  },
  {
    title: "Chocolate Brownies",
    category: "Dessert",
    image: "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg",
    ingredients: [
      "150g unsalted butter",
      "200g dark chocolate",
      "150g sugar",
      "2 large eggs",
      "100g all-purpose flour",
      "30g cocoa powder",
      "1 tsp vanilla extract",
      "Pinch of salt",
    ],
    instructions: [
      "Preheat oven to 180°C (350°F). Grease and line a square baking tin.",
      "Melt butter and chocolate together over low heat.",
      "In a bowl, whisk together sugar and eggs until light and fluffy.",
      "Stir in the melted chocolate mixture and vanilla extract.",
      "In a separate bowl, whisk together flour, cocoa powder, and salt.",
      "Gently fold the dry ingredients into the wet ingredients until just combined.",
      "Pour the batter into the prepared tin and bake for 20-25 minutes.",
      "Let it cool completely before cutting into squares.",
    ],
  },
  {
    title: "Fresh Garden Salad",
    category: "Salad",
    image: "https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg",
    ingredients: [
      "6 cups mixed salad greens",
      "2 medium tomatoes, diced",
      "1 cucumber, sliced",
      "1 red onion, thinly sliced",
      "1 bell pepper, chopped",
      "1/2 cup olive oil",
      "3 tbsp balsamic vinegar",
      "1 tsp Dijon mustard",
      "1 clove garlic, minced",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Wash and dry all vegetables thoroughly.",
      "In a large bowl, combine the salad greens, tomatoes, cucumber, red onion, and bell pepper.",
      "In a small bowl, whisk together olive oil, balsamic vinegar, Dijon mustard, minced garlic, salt, and pepper.",
      "Drizzle the dressing over the salad and toss gently to combine.",
      "Serve immediately.",
    ],
  },
  {
    title: "Grilled Salmon with Lemon Herbs",
    category: "Main Course",
    image: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    ingredients: [
      "4 salmon fillets",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 lemon, sliced",
      "2 tbsp fresh dill, chopped",
      "2 tbsp fresh parsley, chopped",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat grill to medium-high heat.",
      "In a small bowl, mix olive oil, minced garlic, dill, and parsley.",
      "Place salmon fillets on a large piece of aluminum foil. Season with salt and pepper.",
      "Spread the herb mixture over the salmon fillets and top with lemon slices.",
      "Fold the foil to create a sealed packet. Grill for 12-15 minutes, or until salmon is cooked through.",
      "Serve hot with your favorite sides.",
    ],
  },

  {
    title: "Vegetable Stir-Fry",
    category: "Stir-Fry",
    image: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
    ingredients: [
      "2 cups mixed vegetables (bell peppers, broccoli, carrots)",
      "1 cup tofu, cubed",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "2 cloves garlic, minced",
      "1 tsp ginger, grated",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat sesame oil in a large pan over medium heat.",
      "Add garlic and ginger, sauté for 1 minute.",
      "Add tofu and cook until golden brown.",
      "Add mixed vegetables and stir-fry for 5-7 minutes.",
      "Pour in soy sauce and season with salt and pepper.",
      "Serve hot over rice or noodles.",
    ],
  },
];

function displayRecipes(recipes) {
  const container = document.getElementById("recipe-container");
  container.innerHTML = ""; // Clear previous content

  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.className =
      "recipe-card relative overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300";

    const image = document.createElement("img");
    image.src = recipe.image;
    image.alt = recipe.title;
    image.className =
      "w-full h-48 object-cover rounded-t-md transition-transform duration-300 transform scale-100 hover:scale-105";

    const overlay = document.createElement("div");
    overlay.className =
      "recipe-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end rounded-b-md";

    const title = document.createElement("h3");
    title.className = "recipe-title text-lg font-semibold mb-1";
    title.textContent = recipe.title;

    const category = document.createElement("p");
    category.className = "recipe-category text-gray-300 text-sm";
    category.textContent = recipe.category;

    overlay.appendChild(title);
    overlay.appendChild(category);
    recipeCard.appendChild(image);
    recipeCard.appendChild(overlay);
    recipeCard.addEventListener("click", () => showRecipeDetails(recipe)); // Added click event
    container.appendChild(recipeCard);
  });
}

function showRecipeDetails(recipe) {
  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-md";

  const modalContent = document.createElement("div");
  modalContent.className =
    "bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl transform transition-transform duration-300 scale-95 hover:scale-100";

  const title = document.createElement("h2");
  title.className =
    "text-3xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2";
  title.textContent = recipe.title;

  const image = document.createElement("img");
  image.src = recipe.image;
  image.alt = recipe.title;
  image.className = "w-full h-64 object-cover rounded-md mb-6";

  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.className = "text-lg font-semibold mb-2 text-gray-700";
  ingredientsTitle.textContent = "Ingredients:";
  const ingredientsList = document.createElement("ul");
  ingredientsList.className = "list-disc list-inside mb-4 space-y-2";
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });

  const instructionsTitle = document.createElement("h3");
  instructionsTitle.className = "text-lg font-semibold mb-2 text-gray-700";
  instructionsTitle.textContent = "Instructions:";
  const instructionsList = document.createElement("ol");
  instructionsList.className = "list-decimal list-inside space-y-2";
  recipe.instructions.forEach((instruction) => {
    const li = document.createElement("li");
    // Use innerHTML to allow for highlighting within instructions.  Added styling.
    li.innerHTML = instruction.replace(
      /(\w+)/g,
      '<span class="ingredient-highlight">$1</span>'
    );
    instructionsList.appendChild(li);
  });

  const closeButton = document.createElement("button");
  closeButton.className =
    "bg-amber-500 text-white py-3 px-6 rounded-full hover:bg-amber-600 transition duration-300 mt-8 font-semibold";
  closeButton.textContent = "Close";
  closeButton.addEventListener("click", () => document.body.removeChild(modal));

  modalContent.appendChild(title);
  modalContent.appendChild(image);
  modalContent.appendChild(ingredientsTitle);
  modalContent.appendChild(ingredientsList);
  modalContent.appendChild(instructionsTitle);
  modalContent.appendChild(instructionsList);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // add the modalContent to the modal
}

function filterRecipes(query) {
  const lowerCaseQuery = query.toLowerCase();
  return recipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(lowerCaseQuery) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(lowerCaseQuery)
      ) ||
      recipe.category.toLowerCase().includes(lowerCaseQuery)
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayRecipes(recipes);

  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    const results = filterRecipes(query);
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ""; // Clear previous results
    if (results.length === 0) {
      resultsContainer.innerHTML =
        "<p class='text-gray-600 text-center'>No recipes found.</p>";
    } else {
      displayRecipes(results);
    }
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });
});

// TODO: Create dynamic year

const year = new Date().getFullYear();
document.getElementById("current-year").textContent = year;
