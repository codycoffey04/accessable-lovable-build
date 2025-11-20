/**
 * Transform product titles to replace "Donning Aid" with "Donning Sock"
 * This ensures consistent product naming across the site
 */
export function transformProductTitle(title: string): string {
  if (!title) return title;
  
  // Map common variations of "Donning Aid" to "Donning Sock"
  // Order matters - most specific patterns first
  if (title.includes('Donning Aid') || title.includes('donning aid')) {
    return title
      .replace(/AccessAble Sock Donning Aid/gi, 'AccessAble Donning Sock')
      .replace(/Sock Donning Aid/gi, 'Donning Sock')
      .replace(/Donning Aid/gi, 'Donning Sock')
      .replace(/donning aid/gi, 'Donning Sock');
  }
  return title;
}

