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
  
  // Bundles and kits
  if (
    productTypeLower.includes('bundle') ||
    handleLower.includes('bundle') ||
    titleLower.includes('bundle') ||
    titleLower.includes('kit') ||
    titleLower.includes('independence') ||
    titleLower.includes('freedom') ||
    titleLower.includes('starter')
  ) {
    return {
      url: '/images/compression-sock-black-product.jpg',
      altText: 'AccessAble Product Bundle'
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
 * Returns Shopify image if available and valid (not placeholder), otherwise uses fallback
 * Always returns an image (never null)
 */
export function getProductImage(
  shopifyImages: Array<{ node: ProductImage }> | undefined,
  productType: string | null,
  handle: string | null,
  title: string | null
): ProductImage {
  console.log('🖼️ getProductImage called:', {
    hasImages: shopifyImages?.length || 0,
    firstImageUrl: shopifyImages?.[0]?.node?.url,
    productType,
    handle,
    title
  });

  // Check if Shopify has valid images (not placeholders or suspicious URLs)
  const firstImageUrl = shopifyImages?.[0]?.node?.url || '';
  const isPlaceholder = firstImageUrl.includes('placeholder') || 
                        firstImageUrl.includes('no-image') ||
                        firstImageUrl.includes('default') ||
                        firstImageUrl.endsWith('.svg'); // SVG files are likely placeholders
  
  const hasValidImage = shopifyImages && 
    shopifyImages.length > 0 && 
    firstImageUrl &&
    firstImageUrl.length > 20 && // Real URLs are longer than placeholder URLs
    !isPlaceholder;

  // If Shopify has valid images, use the first one
  if (hasValidImage) {
    console.log('✅ Using Shopify image:', shopifyImages[0].node.url);
    return shopifyImages[0].node;
  }
  
  // Otherwise use fallback (always returns an image)
  const fallback = getProductFallbackImage(productType, handle, title);
  console.log('🔄 Using fallback image:', fallback.url, 'for product:', title);
  return fallback;
}

/**
 * Get all product images with fallback
 * Returns Shopify images if available and valid (not placeholders), otherwise returns array with fallback image
 */
export function getProductImages(
  shopifyImages: Array<{ node: ProductImage }> | undefined,
  productType: string | null,
  handle: string | null,
  title: string | null
): Array<{ node: ProductImage }> {
  // Check if Shopify has valid images (not placeholders or suspicious URLs)
  const hasValidImages = shopifyImages && 
    shopifyImages.length > 0 &&
    shopifyImages.some(img => {
      const url = img.node.url || '';
      return url &&
        url.length > 20 &&
        !url.includes('placeholder') &&
        !url.includes('no-image') &&
        !url.includes('default') &&
        !url.endsWith('.svg');
    });

  // If Shopify has valid images, filter out placeholders and use them
  if (hasValidImages) {
    const validImages = shopifyImages.filter(img => {
      const url = img.node.url || '';
      return url &&
        url.length > 20 &&
        !url.includes('placeholder') &&
        !url.includes('no-image') &&
        !url.includes('default') &&
        !url.endsWith('.svg');
    });
    if (validImages.length > 0) {
      return validImages;
    }
  }
  
  // Otherwise return array with fallback
  const fallback = getProductFallbackImage(productType, handle, title);
  return [{ node: fallback }];
}

