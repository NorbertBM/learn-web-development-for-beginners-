import React, { useState, useEffect, use } from "react";
import recipes from "./db";
function App() {
  return (
    <>
      <Header />
      <RecipesPage />
      <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2025 Tasty Recipes. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

const Header = () => (
  <header className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md fixed top-0 flex-0 w-full z-10">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold tracking-wide">
        Tasty Recipes
      </a>
      <nav>
        <ul className="flex space-x-6">
          {["Home", "Recipes", "About", "Contact"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-orange-200 transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

// Recipes

const RecipesPage = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const result = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(query)
        ) ||
        recipe.category.toLowerCase().includes(query)
    );
    setFilteredRecipes(
      category
        ? result.filter((recipe) => recipe.category === category)
        : result
    );
  }, [searchQuery, category]);
  // Trigger selected recipe modal
  const handleRecipeClick = (recipe) => setSelectedRecipe(recipe);
  const closeModal = () => setSelectedRecipe(null);

  const clearSearch = () => {
    setSearchQuery("");
    setCategory("");
  };

  return (
    <main className="pt-20">
      <section id="recipes" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Featured Recipes
          </h2>
          <div className="flex flex-col md:flex-row justify-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
            <input
              placeholder="Search for recipes"
              className="w-full md:w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="w-full md:w-1/4 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All Categories</option>
              {[...new Set(recipes.map((recipe) => recipe.category))].map(
                (cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                )
              )}
            </select>
            <button
              className="cursor-pointer bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-6 rounded-full hover:from-orange-500 hover:to-amber-500 transition-all duration-300"
              onClick={clearSearch}
            >
              Clear Search
            </button>
          </div>
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe, index) => (
                <RecipeCard
                  recipe={recipe}
                  onClick={handleRecipeClick}
                  key={index}
                />
              ))}
            </div>
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </section>
      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={closeModal} />
      )}
    </main>
  );
};

const RecipeCard = ({ recipe, onClick }) => (
  <div
    className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
    onClick={() => onClick(recipe)}
  >
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800">{recipe.title}</h3>
      <p className="text-gray-600 mt-12">{recipe.description}</p>
    </div>
  </div>
);

const RecipeModal = ({ recipe, onClose }) => (
  <div className="fixed inset-0 z-20">
    <div className="fixed inset-0 bg-slate-400 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 z-39 max-w-lg w-full relative">
        <button
          className="cursor-pointer absolute top-6 right-6 text-gray-500 hover:text-red-400 font-extrabold text-2xl"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))}
        </ul>{" "}
        <h3 className="text-xl font-semibold mb-2">Instructions</h3>
        <p className="text-gray-600">{recipe.instructions}</p>
      </div>
    </div>
  </div>
);
