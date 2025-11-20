import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Check } from "lucide-react";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { getProductImage } from "@/lib/productImages";

interface ConditionRecommendationsProps {
  condition: string;
}

interface ProductRecommendation {
  primary?: {
    title: string;
    whyHelps: string;
    keyFeatures: string[];
    ctaText: string;
    ctaLink: string;
  };
  secondary?: {
    title: string;
    whyDifferent: string;
    keyFeatures: string[];
    ctaText: string;
    ctaLink: string;
  };
  completeSolution?: {
    title: string;
    whatsIncluded: string[];
    whyBundle: string;
    savings: string;
    ctaText: string;
    ctaLink: string;
  };
}

const conditionRecommendations: Record<string, ProductRecommendation> = {
  'post-surgery': {
    primary: {
      title: 'Sock Donning Aid',
      whyHelps: 'The extended handle reduces how far you need to bend. You can position the sock on the frame, place it on a low surface or the floor, and slide your foot in while seated. Respects 90-degree hip precautions and other bending restrictions.',
      keyFeatures: [
        'Ergonomic handle designed for reduced grip strength',
        'Non-slip surface keeps sock stable during donning',
        'Works while seated—no standing balance required',
        'Lightweight, easy to position'
      ],
      ctaText: 'Shop Donning Sock',
      ctaLink: '/collections/donning-aids'
    },
    secondary: {
      title: 'Compression Socks (20-30 mmHg)',
      whyDifferent: '3x wider opening than standard compression socks. Integrated pull-tabs. Designed for people who need medical-grade compression but have limited hand strength or flexibility.',
      keyFeatures: [
        'Wide-mouth opening reduces flexibility needed',
        'Pull-tabs require less grip strength than pulling bare fabric',
        'Graduated 20-30 mmHg compression (follow your provider\'s specified level)',
        'Extended sizing with wide-calf options'
      ],
      ctaText: 'Shop Compression Socks',
      ctaLink: '/collections/compression-socks'
    },
    completeSolution: {
      title: 'Post-Surgical Recovery Bundle',
      whatsIncluded: [
        '2 pairs compression socks (20-30 mmHg, you select sizes/colors)',
        '1 sock donning aid',
        'Digital care guide'
      ],
      whyBundle: 'You need continuous compression during recovery. Having two pairs means one is always clean while the other is in the wash. Bundle saves 20% vs. buying separately.',
      savings: 'Save 20%',
      ctaText: 'Shop Recovery Bundle',
      ctaLink: '/collections/bundles'
    }
  },
  'arthritis': {
    primary: {
      title: 'Compression Socks with Wide Opening',
      whyHelps: 'The opening is 3x wider than standard compression socks. Your foot slides in with less resistance. Integrated pull-tabs give you thick fabric loops to grip—much easier than trying to pinch and pull slippery compression fabric.',
      keyFeatures: [
        'Wide-mouth opening reduces force needed',
        'Pull-tabs designed for limited grip strength',
        'Graduated 20-30 mmHg compression (medical-grade)',
        'Extended sizing, including wide-calf options'
      ],
      ctaText: 'Shop Compression Socks',
      ctaLink: '/collections/compression-socks'
    },
    secondary: {
      title: 'Ergonomic Donning Aid',
      whyDifferent: 'The wide handle is designed for arthritic hands. You hold the handle (which requires less grip strength than holding sock fabric) and pull upward using your arm muscles. Your fingers don\'t do the heavy lifting.',
      keyFeatures: [
        'Wide-grip handle with textured surface',
        'Non-slip frame holds sock stable',
        'Works while seated',
        'Lightweight, easy to position'
      ],
      ctaText: 'Shop Donning Sock',
      ctaLink: '/collections/donning-aids'
    },
    completeSolution: {
      title: 'Independence Bundle',
      whatsIncluded: [
        '2 pairs adaptive compression socks (you select sizes/colors)',
        '1 ergonomic donning aid',
        'Digital care guide'
      ],
      whyBundle: 'The socks are easier to put on than standard compression. The donning aid makes them even easier. Having two pairs means you can rotate during laundry. Bundle saves 20% vs. buying separately.',
      savings: 'Save 20%',
      ctaText: 'Shop Independence Bundle',
      ctaLink: '/collections/bundles'
    }
  },
  'limited-mobility': {
    primary: {
      title: 'Extended-Handle Donning Aid',
      whyHelps: 'The long handle reduces how far forward you need to bend. Place the sock-loaded aid on the floor (or low surface), slide your foot in while seated, and pull upward using the handle. Works for wheelchair users, people with back pain, and anyone who can\'t reach their feet.',
      keyFeatures: [
        'Extended handle (adds {X} inches of reach)',
        'Ergonomic grip designed for limited hand strength',
        'Non-slip surface holds sock stable',
        'Works entirely from seated position'
      ],
      ctaText: 'Shop Extended-Handle Donning Aid',
      ctaLink: '/collections/donning-aids'
    },
    secondary: {
      title: 'Compression Socks with Wide Opening',
      whyDifferent: 'The 3x wider opening means your foot slides in with less resistance. Less ankle flexibility required. Integrated pull-tabs give you something to grip when you can\'t reach the body of the sock.',
      keyFeatures: [
        'Wide-mouth opening reduces flexibility needed',
        'Pull-tabs for grip when reach is limited',
        'Graduated 20-30 mmHg compression',
        'Extended sizing, including wide-calf options'
      ],
      ctaText: 'Shop Compression Socks',
      ctaLink: '/collections/compression-socks'
    },
    completeSolution: {
      title: 'Total Freedom Kit',
      whatsIncluded: [
        '3 pairs adaptive compression socks (you select sizes/colors)',
        '2 donning aids (standard + extended handle options)',
        'Digital care guide with seated donning techniques'
      ],
      whyBundle: 'Maximum flexibility for different situations. Use the standard aid on better mobility days. Use the extended-handle aid when bending is harder. Three pairs mean continuous wear. Bundle saves 25% vs. buying separately.',
      savings: 'Save 25%',
      ctaText: 'Shop Total Freedom Kit',
      ctaLink: '/collections/bundles'
    }
  }
};

export const ConditionRecommendations = ({ condition }: ConditionRecommendationsProps) => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const recommendations = conditionRecommendations[condition];

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

  if (!recommendations) {
    // Fallback to simple product grid if no specific recommendations
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const variant = product.node.variants.edges[0]?.node;
              return (
                <Card key={product.node.id} className="overflow-hidden group">
                  <Link to={`/products/${product.node.handle}`}>
                    <div className="aspect-square overflow-hidden bg-muted">
                      {(() => {
                        const productImage = getProductImage(
                          product.node.images.edges,
                          product.node.productType,
                          product.node.handle,
                          product.node.title
                        );
                        return (
                          <img
                            src={productImage.url}
                            alt={productImage.altText || product.node.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/compression-sock-black-product.jpg';
                            }}
                          />
                        );
                      })()}
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <Link to={`/products/${product.node.handle}`}>
                      <h3 className="font-medium mb-2 hover:text-primary transition-colors line-clamp-2">
                        {product.node.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-bold">
                        ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                      </p>
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
                      <Button size="sm" variant="ghost" aria-label="Add to wishlist">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 container mx-auto px-4" aria-labelledby="recommendations-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="recommendations-heading" className="text-3xl font-bold mb-4">
            Recommended AccessAble Products
          </h2>
        </div>

        {/* Primary Recommendation */}
        {recommendations.primary && (
          <div className="mb-12">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <Badge className="mb-4">Primary Recommendation</Badge>
                <h3 className="text-2xl font-bold mb-4">{recommendations.primary.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  <strong>Why this helps:</strong> {recommendations.primary.whyHelps}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {recommendations.primary.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="lg">
                  <Link to={recommendations.primary.ctaLink}>
                    {recommendations.primary.ctaText} →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Secondary Recommendation */}
        {recommendations.secondary && (
          <div className="mb-12">
            <Card>
              <CardContent className="p-8">
                <Badge variant="outline" className="mb-4">Secondary Recommendation</Badge>
                <h3 className="text-2xl font-bold mb-4">{recommendations.secondary.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  <strong>Why these are different:</strong> {recommendations.secondary.whyDifferent}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {recommendations.secondary.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="lg" variant="outline">
                  <Link to={recommendations.secondary.ctaLink}>
                    {recommendations.secondary.ctaText} →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Complete Solution Bundle */}
        {recommendations.completeSolution && (
          <div className="mb-12">
            <Card className="border-primary bg-primary/10">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-primary">Complete Solution</Badge>
                <h3 className="text-2xl font-bold mb-4">{recommendations.completeSolution.title}</h3>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {recommendations.completeSolution.whatsIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>Why a bundle:</strong> {recommendations.completeSolution.whyBundle}
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link to={recommendations.completeSolution.ctaLink}>
                    {recommendations.completeSolution.ctaText} | {recommendations.completeSolution.savings}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Product Grid - Additional Products */}
        {!loading && products.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 3).map((product) => {
                const variant = product.node.variants.edges[0]?.node;
                return (
                  <Card key={product.node.id} className="overflow-hidden group">
                    <Link to={`/products/${product.node.handle}`}>
                      <div className="aspect-square overflow-hidden bg-muted">
                        {(() => {
                          const productImage = getProductImage(
                            product.node.images.edges,
                            product.node.productType,
                            product.node.handle,
                            product.node.title
                          );
                          return (
                            <img
                              src={productImage.url}
                              alt={productImage.altText || product.node.title}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/images/compression-sock-black-product.jpg';
                              }}
                            />
                          );
                        })()}
                      </div>
                    </Link>
                    <CardContent className="p-4">
                      <Link to={`/products/${product.node.handle}`}>
                        <h3 className="font-medium mb-2 hover:text-primary transition-colors line-clamp-2">
                          {product.node.title}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-bold">
                          ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                        </p>
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
                        <Button size="sm" variant="ghost" aria-label="Add to wishlist">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
