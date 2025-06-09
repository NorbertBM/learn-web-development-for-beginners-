import React from "react";
import Page from "./Page";
export default function Home() {
  return (
    <Page>
      <div className="container mx-auto text-center py-20">
        {" "}
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Welcome to Tasty Recipes
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          Discover delicious recipes from around the world.
        </p>
        <a
          href="#recipes"
          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-6 rounded-full hover:from-orange-500 hover:to-amber-500 transition-all duration-300"
        >
          Explore Recipes
        </a>
      </div>
    </Page>
  );
}
