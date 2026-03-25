"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]); 
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    try {
      const itemsList = await getItems(user.uid);
      setItems(itemsList);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  
  useEffect(() => {
    if (!user) {
      router.push("/week-10"); 
    } else {
      loadItems(); 
    }
  }, [user, router]);

  async function handleAddItem(newItem) {
    try {
      const newItemId = await addItem(user.uid, newItem);
      const itemWithId = { id: newItemId, ...newItem };
      setItems([...items, itemWithId]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");

    setSelectedItemName(cleanName);
  }

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-10");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-gray-400">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 flex justify-between items-center bg-gray-900 p-4 rounded-lg shadow-xl border border-gray-800">
        <div>
          <h1 className="text-3xl font-bold text-white">Shopping List</h1>
          <p className="text-gray-400 text-sm mt-1">
            Welcome, <span className="font-semibold text-blue-400">{user.displayName}</span>
          </p>
          <p className="text-gray-500 text-xs mt-0.5">
            {user.email}
          </p>
        </div>

        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <div className="flex-1 space-y-8">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div className="flex-1">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}