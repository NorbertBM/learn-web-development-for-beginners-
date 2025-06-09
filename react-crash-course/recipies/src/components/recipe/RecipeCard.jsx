import React from "react";

export default function RecipeCard({ recipe, onClick }) {
  return (
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
}
