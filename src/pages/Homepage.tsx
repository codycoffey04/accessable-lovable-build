import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  CheckCircle2, 
  Shield, 
  Clock, 
  Ruler,
  Package,
  Wrench,
  Gift,
  Award,
  Users,
  Lock,
  Zap,
  X
} from "lucide-react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { getProductImage } from "@/lib/productImages";
import { transformProductTitle } from "@/lib/productTitleTransform";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { Schema } from "@/components/Schema";
import { generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/schema";

const UserTypeModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]" aria-describedby="user-type-description">
        <DialogHeader>
          <DialogTitle>Find Your Fit</DialogTitle>
          <DialogDescription id="user-type-description">
            Help us personalize your shopping experience
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <Link 
            to="/collections/limited-mobility" 
            className="p-6 border rounded-lg hover:border-primary transition-colors text-center"
            onClick={onClose}
          >
            <h3 className="font-semibold mb-2">I Need Mobility Support</h3>
            <p className="text-sm text-muted-foreground">Adaptive solutions for daily independence</p>
          </Link>
          <Link 
            to="/pro" 
            className="p-6 border rounded-lg hover:border-primary transition-colors text-center"
            onClick={onClose}
          >
            <h3 className="font-semibold mb-2">I'm a Healthcare Professional</h3>
            <p className="text-sm text-muted-foreground">Bulk ordering and professional resources</p>
          </Link>
          <Link 
            to="/collections/travel" 
            className="p-6 border rounded-lg hover:border-primary transition-colors text-center"
            onClick={onClose}
          >
            <h3 className="font-semibold mb-2">I'm a Traveler</h3>
            <p className="text-sm text-muted-foreground">Comfort for long journeys</p>
          </Link>
          <Link 
            to="/collections/compression-socks" 
            className="p-6 border rounded-lg hover:border-primary transition-colors text-center"
            onClick={onClose}
          >
            <h3 className="font-semibold mb-2">I'm a Service Worker</h3>
            <p className="text-sm text-muted-foreground">All-day comfort for nurses and professionals</p>
          </Link>
        </div>
        <Link 
          to="/collections/all" 
          className="text-center text-sm text-muted-foreground hover:text-foreground"
          onClick={onClose}
        >
          Show Me Everything →
        </Link>
      </DialogContent>
    </Dialog>
  );
};

const ProductCard = ({ product, index }: { product: ShopifyProduct; index: number }) => {
  const addItem = useCartStore(state => state.addItem);
  const variant = product.node.variants.edges[0]?.node;

  // Transform product title to replace "Donning Aid" with "Donning Sock"
  const displayTitle = transformProductTitle(product.node.title);

  const handleAddToCart = () => {
    if (!variant) return;
    
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions
    });
    
    toast.success('Added to cart', {
      description: `${displayTitle} has been added to your cart.`
    });
  };

  // Determine fallback image based on index: 0=black, 1=tan, 2=white
  const getFallbackImage = () => {
    const indexMod = index % 3;
    if (indexMod === 0) return '/images/compression-sock-black-product.jpg';
    if (indexMod === 1) return '/images/compression-sock-tan-product.jpg';
    return '/images/compression-sock-white-product.jpg';
  };

  return (
    <Card className="overflow-hidden group">
      <Link to={`/products/${product.node.handle}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          {(() => {
            const productImage = getProductImage(
              product.node.images.edges,
              product.node.productType,
              product.node.handle,
              product.node.title
            );
            // If using fallback (Shopify image is placeholder), use color-varied fallback
            const firstImageUrl = product.node.images.edges?.[0]?.node?.url || '';
            const isPlaceholder = !firstImageUrl || 
                                 firstImageUrl.includes('placeholder') || 
                                 firstImageUrl.includes('no-image') ||
                                 firstImageUrl.includes('default') ||
                                 firstImageUrl.endsWith('.svg') ||
                                 firstImageUrl.length <= 20;
            
            const imageUrl = isPlaceholder ? getFallbackImage() : productImage.url;
            
            return (
              <img
                src={imageUrl}
                alt={productImage.altText || displayTitle}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = getFallbackImage();
                }}
              />
            );
          })()}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/products/${product.node.handle}`}>
          <h3 className="font-medium mb-2 hover:text-primary transition-colors">
            {displayTitle}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <p className="font-bold">
            ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
          </p>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost" aria-label="Add to wishlist">
              <Heart className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              onClick={handleAddToCart}
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SizingQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "What's your primary reason for considering compression socks?",
      options: [
        "Post-surgical recovery",
        "Limited hand strength or arthritis",
        "Daily leg comfort and support",
        "Travel or extended standing",
        "Healthcare provider recommendation"
      ]
    },
    {
      question: "Have you been advised on a specific compression level?",
      options: [
        "Yes, 15-20 mmHg",
        "Yes, 20-30 mmHg",
        "No, I'm not sure",
        "I'm exploring options"
      ]
    },
    {
      question: "Do you use mobility aids? (Select all that apply)",
      options: [
        "Wheelchair",
        "Walker",
        "Cane",
        "Prosthetics",
        "None"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Show results
      setStep(questions.length);
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
  };

  if (step === questions.length) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold mb-4">Based on your answers, we recommend:</h3>
        <p className="text-lg mb-6">[Product Name]</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/collections/compression-socks">View Product</Link>
          </Button>
          <Button size="lg" variant="outline" onClick={resetQuiz}>
            Start Over
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          This quiz provides product suggestions only. Always follow your healthcare provider's guidance.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          {questions.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-muted'}`}
            />
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-6">{questions[step].question}</h3>
      </div>
      <div className="grid gap-3">
        {questions[step].options.map((option) => (
          <Button
            key={option}
            variant="outline"
            className="h-auto py-4 px-6 justify-start text-left"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default function Homepage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts(3).then(data => {
      setProducts(data);
      setLoading(false);
    }).catch(error => {
      console.error('Error fetching products:', error);
      setLoading(false);
    });
  }, []);

  // Generate schemas
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: window.location.origin }
  ]);

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <Schema schema={organizationSchema} />
      <Schema schema={breadcrumbSchema} />
      
      <ExitIntentModal />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Designed for Independence. Built for Comfort.
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Adaptive compression solutions for active, dignified living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8" onClick={() => setModalOpen(true)}>
                  Find Your Fit
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link to="/collections/all">Shop All Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/homepage-hero.jpg" 
                alt="Woman wearing AccessAble compression socks with mobility aid visible" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Type Modal */}
      <UserTypeModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Product Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          {loading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No products found yet.</p>
              <p className="text-sm">Create products in your Shopify store to display them here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.node.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Feature Highlights Icon Grid */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Medical-Grade Compression</h3>
              <p className="text-sm text-muted-foreground">
                Graduated compression technology built to professional standards. FDA-registered manufacturing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Wrench className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Adaptive Design</h3>
              <p className="text-sm text-muted-foreground">
                Wide-mouth opening and integrated pull-tabs. Put them on yourself in under 60 seconds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">All-Day Comfort</h3>
              <p className="text-sm text-muted-foreground">
                Moisture-wicking bamboo-blend fabric. Reinforced construction. Designed for 12+ hour wear.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Ruler className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Extended Sizing</h3>
              <p className="text-sm text-muted-foreground">
                S through XXL. Built for real bodies, not just averages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Independent Comfort in Three Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Your Compression Level</h3>
              <p className="text-muted-foreground mb-4">
                15-20 mmHg for daily support. 20-30 mmHg for post-surgical or as directed by your provider. Unsure?
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link to="/learn">See our Compression Guide →</Link>
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Find Your Size</h3>
              <p className="text-muted-foreground mb-4">
                Measure your calf and ankle circumference. Use our sizing chart for the best fit.
              </p>
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link to="/size-guide">Watch our sizing video →</Link>
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Experience the Difference</h3>
              <p className="text-muted-foreground">
                Wide opening. Pull-tab system. Comfort that lasts all day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Built With Real Users. Trusted by Professionals.</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">Trusted by 10,000+ Users</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "I can put these on myself. That matters more than you'd think."
                </p>
                <p className="font-medium">Margaret D.</p>
                <p className="text-sm text-muted-foreground">Post-knee replacement</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Finally, compression socks my patients can actually use independently."
                </p>
                <p className="font-medium">David Chen, PT</p>
                <p className="text-sm text-muted-foreground">Seattle, WA</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The wide opening makes all the difference. No more waiting for help."
                </p>
                <p className="font-medium">Robert K.</p>
                <p className="text-sm text-muted-foreground">Limited hand strength</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-4xl font-bold mb-2">84%</p>
              <p className="text-muted-foreground">of users put them on independently</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">150+</p>
              <p className="text-muted-foreground">healthcare facilities trust AccessAble</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.7</p>
              <p className="text-muted-foreground">star average rating from 380 reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Learn What Works for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Compression 101: What You Need to Know</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Understanding compression levels, sizing, and when to wear them.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/learn/compression-101">5 min read →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Putting On Compression Socks: A Step-by-Step Guide</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Video tutorial with adaptive techniques for limited mobility.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/learn">Watch now →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">Choosing the Right Compression Level</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  15-20 vs. 20-30 mmHg—what's right for your situation?
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link to="/learn/compression-101">5 min read →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/images/homepage-founder-story.jpg" 
                  alt="AccessAble product lineup showing compression socks with pull-tabs" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-6">Innovated for Independence</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  After years in adaptive equipment design, we saw a persistent gap: compression products were either clinically effective but impossible to use independently, or easy to put on but lacked real medical-grade performance.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  AccessAble bridges that gap. Graduated compression technology with adaptive features built in—not added on. Designed with physical therapists. Tested with the people who'll actually wear them.
                </p>
                <p className="text-lg font-semibold mb-8">
                  Independence shouldn't require choosing between efficacy and ease.
                </p>
                <Button size="lg" asChild>
                  <Link to="/about">Our Story →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Condition-Specific Callouts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Designed for Your Situation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Post-Surgical Recovery</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Graduated compression designed for comfort during recovery. Compatible with mobility aids.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link to="/collections/post-surgical">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Limited Hand Strength</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Adaptive features for arthritis, reduced grip, or limited dexterity. Independent donning.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link to="/collections/limited-mobility">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Wheelchair Users</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Built to work with your daily routine. Comfortable seated wear. Easy on, easy off.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link to="/collections/wheelchair">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Active Lifestyles</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For professionals, travelers, and anyone on their feet. All-day comfort without compromise.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link to="/collections/active">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sizing Quiz Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-muted-foreground">
              Answer three questions to find your ideal compression solution.
            </p>
          </div>
          <SizingQuiz />
        </div>
      </section>

      {/* AccessAble Pro Callout */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">For Healthcare Professionals</Badge>
            <h2 className="text-3xl font-bold mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bulk ordering, starter kits, and dedicated support for clinics, facilities, and medical supply distributors.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Volume pricing starting at 25+ units</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Custom starter kits with flexible SKUs</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Dedicated account management</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>24/7 professional support</span>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link to="/pro">Explore Pro Solutions →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Compression that works with you. Comfort that lasts.
            </p>
            <Button size="lg" asChild>
              <Link to="/collections/all">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">30-Day Fit Guarantee</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Package className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">Free Exchanges</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Lock className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">Secure Checkout</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">Designed for Accessibility</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">FDA-Registered Manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* FDA Disclaimer Footer */}
      <section className="py-8 bg-muted/40 border-t">
        <div className="container mx-auto px-4">
          <p className="text-sm text-muted-foreground text-center max-w-4xl mx-auto">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Compression garments should be used according to your healthcare provider's guidance.{' '}
            <Link to="/fda-disclaimer" className="underline hover:text-foreground">
              View Full Disclaimer →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
