"use client";

import { useState } from "react";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";  // เพิ่ม import
import itemsData from "./items.json";

export default function Week6Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");  //  เพิ่ม state

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  // 👈 เพิ่มฟังก์ชันนี้ทั้งหมด
  function handleItemSelect(item) {
    // ทำความสะอาดชื่อไอเทม (เอา emoji และส่วนเกินออก)
    const cleanName = item.name
      .split(",")[0]              // ตัดส่วนหลัง comma เช่น "chicken breast, 1 kg" → "chicken breast"
      .trim()                     // ตัด whitespace
      .replace(/[^\w\s]/gi, "");  // เอา emoji ออก 
    
    setSelectedItemName(cleanName);
  }

  return (
    <main className="max-w-7xl mx-auto p-6">  {/* เปลี่ยน max-w-xl เป็น max-w-7xl */}
      <h1 className="text-3xl font-bold text-center mb-8">Shopping List</h1>
      
      {/* 👈 Layout 2 คอลัมน์ */}
      <div className="flex gap-8">
        
        {/* ฝั่งซ้าย: Form + Shopping List */}
        <div className="flex-1 space-y-8">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />  {/*  ส่ง onItemSelect */}
        </div>

        {/* ฝั่งขวา: Meal Ideas */}
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />  {/* เพิ่มส่วนนี้ */}
        </div>
        
      </div>
    </main>
  );
}