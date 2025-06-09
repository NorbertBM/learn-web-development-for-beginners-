import React, { useState, useEffect } from "react";
import RecipeCard from "../recipe/RecipeCard";
import RecipeModal from "../recipe/RecipeModal";

export default function RecipesPage({ recipes }) {
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
}
