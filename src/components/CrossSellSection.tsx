import { useEffect, useState } from 'react';
import { getProducts, ShopifyProduct } from '@/lib/shopify';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { getProductImage } from '@/lib/productImages';

interface CrossSellSectionProps {
  product: ShopifyProduct;
}

export const CrossSellSection = ({ product }: CrossSellSectionProps) => {
  const [relatedProducts, setRelatedProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        let query = '';
        
        // Logic 1: If compression socks → Suggest donning sock
        if (product.node.title.toLowerCase().includes('compression')) {
          query = 'product_type:Donning Sock';
        }
        // Logic 2: If donning sock → Suggest compression socks
        else if (product.node.title.toLowerCase().includes('donning') || 
                 product.node.title.toLowerCase().includes('sock aid')) {
          query = 'product_type:Compression Socks';
        }
        // Logic 3: If knee-high → Suggest ankle
        else if (product.node.title.toLowerCase().includes('knee')) {
          query = 'title:ankle OR title:crew';
        }
        // Default: Show related products
        else {
          query = 'available_for_sale:true';
        }

        const products = await getProducts(3, query);
        // Filter out current product
        const filtered = products.filter(p => p.node.id !== product.node.id);
        setRelatedProducts(filtered.slice(0, 2));
      } catch (error) {
        console.error('Error fetching related products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [product]);

  const handleQuickAdd = (relatedProduct: ShopifyProduct) => {
    const firstVariant = relatedProduct.node.variants.edges[0];
    if (!firstVariant) return;

    addItem({
      product: relatedProduct,
      variantId: firstVariant.node.id,
      variantTitle: firstVariant.node.title,
      price: firstVariant.node.price,
      quantity: 1,
      selectedOptions: firstVariant.node.selectedOptions,
    });

    toast.success('Added to cart', {
      description: `${relatedProduct.node.title} has been added to your cart.`,
    });
  };

  if (loading || relatedProducts.length === 0) return null;

  return (
    <section className="py-12 border-t" aria-label="Complete Your Comfort Kit">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Complete Your Comfort Kit</h2>
          <p className="text-muted-foreground">Customers who bought this also purchased:</p>
          <Badge variant="secondary" className="mt-2">Save 10% when bought together</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {relatedProducts.map((relatedProduct) => {
            const firstVariant = relatedProduct.node.variants.edges[0];
            const productImage = getProductImage(
              relatedProduct.node.images.edges,
              relatedProduct.node.productType,
              relatedProduct.node.handle,
              relatedProduct.node.title
            );
            const bundlePrice = (
              parseFloat(product.node.priceRange.minVariantPrice.amount) +
              parseFloat(relatedProduct.node.priceRange.minVariantPrice.amount)
            ) * 0.9;

            return (
              <Card key={relatedProduct.node.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Link 
                      to={`/products/${relatedProduct.node.handle}`}
                      className="flex-shrink-0"
                    >
                      <img
                        src={productImage.url}
                        alt={productImage.altText || relatedProduct.node.title}
                        className="w-24 h-24 object-cover rounded"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/compression-sock-black-product.jpg';
                        }}
                      />
                    </Link>
                    <div className="flex-1">
                      <Link to={`/products/${relatedProduct.node.handle}`}>
                        <h3 className="font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
                          {relatedProduct.node.title}
                        </h3>
                      </Link>
                      <div className="space-y-1 text-sm mb-3">
                        <p className="line-through text-muted-foreground">
                          ${relatedProduct.node.priceRange.minVariantPrice.amount}
                        </p>
                        <p className="text-primary font-semibold">
                          Bundle: ${bundlePrice.toFixed(2)} (Save 10%)
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleQuickAdd(relatedProduct)}
                          disabled={!firstVariant?.node.availableForSale}
                          className="flex-1"
                        >
                          Quick Add
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="flex-1"
                        >
                          <Link to={`/products/${relatedProduct.node.handle}`}>
                            View Product
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
