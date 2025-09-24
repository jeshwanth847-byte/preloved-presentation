import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Popular Locations */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Popular Locations</h4>
            <ul className="space-y-2">
              {["Kolkata", "Chennai", "Pune", "Delhi"].map((city) => (
                <li key={city}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending Locations */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Trending Locations</h4>
            <ul className="space-y-2">
              {["Bhubaneshwar", "Hyderabad", "Chandigarh", "Nashik"].map((city) => (
                <li key={city}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">About Us</h4>
            <ul className="space-y-2">
              {["Contact Us", "Careers", "Help", "Privacy Information"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            
            <div className="space-y-2">
              <a href="#" className="block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_%28black%29_SVG.svg" 
                  alt="Download on App Store" 
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2006-2025 OLX. All rights reserved | CarTrade Tech Group
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;