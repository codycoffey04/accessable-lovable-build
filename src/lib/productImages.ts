/**
 * Product Image Fallback Utility
 * Provides fallback images when Shopify doesn't return product images
 */

export interface ProductImage {
  url: string;
  altText: string | null;
}

/**
 * Get fallback image based on product type, handle, or title
 */
export function getProductFallbackImage(
  productType: string | null,
  handle: string | null,
  title: string | null
): ProductImage {
  const productTypeLower = productType?.toLowerCase() || '';
  const handleLower = handle?.toLowerCase() || '';
  const titleLower = title?.toLowerCase() || '';
  
  // Compression socks - use product images
  if (
    productTypeLower.includes('compression') ||
    productTypeLower.includes('sock') ||
    handleLower.includes('compression') ||
    handleLower.includes('sock') ||
    titleLower.includes('compression') ||
    titleLower.includes('sock')
  ) {
    // Use black product image as default for compression socks
    return {
      url: '/images/compression-sock-black-product.jpg',
      altText: 'AccessAble Compression Socks'
    };
  }
  
  // Donning aid
  if (
    productTypeLower.includes('donning') ||
    productTypeLower.includes('aid') ||
    handleLower.includes('donning') ||
    handleLower.includes('aid') ||
    titleLower.includes('donning') ||
    titleLower.includes('aid')
  ) {
    // Use lifestyle detail image as fallback for donning aid
    return {
      url: '/images/compression-sock-lifestyle-detail.jpg',
      altText: 'AccessAble Donning Aid'
    };
  }
  
  // Footies or other products
  if (
    productTypeLower.includes('footie') ||
    handleLower.includes('footie') ||
    titleLower.includes('footie')
  ) {
    return {
      url: '/images/compression-sock-white-product.jpg',
      altText: 'AccessAble Pro Footies'
    };
  }
  
  // Default fallback
  return {
    url: '/images/compression-sock-black-product.jpg',
    altText: 'AccessAble Product'
  };
}

/**
 * Get product image with fallback
 * Returns Shopify image if available, otherwise uses fallback
 * Always returns an image (never null)
 */
export function getProductImage(
  shopifyImages: Array<{ node: ProductImage }> | undefined,
  productType: string | null,
  handle: string | null,
  title: string | null
): ProductImage {
  // If Shopify has images, use the first one
  if (shopifyImages && shopifyImages.length > 0 && shopifyImages[0]?.node?.url) {
    return shopifyImages[0].node;
  }
  
  // Otherwise use fallback (always returns an image)
  return getProductFallbackImage(productType, handle, title);
}

/**
 * Get all product images with fallback
 * Returns Shopify images if available, otherwise returns array with fallback image
 */
export function getProductImages(
  shopifyImages: Array<{ node: ProductImage }> | undefined,
  productType: string | null,
  handle: string | null,
  title: string | null
): Array<{ node: ProductImage }> {
  // If Shopify has images, use them
  if (shopifyImages && shopifyImages.length > 0) {
    return shopifyImages;
  }
  
  // Otherwise return array with fallback
  const fallback = getProductFallbackImage(productType, handle, title);
  return [{ node: fallback }];
}

