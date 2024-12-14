"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const weeks = ["All Meals", "Week 1", "Week 2", "Week 3", "Week 4"]

export default function WeekNavigation() {
  const [activeWeek, setActiveWeek] = useState("Week 1")

  return (
    <div className="flex flex-col gap-6 px-4 py-8 md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold">Week Orders</h2>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex overflow-x-auto pb-2 -mb-2">
          {weeks.map((week) => (
            <button
              key={week}
              onClick={() => setActiveWeek(week)}
              className={cn(
                "px-4 py-2 border-b-2 whitespace-nowrap",
                activeWeek === week
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:border-gray-200"
              )}
            >
              {week}
            </button>
          ))}
        </div>
        <Button variant="secondary">Add to Week</Button>
      </div>
    </div>
  )
}

