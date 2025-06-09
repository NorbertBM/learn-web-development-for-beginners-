import React from "react";

export default function Page({ children }) {
  return (
    <section className="h-screen bg-gradient-to-r from-amber-100 to-orange-100 py-20 px-4 flex items-center">
      {children}
    </section>
  );
}
