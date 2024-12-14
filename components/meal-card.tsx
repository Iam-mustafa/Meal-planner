import { Card, CardContent } from "@/components/ui/card"
import { Star, Trash2 } from "lucide-react"

interface MealCardProps {
  title: string
  image: string
  instructions: string
  cuisine: string
  rating: number
  mealType: string
}

export default function MealCard({
  title,
  image,
  instructions,
  cuisine,
  rating,
  mealType
}: MealCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm">
              {mealType}
            </span>
          </div>
          <button className="absolute top-4 left-4 bg-white/90 p-2 rounded-full hover:bg-white">
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{instructions}</p>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-sm font-medium">Cuisine: {cuisine}</div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium">Rating: {rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

