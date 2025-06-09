import React, { useState, useEffect } from "react";
import recipes from "./db";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import RecipesPage from "./components/Pages/RecipesPage";
function App() {
  return (
    <>
      <Header />
      <Home />
      <RecipesPage recipes={recipes} />
      <Footer />
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
