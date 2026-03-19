"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas"; 
import itemsData from "./items.json";

export default function Week6Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");  

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0]              
      .trim()                     
      .replace(/[^\w\s]/gi, "");  
    
    setSelectedItemName(cleanName);
  }

  return (
    <main className="max-w-7xl mx-auto p-6">  
      <h1 className="text-3xl font-bold text-center mb-8">Shopping List</h1>
      
      <div className="flex gap-8">
        
        <div className="flex-1 space-y-8">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />  
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />  
        </div>
        
      </div>
    </main>
  );
}