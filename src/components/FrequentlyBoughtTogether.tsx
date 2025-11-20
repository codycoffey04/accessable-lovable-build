import { useState, useEffect } from 'react';
import { getProducts, ShopifyProduct } from '@/lib/shopify';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';
import { getProductImage } from '@/lib/productImages';
import { transformProductTitle } from '@/lib/productTitleTransform';

interface FrequentlyBoughtTogetherProps {
  product: ShopifyProduct;
}

export const FrequentlyBoughtTogether = ({ product }: FrequentlyBoughtTogetherProps) => {
  const [relatedProducts, setRelatedProducts] = useState<ShopifyProduct[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const products = await getProducts(3, 'available_for_sale:true');
        const filtered = products.filter(p => p.node.id !== product.node.id);
        setRelatedProducts(filtered.slice(0, 2));
        
        // Pre-select current product and all related products
        const initialSelection = new Set([product.node.id, ...filtered.slice(0, 2).map(p => p.node.id)]);
        setSelectedItems(initialSelection);
      } catch (error) {
        console.error('Error fetching related products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [product]);

  const toggleItem = (productId: string) => {
    const newSelection = new Set(selectedItems);
    if (newSelection.has(productId)) {
      newSelection.delete(productId);
    } else {
      newSelection.add(productId);
    }
    setSelectedItems(newSelection);
  };

  const calculateTotal = () => {
    let total = 0;
    
    if (selectedItems.has(product.node.id)) {
      total += parseFloat(product.node.priceRange.minVariantPrice.amount);
    }
    
    relatedProducts.forEach(p => {
      if (selectedItems.has(p.node.id)) {
        total += parseFloat(p.node.priceRange.minVariantPrice.amount);
      }
    });
    
    return total;
  };

  const handleAddAllToCart = () => {
    const allProducts = [product, ...relatedProducts];
    let addedCount = 0;

    allProducts.forEach(p => {
      if (selectedItems.has(p.node.id)) {
        const firstVariant = p.node.variants.edges[0];
        if (firstVariant) {
          addItem({
            product: p,
            variantId: firstVariant.node.id,
            variantTitle: firstVariant.node.title,
            price: firstVariant.node.price,
            quantity: 1,
            selectedOptions: firstVariant.node.selectedOptions,
          });
          addedCount++;
        }
      }
    });

    toast.success('Added to cart', {
      description: `${addedCount} item${addedCount > 1 ? 's' : ''} added to your cart.`,
    });
  };

  if (loading || relatedProducts.length === 0) return null;

  const totalPrice = calculateTotal();
  const bundlePrice = totalPrice * 0.85; // 15% discount
  const savings = totalPrice - bundlePrice;

  return (
    <section className="py-12 border-t" aria-label="Frequently Bought Together">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Customers also purchased:</h2>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Current Product */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id={`bundle-${product.node.id}`}
                  checked={selectedItems.has(product.node.id)}
                  onCheckedChange={() => toggleItem(product.node.id)}
                  className="mt-1"
                />
                <label htmlFor={`bundle-${product.node.id}`} className="flex-1 cursor-pointer">
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
                        alt={productImage.altText || transformProductTitle(product.node.title)}
                        className="w-full aspect-square object-cover rounded mb-2"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/compression-sock-black-product.jpg';
                        }}
                      />
                    );
                  })()}
                  <p className="font-semibold text-sm line-clamp-2">{transformProductTitle(product.node.title)}</p>
                  <p className="text-sm text-muted-foreground">
                    ${product.node.priceRange.minVariantPrice.amount}
                  </p>
                </label>
              </div>

              {/* Plus Icon */}
              <div className="hidden md:flex items-center justify-center">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>

              {/* Related Products */}
              {relatedProducts.map((relatedProduct, index) => (
                <div key={relatedProduct.node.id}>
                  {index > 0 && (
                    <div className="md:hidden flex items-center justify-center my-2">
                      <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id={`bundle-${relatedProduct.node.id}`}
                      checked={selectedItems.has(relatedProduct.node.id)}
                      onCheckedChange={() => toggleItem(relatedProduct.node.id)}
                      className="mt-1"
                    />
                    <label htmlFor={`bundle-${relatedProduct.node.id}`} className="flex-1 cursor-pointer">
                      {(() => {
                        const productImage = getProductImage(
                          relatedProduct.node.images.edges,
                          relatedProduct.node.productType,
                          relatedProduct.node.handle,
                          relatedProduct.node.title
                        );
                        return (
                          <img
                            src={productImage.url}
                            alt={productImage.altText || relatedProduct.node.title}
                            className="w-full aspect-square object-cover rounded mb-2"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/compression-sock-black-product.jpg';
                            }}
                          />
                        );
                      })()}
                      <p className="font-semibold text-sm line-clamp-2">{relatedProduct.node.title}</p>
                      <p className="text-sm text-muted-foreground">
                        ${relatedProduct.node.priceRange.minVariantPrice.amount}
                      </p>
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Individual Prices:</span>
                <span className="line-through text-muted-foreground">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Bundle Price:</span>
                <span className="text-primary">${bundlePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-green-600">
                <span>You Save:</span>
                <span>${savings.toFixed(2)} (15%)</span>
              </div>
            </div>

            <Button
              onClick={handleAddAllToCart}
              size="lg"
              className="w-full mt-6"
              disabled={selectedItems.size === 0}
            >
              Add Selected to Cart ({selectedItems.size} items)
            </Button>

            {/* ARIA live region for screen readers */}
            <div
              aria-live="polite"
              aria-atomic="true"
              className="sr-only"
            >
              Total price: ${bundlePrice.toFixed(2)}. {selectedItems.size} items selected.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
