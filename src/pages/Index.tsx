import { TrendingUp, Users, Globe, DollarSign, ShoppingCart, Smartphone, Shield, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Second-Hand Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Revolutionizing the way people buy and sell pre-owned goods
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-card p-6 rounded-lg border">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Growing Market</h3>
              <p className="text-muted-foreground">$120B+ global market size</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Active Users</h3>
              <p className="text-muted-foreground">500M+ worldwide users</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Available in 100+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Market Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">The Growing Circular Economy</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <span>30% annual growth in second-hand market</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <span>Gen Z and Millennials driving 70% of purchases</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <span>Environmental consciousness increasing demand</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mt-1 mr-3 text-primary flex-shrink-0" />
                  <span>Cost savings of 40-80% compared to new items</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <h4 className="text-xl font-semibold mb-6">Market Statistics</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Market Growth</span>
                    <span className="font-semibold">30%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Mobile Usage</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Customer Satisfaction</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <Smartphone className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Mobile-First Design</h3>
              <p className="text-muted-foreground">Optimized for mobile with intuitive interface and quick listing creation</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Secure Transactions</h3>
              <p className="text-muted-foreground">Advanced fraud detection and secure payment processing</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <ShoppingCart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Easy Listing</h3>
              <p className="text-muted-foreground">Post items in under 2 minutes with photo upload and auto-categorization</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community Features</h3>
              <p className="text-muted-foreground">User ratings, reviews, and verified seller badges</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Location-Based</h3>
              <p className="text-muted-foreground">Find items near you with integrated maps and location filtering</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Price Intelligence</h3>
              <p className="text-muted-foreground">AI-powered price suggestions based on market data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Revenue Streams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">5%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transaction Fees</h3>
              <p className="text-muted-foreground text-sm">Commission on successful sales</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">$5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Listings</h3>
              <p className="text-muted-foreground text-sm">Featured placement for sellers</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">$2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Verification</h3>
              <p className="text-muted-foreground text-sm">Identity and item verification</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">$1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Advertising</h3>
              <p className="text-muted-foreground text-sm">Sponsored listings and ads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Future Outlook</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              The second-hand marketplace is positioned for explosive growth as sustainability becomes a global priority
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="text-2xl font-bold text-primary mb-2">2025</h4>
                <p className="text-muted-foreground">AI-powered personalization and AR try-before-buy features</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="text-2xl font-bold text-primary mb-2">2026</h4>
                <p className="text-muted-foreground">Blockchain authentication and carbon footprint tracking</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h4 className="text-2xl font-bold text-primary mb-2">2027</h4>
                <p className="text-muted-foreground">Global expansion to emerging markets and B2B integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;