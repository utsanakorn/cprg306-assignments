"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
    return 0;
  });

  const groupedItems = sortedItems.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div className="space-y-6">

      <div className="flex gap-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-1 rounded-md font-semibold transition ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-1 rounded-md font-semibold transition ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {Object.entries(groupedItems).map(([category, items]) => (
        <section key={category}>
          <h2 className="text-xl font-semibold capitalize mb-2">
            {category}
          </h2>
          <ul className="space-y-3">
            {items.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}