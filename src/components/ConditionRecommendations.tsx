import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ConditionRecommendationsProps {
  condition: string;
}

export const ConditionRecommendations = ({ condition }: ConditionRecommendationsProps) => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products tagged with the condition
        const allProducts = await getProducts(6, `tag:${condition}`);
        setProducts(allProducts);
      } catch (error) {
        console.error('Error fetching condition products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [condition]);

  const handleQuickAdd = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
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

  if (loading || products.length === 0) {
    return null;
  }

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Recommended Products</h2>
          <p className="text-lg text-muted-foreground">
            Products designed with your needs in mind
          </p>
        </div>

        {/* Bundle CTA */}
        <div className="bg-primary/10 rounded-lg p-6 mb-8 text-center">
          <Badge className="mb-2">Special Offer</Badge>
          <p className="text-lg font-medium mb-2">
            Get the Complete Kit and Save 20%
          </p>
          <p className="text-muted-foreground mb-4">
            Bundle recommended products together for maximum independence
          </p>
          <Button size="lg">
            View Complete Kit →
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const variant = product.node.variants.edges[0]?.node;
            return (
              <Card key={product.node.id} className="overflow-hidden group">
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
                    <h3 className="font-medium mb-2 hover:text-primary transition-colors line-clamp-2">
                      {product.node.title}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground line-through">
                        ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                      </p>
                      <p className="font-bold text-lg text-primary">
                        ${(parseFloat(product.node.priceRange.minVariantPrice.amount) * 0.9).toFixed(2)}
                      </p>
                      <p className="text-xs text-green-600">Save 10% in bundle</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleQuickAdd(product)}
                      disabled={!variant?.availableForSale}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Quick Add
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <Link to={`/products/${product.node.handle}`}>
                    <Button size="sm" variant="link" className="w-full mt-2 p-0">
                      View Details →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
