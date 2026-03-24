import { ChefHat, Leaf, Heart, Users } from "lucide-react";

export function About() {
  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1920&q=80"
            alt="About background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">About Savory</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A story of passion, family, and the pursuit of culinary perfection.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider">Our Heritage</span>
              <h2 className="text-3xl md:text-5xl mt-2 mb-6">Rooted in Tradition, <br />Crafted for Today.</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our journey started in a small family kitchen, where recipes were passed down through generations. What began as a love for home-cooked meals blossomed into Savory—a place where tradition meets modern culinary techniques.
                </p>
                <p>
                  Every ingredient that enters our kitchen is carefully selected. We partner closely with local farmers, butchers, and artisans to ensure that only the freshest, highest-quality produce makes it to your plate. 
                </p>
                <p>
                  We are more than just a restaurant; we are a community gathering space where memories are made, laughter is shared, and every meal is a celebration.
                </p>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* restaurant interior cozy elegant lighting */}
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80" 
                alt="Restaurant interior" 
                className="w-full h-64 object-cover rounded-2xl mt-8"
              />
              {/* fresh ingredients vegetables cooking */}
              <img 
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=600&q=80" 
                alt="Fresh ingredients" 
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Farm to Table</h3>
              <p className="text-gray-400 leading-relaxed">
                We source our ingredients locally to support our community and provide the freshest seasonal flavors possible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Made with Love</h3>
              <p className="text-gray-400 leading-relaxed">
                Cooking is an act of love. Our chefs pour their heart and soul into every dish, ensuring a memorable dining experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Community First</h3>
              <p className="text-gray-400 leading-relaxed">
                Our space is designed to bring people together. Whether it's a date night or a family reunion, you belong here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider">The Masters</span>
            <h2 className="text-3xl md:text-5xl mt-2 mb-4">Meet Our Chefs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The creative minds and skilled hands behind every unforgettable dish at Savory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Rossi",
                role: "Executive Chef",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Elena Chen",
                role: "Head Pastry Chef",
                image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "David Miller",
                role: "Sous Chef",
                image: "https://images.unsplash.com/photo-1577219492769-b63a779fac28?auto=format&fit=crop&w=800&q=80"
              }
            ].map((chef, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 bg-secondary">
                  <img 
                    src={chef.image} 
                    alt={chef.name} 
                    className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <ChefHat className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{chef.name}</h3>
                <p className="text-primary font-semibold">{chef.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
