import React from "react";

export default function RecipeModal({ recipe, onClose }) {
  return (
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
}
