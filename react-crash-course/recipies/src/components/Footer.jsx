import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tasty Recipes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
