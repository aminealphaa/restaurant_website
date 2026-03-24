import { Link } from "wouter";
import { ArrowRight, MessageCircle, Phone, Star } from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* landing page hero dining table with elegant food and wine */}
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
            alt="Fine dining experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <span className="block text-primary font-semibold tracking-wider uppercase mb-4">
            Welcome to Savory
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Experience Fine Dining <br className="hidden md:block" /> Like Never Before
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Indulge in a culinary journey crafted with passion, featuring locally sourced ingredients and globally inspired flavors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Book a Table
            </Link>
            <a 
              href="https://wa.me/15551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:bg-gray-100 transition-all hover:shadow-lg text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider">Our Offerings</span>
            <h2 className="text-3xl md:text-5xl mt-2 mb-4">Culinary Experiences</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Breakfast",
                time: "8:00 AM - 11:30 AM",
                desc: "Start your day right with our artisanal pastries, freshly brewed coffee, and hearty morning classics.",
                image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Lunch",
                time: "12:00 PM - 4:00 PM",
                desc: "Perfect for business meetings or casual get-togethers. Enjoy vibrant salads, sandwiches, and warm bowls.",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Dinner",
                time: "5:00 PM - 11:00 PM",
                desc: "An elegant evening affair featuring prime cuts, fresh seafood, and an extensive curated wine list.",
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, idx) => (
              <div key={idx} className="group rounded-2xl overflow-hidden bg-secondary border border-border hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-2">{service.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    {service.time}
                  </span>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {service.desc}
                  </p>
                  <Link href="/menu" className="inline-flex items-center font-semibold text-foreground hover:text-primary transition-colors">
                    View Menu <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* chef plating beautiful food in restaurant kitchen */}
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80" 
                  alt="Our Chef" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-5xl mt-2 mb-6">A Passion for Flavor</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2010, Savory began with a simple mission: to bring honest, beautifully prepared food to our community. Every dish tells a story of local farmers, seasonal ingredients, and culinary craftsmanship.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe that a great meal is more than just food—it's an experience meant to be shared with friends and family in a warm, inviting atmosphere.
              </p>
              <Link 
                href="/about" 
                className="inline-block px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-colors text-lg"
              >
                Discover Our Roots
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-5xl mt-2 mb-16">What Our Guests Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", quote: "Absolutely incredible! The flavors were complex and perfectly balanced. Best dining experience I've had in years." },
              { name: "Michael Chen", quote: "The ambiance, the service, and of course, the food were all top-notch. Highly recommend the tasting menu." },
              { name: "Emily Rodriguez", quote: "A hidden gem. We celebrated our anniversary here and they made it truly special. We'll definitely be coming back." }
            ].map((test, idx) => (
              <div key={idx} className="bg-secondary p-8 rounded-2xl border border-border relative">
                <div className="flex justify-center gap-1 mb-6 text-primary">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">"{test.quote}"</p>
                <p className="font-semibold text-foreground">{test.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="py-20 bg-[#111] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">Ready for an Unforgettable Meal?</h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Reserve your table today or get in touch with us for private events and catering.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call to Reserve
            </Link>
            <a 
              href="https://wa.me/15551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
