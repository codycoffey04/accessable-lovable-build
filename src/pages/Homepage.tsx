import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

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

const ProductCard = ({ product }: { product: ShopifyProduct }) => {
  const addItem = useCartStore(state => state.addItem);
  const variant = product.node.variants.edges[0]?.node;

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
      description: `${product.node.title} has been added to your cart.`
    });
  };

  return (
    <Card className="overflow-hidden group">
      <Link to={`/products/${product.node.handle}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          {product.node.images.edges[0]?.node && (
            <img
              src={product.node.images.edges[0].node.url}
              alt={product.node.images.edges[0].node.altText || product.node.title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform"
            />
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/products/${product.node.handle}`}>
          <h3 className="font-medium mb-2 hover:text-primary transition-colors">
            {product.node.title}
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
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
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Trusted by 10,000+ Users</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands who've discovered independence through our adaptive compression solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "[CUSTOMER TESTIMONIAL PLACEHOLDER - Focus on functional benefits and independence]"
                  </p>
                  <p className="font-medium">[Customer Name]</p>
                  <p className="text-sm text-muted-foreground">[User with mobility aid]</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story Teaser */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Innovated for Independence</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Purpose-built adaptive compression for real-world needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learn Hub Preview */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Expert Guides for Every Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Compression 101: What You Need to Know", slug: "compression-101" },
              { title: "Mobility Aids & Sock Compatibility", slug: "mobility-aids" },
              { title: "Travel Tips for Circulation Health", slug: "travel-tips" }
            ].map((article) => (
              <Card key={article.slug}>
                <div className="aspect-video bg-muted"></div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    [Article excerpt placeholder - 1-2 sentences]
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to={`/learn/${article.slug}`}>Read Article →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-center mt-6 text-muted-foreground font-medium">
            These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* AccessAble Pro Callout */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">For Healthcare Professionals</Badge>
            <h2 className="text-3xl font-bold mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Bulk ordering, starter kits, and dedicated support for clinics and facilities.
            </p>
            <Button size="lg" asChild>
              <Link to="/pro">Explore Pro Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FDA Disclaimer (Above Fold where needed) */}
      <div className="sr-only" aria-live="polite">
        These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
      </div>
    </div>
  );
}
