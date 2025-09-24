import { TrendingUp, Users, Globe, DollarSign, ShoppingCart, Smartphone, Shield, ArrowRight, Sparkles, Zap, Target, Heart, Monitor, Shirt, Home, Book, Car, Bike } from "lucide-react";
import Footer from "@/components/Footer";
import marketplaceHero from "@/assets/marketplace-hero.jpg";
import growthBg from "@/assets/growth-bg.jpg";
import electronicsCategory from "@/assets/electronics-category.jpg";
import fashionCategory from "@/assets/fashion-category.jpg";
import furnitureCategory from "@/assets/furniture-category.jpg";
import hobbiesCategory from "@/assets/hobbies-category.jpg";
import carsCategory from "@/assets/cars-category.jpg";
import bikesCategory from "@/assets/bikes-category.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20"
          style={{
            backgroundImage: `url(${marketplaceHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 md:h-16 md:w-16 text-primary mr-4 animate-float" />
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
                TWICE LOVED
              </h1>
              <Heart className="h-12 w-12 md:h-16 md:w-16 text-primary ml-4 animate-float" style={{animationDelay: '1s'}} />
            </div>
            <p className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto font-light">
              Where pre-loved items find their 
              <span className="text-primary font-medium"> perfect second home</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in hover:scale-105">
              <div className="relative">
                <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6 group-hover:animate-float" />
                <Sparkles className="h-6 w-6 text-primary/60 absolute -top-2 -right-2 group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Growing Market</h3>
              <p className="text-muted-foreground text-lg">$120B+ global market size with 30% YoY growth</p>
            </div>
            
            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in hover:scale-105" style={{animationDelay: '0.1s'}}>
              <div className="relative">
                <Users className="h-16 w-16 text-primary mx-auto mb-6 group-hover:animate-float" />
                <Zap className="h-6 w-6 text-primary/60 absolute -top-2 -right-2 group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Active Users</h3>
              <p className="text-muted-foreground text-lg">500M+ worldwide users across 100+ countries</p>
            </div>
            
            <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in hover:scale-105" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <Globe className="h-16 w-16 text-primary mx-auto mb-6 group-hover:animate-float" />
                <Target className="h-6 w-6 text-primary/60 absolute -top-2 -right-2 group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Global Reach</h3>
              <p className="text-muted-foreground text-lg">Present in 100+ countries with local expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-32 px-4 relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${growthBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Market Overview
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                The Growing 
                <span className="text-primary"> Circular Economy</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  "30% annual growth in second-hand market",
                  "Gen Z and Millennials driving 70% of purchases", 
                  "Environmental consciousness increasing demand",
                  "Cost savings of 40-80% compared to new items"
                ].map((item, index) => (
                  <div key={index} className="flex items-start group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg p-10 rounded-3xl border border-border/50 shadow-2xl animate-scale-in">
              <h4 className="text-2xl font-bold mb-8 text-foreground flex items-center">
                <Sparkles className="h-8 w-8 text-primary mr-3" />
                Market Statistics
              </h4>
              
              <div className="space-y-8">
                {[
                  { label: "Market Growth", value: 30, color: "primary" },
                  { label: "Mobile Usage", value: 85, color: "accent" },
                  { label: "Customer Satisfaction", value: 92, color: "primary" }
                ].map((stat, index) => (
                  <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="flex justify-between mb-3">
                      <span className="font-medium text-foreground">{stat.label}</span>
                      <span className="font-bold text-primary">{stat.value}%</span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out`}
                        style={{width: `${stat.value}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-32 px-4 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Our Customers Love
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing pre-loved items across all categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Electronics",
                description: "Smartphones, laptops, cameras & more",
                image: electronicsCategory,
                icon: Monitor,
                gradient: "from-blue-500 to-purple-600"
              },
              {
                title: "Fashion",
                description: "Designer clothes, shoes & accessories",
                image: fashionCategory,
                icon: Shirt,
                gradient: "from-pink-500 to-purple-600"
              },
              {
                title: "Furniture",
                description: "Home decor, vintage finds & modern pieces",
                image: furnitureCategory,
                icon: Home,
                gradient: "from-green-500 to-teal-600"
              },
              {
                title: "Cars",
                description: "Vintage & modern vehicles, sedans, SUVs",
                image: carsCategory,
                icon: Car,
                gradient: "from-red-500 to-orange-600"
              },
              {
                title: "Bikes",
                description: "Motorcycles, bicycles, scooters & more",
                image: bikesCategory,
                icon: Bike,
                gradient: "from-indigo-500 to-blue-600"
              },
              {
                title: "Hobbies",
                description: "Books, art supplies, instruments & more",
                image: hobbiesCategory,
                icon: Book,
                gradient: "from-cyan-500 to-teal-600"
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in hover:scale-105 overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:animate-float`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-32 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets user-friendly design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Mobile-First Design",
                description: "Optimized for mobile with intuitive interface and quick listing creation",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                icon: Shield,
                title: "Secure Transactions",
                description: "Advanced fraud detection and secure payment processing",
                gradient: "from-green-500 to-teal-600"
              },
              {
                icon: ShoppingCart,
                title: "Easy Listing",
                description: "Post items in under 2 minutes with photo upload and auto-categorization",
                gradient: "from-orange-500 to-red-600"
              },
              {
                icon: Users,
                title: "Community Features",
                description: "User ratings, reviews, and verified seller badges",
                gradient: "from-pink-500 to-purple-600"
              },
              {
                icon: Globe,
                title: "Location-Based",
                description: "Find items near you with integrated maps and location filtering",
                gradient: "from-indigo-500 to-blue-600"
              },
              {
                icon: DollarSign,
                title: "Price Intelligence",
                description: "AI-powered price suggestions based on market data",
                gradient: "from-yellow-500 to-orange-600"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-scale-in hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-float shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Revenue Streams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple monetization channels for sustainable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "5%", title: "Transaction Fees", desc: "Commission on successful sales", color: "from-blue-500 to-purple-600" },
              { value: "$5", title: "Premium Listings", desc: "Featured placement for sellers", color: "from-green-500 to-teal-600" },
              { value: "$2", title: "Verification", desc: "Identity and item verification", color: "from-orange-500 to-red-600" },
              { value: "$1", title: "Advertising", desc: "Sponsored listings and ads", color: "from-pink-500 to-purple-600" }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`w-24 h-24 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-glow shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-2xl font-black text-white">{item.value}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-32 px-4 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Future Outlook
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-5xl mx-auto leading-relaxed">
              The second-hand marketplace is positioned for explosive growth as sustainability becomes a global priority
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { year: "2025", desc: "AI-powered personalization and AR try-before-buy features", color: "from-blue-500 to-purple-600" },
              { year: "2026", desc: "Blockchain authentication and carbon footprint tracking", color: "from-green-500 to-teal-600" },
              { year: "2027", desc: "Global expansion to emerging markets and B2B integration", color: "from-orange-500 to-red-600" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-10 rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-scale-in hover:scale-105"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-float shadow-lg`}>
                  <h4 className="text-2xl font-black text-white">{item.year}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;