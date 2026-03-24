import { useState } from "react";
import { PhoneCall } from "lucide-react";

type Category = "All" | "Breakfast" | "Lunch" | "Dinner" | "Drinks";

const menuItems = [
  // Breakfast
  { id: 1, category: "Breakfast", name: "Avocado Toast", desc: "Sourdough, poached egg, chili flakes, microgreens", price: "$14", image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=600&q=80" },
  { id: 2, category: "Breakfast", name: "Buttermilk Pancakes", desc: "Maple syrup, seasonal berries, whipped butter", price: "$12", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80" },
  { id: 3, category: "Breakfast", name: "Eggs Benedict", desc: "English muffin, hollandaise sauce, smoked ham", price: "$16", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=600&q=80" },
  { id: 4, category: "Breakfast", name: "Acai Bowl", desc: "Quinoa, chia seeds, fresh fruits, coconut flakes", price: "$13", image: "https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?auto=format&fit=crop&w=600&q=80" },
  
  // Lunch
  { id: 5, category: "Lunch", name: "Grilled Chicken Salad", desc: "Mixed greens, cherry tomatoes, balsamic vinaigrette", price: "$18", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" },
  { id: 6, category: "Lunch", name: "Wagyu Burger", desc: "Brioche bun, aged cheddar, truffle mayo, fries", price: "$22", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
  { id: 7, category: "Lunch", name: "Mushroom Risotto", desc: "Arborio rice, wild mushrooms, parmesan, truffle oil", price: "$20", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80" },
  { id: 8, category: "Lunch", name: "Seafood Pasta", desc: "Linguine, prawns, mussels, white wine garlic sauce", price: "$24", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=600&q=80" },
  
  // Dinner
  { id: 9, category: "Dinner", name: "Pan-Seared Salmon", desc: "Asparagus, lemon butter sauce, potato purée", price: "$32", image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=600&q=80" },
  { id: 10, category: "Dinner", name: "Ribeye Steak", desc: "8oz prime cut, roasted root vegetables, peppercorn jus", price: "$45", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80" },
  { id: 11, category: "Dinner", name: "Duck Breast", desc: "Cherry glaze, sweet potato fondant, seasonal greens", price: "$38", image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=600&q=80" },
  { id: 12, category: "Dinner", name: "Eggplant Wellington", desc: "Vegetarian delight, rich tomato ragout, mozzarella", price: "$28", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80" },
  
  // Drinks
  { id: 13, category: "Drinks", name: "Artisanal Espresso", desc: "Locally roasted beans, served hot or iced", price: "$5", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80" },
  { id: 14, category: "Drinks", name: "Signature Cocktails", desc: "Ask your server for our seasonal mixologist creations", price: "$14", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80" },
  { id: 15, category: "Drinks", name: "Fresh Pressed Juices", desc: "Orange, Apple, Green Detox, or Carrot Ginger", price: "$7", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80" },
  { id: 16, category: "Drinks", name: "Wine Pairing", desc: "Sommelier curated glass to match your meal", price: "$12+", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" },
];

const categories: Category[] = ["All", "Breakfast", "Lunch", "Dinner", "Drinks"];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full pt-20 pb-24 md:pb-32 bg-white relative">
      {/* Page Hero */}
      <section className="relative py-32 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
            alt="Menu background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Our Menu</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover a symphony of flavors prepared fresh daily.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                  : "bg-secondary text-foreground hover:bg-secondary/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredItems.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 group items-center sm:items-start">
              <div className="w-32 h-32 shrink-0 rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                  <span className="text-lg font-bold text-primary mt-1 sm:mt-0">{item.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/95 backdrop-blur-sm border-t border-border shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-40">
        <a 
          href="tel:+15551234567"
          className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl active:scale-95 transition-transform text-lg"
        >
          <PhoneCall className="w-5 h-5" />
          Reserve a Table
        </a>
      </div>
    </div>
  );
}
