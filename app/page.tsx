'use client'
import Hero from "@/components/hero"
import WeekNavigation from "@/components/week-navigation"
import MealCard from "@/components/meal-card"
import { fetchRecipes } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MealCardProps {
  title: string
  image: string
  instructions: string
  cuisine: string
  rating: number
  mealType: string
}
export default function Page() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadRecipes() {
      const recipes = await fetchRecipes();
      setMeals(recipes);
    }
    loadRecipes();
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <Hero />
      <WeekNavigation />
      <div className="px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {meals.map((meal:MealCardProps, index) => (
            <MealCard key={index} {...meal} />
          ))}
        </div>
      </div>
    </main>
  )
}

