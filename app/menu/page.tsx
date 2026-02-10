import type { FoodItem } from "@/types";

// Static food data for SSG
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh vegetables and special sauce",
    price: 8.99,
    image: "🍔",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomatoes, and basil on crispy crust",
    price: 12.99,
    image: "🍕",
    category: "Pizza",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with parmesan and croutons",
    price: 7.99,
    image: "🥗",
    category: "Salads",
  },
  {
    id: 4,
    name: "Sushi Roll",
    description: "Fresh salmon and avocado rolled in seasoned rice",
    price: 14.99,
    image: "🍣",
    category: "Sushi",
  },
  {
    id: 5,
    name: "Chicken Wings",
    description: "Crispy wings tossed in your choice of sauce",
    price: 9.99,
    image: "🍗",
    category: "Appetizers",
  },
  {
    id: 6,
    name: "Pasta Carbonara",
    description: "Creamy pasta with bacon and parmesan cheese",
    price: 11.99,
    image: "🍝",
    category: "Pasta",
  },
  {
    id: 7,
    name: "Tacos",
    description: "Three soft tacos with your choice of filling",
    price: 10.99,
    image: "🌮",
    category: "Mexican",
  },
  {
    id: 8,
    name: "Ramen Bowl",
    description: "Authentic Japanese ramen with pork and soft-boiled egg",
    price: 13.99,
    image: "🍜",
    category: "Asian",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover our delicious selection of meals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-center text-8xl py-8 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20">
                {item.image}
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-600 font-semibold mb-2">
                  {item.category}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    ${item.price}
                  </span>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
