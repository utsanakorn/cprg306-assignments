"use client";

import { useState, useEffect } from "react";

// ฟังก์ชันดึงข้อมูลจาก API (อยู่นอก component)
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // ฟังก์ชันโหลดข้อมูล
  async function loadMealIdeas() {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  }

  // เรียก loadMealIdeas ทุกครั้งที่ ingredient เปลี่ยน
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-slate-800 p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-4">Meal Ideas</h2>
      
      {ingredient ? (
        <>
          <p className="text-gray-300 mb-4">
           for <span className="font-bold text-white">"{ingredient}"</span>
          </p>
          
          {meals.length > 0 ? (
            <ul className="space-y-3">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition"
                >
                  <div className="flex items-center gap-4">
                    {/*<img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-20 h-20 rounded-lg object-cover"
                    />*/}
                    <span className="text-white font-semibold text-lg">
                      {meal.strMeal}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No meal ideas found for {ingredient}</p>
          )}
        </>
      ) : (
        <p className="text-gray-400">Select an item to see meal ideas</p>
      )}
    </div>
  );
}