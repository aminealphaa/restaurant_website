import { useState } from "react";
import { Phone, MapPin, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="w-full pt-20">
      {/* Page Hero */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Book a table, plan an event, or just say hello.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                {/* Phone CTA */}
                <a 
                  href="tel:+15551234567" 
                  className="flex items-start gap-4 p-6 bg-secondary rounded-2xl border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us</h3>
                    <p className="text-muted-foreground mb-2">For reservations and immediate inquiries</p>
                    <p className="text-primary font-bold text-xl">+1 (555) 123-4567</p>
                  </div>
                </a>

                {/* WhatsApp CTA */}
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-[#E8F5E9] rounded-2xl border border-[#C8E6C9] hover:border-[#4CAF50] transition-colors group"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#4CAF50] group-hover:text-white transition-colors text-[#4CAF50]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E7D32] mb-1">WhatsApp</h3>
                    <p className="text-[#388E3C]/80 mb-2">Quick messages and group bookings</p>
                    <p className="text-[#4CAF50] font-bold text-xl">Chat with us</p>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-primary font-semibold">
                    <MapPin className="w-5 h-5" /> Location
                  </div>
                  <p className="text-muted-foreground">
                    123 Culinary Avenue<br />
                    Food District, FD 90210<br />
                    New York, NY
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3 text-primary font-semibold">
                    <Clock className="w-5 h-5" /> Hours
                  </div>
                  <p className="text-muted-foreground">
                    Mon-Thu: 11am - 10pm<br />
                    Fri-Sat: 11am - 11pm<br />
                    Sunday: 10am - 9pm
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-secondary rounded-2xl border border-border flex flex-col items-center justify-center text-muted-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')] opacity-20 grayscale bg-cover bg-center"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="w-10 h-10 mx-auto mb-2 text-foreground" />
                  <p className="font-semibold text-foreground">Find Us Here</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl border border-border shadow-xl shadow-black/5 h-fit">
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                  >
                    <option>Table Reservation</option>
                    <option>Private Event / Catering</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-foreground text-background font-bold rounded-xl hover:bg-foreground/90 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
