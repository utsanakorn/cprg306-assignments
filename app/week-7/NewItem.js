"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 9), // random string id
      name,
      quantity,
      category,
    };

    onAddItem(item);
    
    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <p className="text-black">Item name</p>
        
        
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item name"
          className="w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-4 mb-4">
       <div className="mb-4">
        <p className="text-gray-500 text-sm mb-1">Quantity (1–20)</p>
        <p className="text-gray-400 mb-2">Current: <span className="text-blue-400 font-semibold">{quantity}</span></p>
      <div className="flex gap-2">
    <button
      type="button"
      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
      className="w-10 h-10 bg-gray-200 text-black font-bold rounded-md hover:bg-gray-300"
      >−
    </button>
    <button
      type="button"
      onClick={() => setQuantity((q) => Math.min(20, q + 1))}
      className="w-10 h-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
    >
      +
    </button>
  </div>

  <p className="text-gray-400 mb-2">Category</p>
       <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
</div>
      <button
        type="submit"
        className="w-40 h-10 bg-green-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200 font-bold text-lg"
      >
        Add Item
      </button>
      
      
    </form>
  );
}