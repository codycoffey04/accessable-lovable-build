import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';

interface StickyAddToCartProps {
  product: any;
  selectedVariant: any;
  quantity: number;
}

export const StickyAddToCart = ({ product, selectedVariant, quantity }: StickyAddToCartProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar when user scrolls past the main add-to-cart button
      const mainButton = document.getElementById('main-add-to-cart');
      if (mainButton) {
        const rect = mainButton.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      }
    };

    // Hide sticky bar when keyboard is visible (WCAG 2.2 Focus Not Obscured)
    const handleResize = () => {
      if (window.visualViewport) {
        const keyboardVisible = window.visualViewport.height < window.innerHeight;
        if (keyboardVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.visualViewport?.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.visualViewport?.removeEventListener('resize', handleResize);
    };
  }, []);

  // Hide when any element is focused
  useEffect(() => {
    const handleFocus = () => {
      const stickyBar = document.getElementById('sticky-add-to-cart');
      if (stickyBar && isVisible) {
        stickyBar.style.transform = 'translateY(100%)';
      }
    };

    const handleBlur = () => {
      const stickyBar = document.getElementById('sticky-add-to-cart');
      if (stickyBar) {
        stickyBar.style.transform = 'translateY(0)';
      }
    };

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [isVisible]);

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addItem({
      product,
      variantId: selectedVariant.node.id,
      variantTitle: selectedVariant.node.title,
      price: selectedVariant.node.price,
      quantity,
      selectedOptions: selectedVariant.node.selectedOptions,
    });

    setItemAdded(true);
    setTimeout(() => setItemAdded(false), 3000);

    toast.success('Added to cart', {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        id="sticky-add-to-cart"
        className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg z-40 transition-transform duration-300"
        style={{ minHeight: '48px' }}
      >
        <div className="container flex items-center justify-between gap-4 py-2">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate">{product.node.title}</p>
            <p className="text-sm text-muted-foreground">
              ${selectedVariant?.node.price.amount}
            </p>
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={!selectedVariant?.node.availableForSale}
            className="min-h-[48px] min-w-[48px]"
            size="lg"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* ARIA live region for screen reader announcements */}
      <div
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      >
        {itemAdded && 'Item added to cart successfully'}
      </div>
    </>
  );
};
